import React from 'react';

// There is no concept of typing in this project yet, so adding here for future reference.

// Convert (PR:123:abc) to anchors
// Returns type Replacements = { [string]: React.ReactNode };
// If there are no tags present, this will simply return an empty object
const findTagReplacements = (text) => {
  const PR_LINK_SEGMENTED_REGEX = /\(PR:(\d+)(:([^)]+))?\)/g;
  const replacements = {};

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

  return replacements;
}

// Split the input text and inject anchors in place of tags
// Returns an array of React nodes.
const generateNodes = (text, replacements) => {
  const PR_LINK_REGEX = /(\(PR:\d+:[^)]+?\))/;
  const segments = text.split(PR_LINK_REGEX);
  const nodes = segments.reduce((fragments, curr) => {
    if (curr) { fragments.push(replacements[curr] || curr); }
    return fragments;
  }, []);

  return nodes;
}

const ChangelogListItem = ({ text }) => {
  const replacements = React.useMemo(() => findTagReplacements(text), [text]);
  const nodes = React.useMemo(() => generateNodes(text, replacements), [text, replacements]);
  return nodes;
};

export default ChangelogListItem;
