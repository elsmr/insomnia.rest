import React from 'react';
import { graphql } from 'gatsby';
import { links } from '../config';
import ChangelogLink from '../components/changelog-link';
import ChangelogListItem from '../components/changelog-list-item';
import Link from '../components/link';

export default ({
                  data: {
                    allFile: { edges },
                  },
                }) => (
  <React.Fragment>
    <header className="container header--big">
      <div className="row">
        <div className="col-12">
          <h1>Insomnia Changelog</h1>
          <p>
            <a
              href={links.rss}
              className="button"
              type="application/rss+xml"
              target="_blank"
              title="RSS"
            >
              Subscribe via RSS
            </a>
          </p>
        </div>
      </div>
    </header>
    {edges
      .filter(
        ({
           node: {
             childMarkdownRemark: { frontmatter },
           },
         }) => frontmatter.channel !== 'beta' && frontmatter.channel !== 'alpha',
      )
      .sort((a, b) => {
        const tsA = new Date(
          a.node.childMarkdownRemark.frontmatter.date_iso,
        ).getTime();
        const tsB = new Date(
          b.node.childMarkdownRemark.frontmatter.date_iso,
        ).getTime();
        return tsB - tsA;
      })
      .map(({ node: { childMarkdownRemark: { frontmatter, excerpt } } }) => (
        <article key={`${frontmatter.app}@${frontmatter.slug}`} className="article--preview container">
          <header className="row">
            <div className="col-12">
              <ChangelogLink frontmatter={frontmatter}>
                <h1>
                  Insomnia {frontmatter.app === 'com.insomnia.designer' ? 'Designer' : ''}
                  {' '}
                  <code>{frontmatter.slug}</code>
                </h1>
              </ChangelogLink>
              <div className="meta">
                <time dateTime={frontmatter.date}>{frontmatter.date}</time>
              </div>
            </div>
          </header>
          <section>
            <div className="row">
              <div className="col-12 article--preview__content">
                {excerpt && <p className="mt-0">{excerpt}</p>}
                {frontmatter.major && (
                  <ul className="ul--decorated m-0">
                    {frontmatter.major.map(c => (
                      <li key={c} className="li--major">
                        <ChangelogListItem text={c} />
                      </li>
                    ))}
                  </ul>
                )}
                {frontmatter.minor && (
                  <ul className="ul--decorated">
                    {frontmatter.minor.map(c => (
                      <li key={c} className="li--minor">
                        <ChangelogListItem text={c} />
                      </li>
                    ))}
                  </ul>
                )}
                {frontmatter.fixes && (
                  <ul className="ul--decorated">
                    {frontmatter.fixes.map(c => (
                      <li key={c} className="li--fix">
                        <ChangelogListItem text={c} />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="row article--preview__footer">
              <div className="col-8">
                {(frontmatter.tags || []).map(tag => (
                  <Link
                    key={tag}
                    className="button tags__tag"
                    to={`tags/${tag}`}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              <div className="col-4 article--preview__read-more">
                <ChangelogLink frontmatter={frontmatter}>
                  Continue Reading &raquo;
                </ChangelogLink>
              </div>
            </div>
            <div className="row">
              <div className="col-12 article--preview__separator" />
            </div>
          </section>
        </article>
      ))}
  </React.Fragment>
);

export const pageQuery = graphql`
  query ChangelogCoreIndexQuery {
    allFile(filter: { sourceInstanceName: { eq: "changelog" } }) {
      edges {
        node {
          childMarkdownRemark {
            excerpt(pruneLength: 240)
            frontmatter {
              app
              date(formatString: "MMMM DD, YYYY")
              date_iso: date
              channel
              fixes
              link
              major
              minor
              slug
              summary
            }
          }
        }
      }
    }
  }
`;
