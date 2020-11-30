import React from 'react';
import GLink from 'gatsby-link';

const Link = ({ children, to, ...props }) => {
  let addedProps = {};

  if (
    !props.onClick &&
    props.event &&
    props.event.event &&
    props.event.properties
  ) {
    addedProps.onClick = () => {
      window.analytics && window.analytics.track(props.event.event, props.event.properties);
    };
  }

  if (to.match(/^(http|https|insomnia|insomniad):\/\//)) {
    return (
      <a href={to} {...addedProps} {...props}>
        {children}
      </a>
    );
  } else {
    return (
      <GLink to={to} {...addedProps} {...props}>
        {children}
      </GLink>
    );
  }
};

export default Link;
