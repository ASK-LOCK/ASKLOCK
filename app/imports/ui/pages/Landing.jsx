import React from 'react';
import {Grid, Container} from 'semantic-ui-react';

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
        );
    }
}

export default Landing;
