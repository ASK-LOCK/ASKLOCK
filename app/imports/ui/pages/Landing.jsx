import React from 'react';
<<<<<<< HEAD
import { Grid } from 'semantic-ui-react';
=======
import { Grid, Image } from 'semantic-ui-react';
>>>>>>> parent of 8ac1bad... Merge branch 'KainsCommits'

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <Grid verticalAlign='middle' textAlign='center' container>
<<<<<<< HEAD
          <Grid.Column width={6}>
            <a href="/signin#/signin">
              <img className="animated bounceInUp" src="/images/lock_image_transparent_circle.png"/>
            </a>
=======

          <Grid.Column width={8}>
            <Image size='small' centered src="/images/lock_image.png"/>
            <p>We will sell your password information to make money!</p>
>>>>>>> parent of 8ac1bad... Merge branch 'KainsCommits'
          </Grid.Column>
        </Grid>
    );
  }
}

export default Landing;
