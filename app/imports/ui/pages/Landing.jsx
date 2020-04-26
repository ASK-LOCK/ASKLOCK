import React from 'react';
import {Grid, Container} from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {

    render() {
        return (
            <div className="vertical-placement">
                <Container>
                    <Grid textAlign="center" verticalAlign="middle">
                        <Grid.Column width={6}>
                            <div className="Main-Lock">
                                <a href="/signin#/signin">
                                    <img className="animated bounceInUp"
                                         src="/images/lock_image_transparent_circle.png"/>
                                </a>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>

      {this.props.currentUser ? (
          [<Menu.Item as={NavLink} activeClassName="active" exact to="/add" key='add'>New Acount</Menu.Item>,
            <Menu.Item as={NavLink} activeClassName="active" exact to="/list" key='list'>View My Accounts</Menu.Item>]
      ) : ''}
        );
    }
}

export default Landing;
