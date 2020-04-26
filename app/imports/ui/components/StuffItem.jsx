import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import { Stuffs } from '/imports/api/stuff/Stuff';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class StuffItem extends React.Component {

  /** Bind 'this' so that we can access this.props in onClick. */
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }

  /* When the delete button is clicked, remove the corresponding item from the collection. */
  onClick() {
    /* eslint-disable-next-line */
    let check = confirm('Do you really want to delete this account?');
    if(check == true) {
      console.log("check is true");
      Stuffs.remove(this.props.stuff._id, this.deleteCallback);
    }
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.stuff.Account}</Table.Cell>
          <Table.Cell>{this.props.stuff.Username}</Table.Cell>
          <Table.Cell>{this.props.stuff.Password}</Table.Cell>
          <Table.Cell>
            <Link class="ui button" to={`/edit/${this.props.stuff._id}`}>Edit</Link>
            <button class="ui button" onClick={this.onClick}>Delete</button>
          </Table.Cell>
        </Table.Row>
    );
  }
}

/** Require a document to be passed to this component. */
StuffItem.propTypes = {
  stuff: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(StuffItem);
