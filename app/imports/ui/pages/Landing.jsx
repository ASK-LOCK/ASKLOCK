import React from 'react';
import { } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className="vertical-placement">
            <a href="/signin#/signin">
            <img className="center-image animated bounce" src="/images/lock_image_transparent_circle.png"/>
            </a>
        </div>
    );
  }
}

export default Landing;
