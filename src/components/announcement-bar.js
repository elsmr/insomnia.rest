import React from 'react';
import classnames from 'classnames';

export default function AnnouncementBar(props) {
  return (
    <div className={classnames('announcement-bar', props.className)}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>
              <span className="badge">New</span> {props.children}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
