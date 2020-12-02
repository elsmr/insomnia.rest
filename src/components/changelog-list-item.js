import React from 'react';

// There is no concept of typing in this project yet, so adding here for future reference.

// Convert (PR:123:abc) and [text](url) to anchors
// Returns type Replacements = { [string]: React.ReactNode };
// If there are no tags present, this will simply return an empty object

const findReplacements = (text) => {
  const replacements = {};

  findTagReplacements(text, replacements);
  findMdLinkReplacements(text, replacements);
  findMdCodeBlockReplacements(text, replacements);

  return replacements;
}

const findTagReplacements = (text, replacements) => {
  const PR_LINK_SEGMENTED_REGEX = /\(PR:(\d+)(:([^)]+))?\)/g;

  let match;
  while (match = PR_LINK_SEGMENTED_REGEX.exec(text)) {
    const tag = match[0];
    const prNumber = match[1];
    const user = match[3] || '';
    const userString = (user ? ' by ' + user : '');
    const replacement = (
      <a key={tag} href={`https://github.com/Kong/insomnia/pull/${prNumber}`} target="_blank">
        (#{prNumber}{userString})
      </a>
    );
    replacements[tag] = replacement;
  }
}

const findMdLinkReplacements = (text, replacements) => {
  const MARKDOWN_LINK_REGEX = /\[(.+?)\]\((.+?)\)/g;

  let match;
  while (match = MARKDOWN_LINK_REGEX.exec(text)) {
    const tag = match[0];
    const innerText = match[1];
    const url = match[2];
    const replacement = (
      <a key={tag} href={url} target="_blank">
        {innerText}
      </a>
    );
    replacements[tag] = replacement;
  }
}

const findMdCodeBlockReplacements = (text, replacements) => {
  const MARKDOWN_CODE_REGEX = /`(.+?)`/g;

  let match;
  while (match = MARKDOWN_CODE_REGEX.exec(text)) {
    const tag = match[0];
    const innerText = match[1];
    const replacement = (
      <code key={tag}>{innerText}</code>
    );
    replacements[tag] = replacement;
  }
}

// Split the input text and inject anchors in place of tags
// Tags can be (PR:123:abc), [text](url), or `abc`
// Returns an array of React nodes.
const generateNodes = (text, replacements) => {
  const PR_LINK_REGEX = /(\[.+?\]\(.+?\)|\(PR:\d+:[^)]+?\)|`.+?`)/;
  const segments = text.split(PR_LINK_REGEX);
  const nodes = segments.reduce((fragments, curr) => {
    if (curr) { fragments.push(replacements[curr] || curr); }
    return fragments;
  }, []);

  return nodes;
}

const ChangelogListItem = ({ text }) => {
  const replacements = React.useMemo(() => findReplacements(text), [text]);
  const nodes = React.useMemo(() => generateNodes(text, replacements), [text, replacements]);
  return nodes;
};

export default ChangelogListItem;
