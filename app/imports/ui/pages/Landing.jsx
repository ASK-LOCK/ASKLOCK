import React from 'react';
import { Grid } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={6}>
            <a href="/signin#/signin">
              <img className="animated bounceInUp" src="/images/lock_image_transparent_circle.png"/>
            </a>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Landing;
