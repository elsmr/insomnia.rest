import React from 'react';
import GLink from 'gatsby-link';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

const Link = ({ children, to, ...props }) => {
  let addedProps = {};

  if (
    !props.onClick &&
    props.event &&
    props.event.category &&
    props.event.action &&
    props.event.label
  ) {
    addedProps.onClick = () => {
      trackCustomEvent(props.event);
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
