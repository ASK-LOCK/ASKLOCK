import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={8}>
            <a href="/signin#/signin">
            <img src="/images/lock_image.png"/>
            </a>
            <p>We will sell your password information to make money!</p>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Landing;
