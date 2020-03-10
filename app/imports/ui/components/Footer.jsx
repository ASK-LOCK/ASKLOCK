import React from 'react';
import { Grid, List } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '15px' };
    return (
        <footer>
          <Grid textAlign='center' container>
            <Grid.Column width={3}>
              <List className="font-color-green font-bold font-small"> Social Media </List>
              <hr/>
              <List.Item className="font-color-white" href={'https://www.facebook.com/'}>
                Facebook
              </List.Item> <br />
              <List.Item className="font-color-white" href={'https://www.instagram.com/'}>
                Instagram
              </List.Item> <br />
              <List.Item className="font-color-white" href={'https://twitter.com/'}>
                Twitter
              </List.Item> <br />
            </Grid.Column>

            <Grid.Column width={3}>
              <List className="font-color-green font-bold font-small">About Us</List>
              <hr/>
              <List.Item>
                ASKhole est 2019 <br />
                University of Hawaii<br />
                Honolulu, HI 96822
              </List.Item>
            </Grid.Column>
          </Grid>
        </footer>
    );
  }
}

export default Footer;
