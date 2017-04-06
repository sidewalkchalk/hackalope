// Required React Components
import React from 'react';
import { Route, browserHistory, Redirect } from 'react-router';

// Required Material UI Components
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Required Dependancies
import axios from 'axios';



class Submit extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      title: '',
      link: '',
      description: '',
      open: false
    }
  }

  handleSubmit = (e) => {
    this.setState({open: false});
    e.preventDefault();
    axios.post('/submit', {title: this.state.title, link: this.state.link, description: this.state.description})
      .then( response => {
        console.log(response);
        var resource = response.data
      })
      .catch ( err => {
        console.error(err)
      })
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <MuiThemeProvider>
      <div>
        <FloatingActionButton onTouchTap={this.handleOpen}>
        <ContentAdd />
        </FloatingActionButton>
        <div>
        <Dialog
          autoScrollBodyContent={true}
          title="Submit a Resource"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <form onSubmit={this.handleSubmit}>
            <TextField name="Title"
              value={this.state.title}
              floatingLabelText="Title"
              onChange={e => this.setState({title: e.target.value})}
            /><br/>
          <TextField name="link"
              value={this.state.link}
              floatingLabelText="Link"
              onChange={e => this.setState({link: e.target.value})}
            /><br/>
          <TextField name="Description"
              value={this.state.description}
              floatingLabelText="Description"
              multiLine={true}
              onChange={e => this.setState({description: e.target.value})}
            /><br/>
        </form>
        </Dialog>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Submit;
