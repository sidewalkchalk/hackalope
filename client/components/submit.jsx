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
import Snackbar from 'material-ui/Snackbar';

// Required Dependancies
import axios from 'axios';

class Submit extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      title: '',
      url: '',
      description: '',
      dialogOpen: false,
      snackbarOpen: false
    }
  }

  handleSubmit = (e) => {
    this.setState({dialogOpen: false});

    var submission = {
      title: this.state.title,
      url: this.state.url,
      description: this.state.description
    };

    axios.post('/submit', submission)
      .then( response => {
        console.log(response);
        var resource = response.data
        this.setState({title: '', url: '', description: ''});
      })
      .catch ( err => {
        console.error(err)
      })
  }

  handleOpen = () => {
    this.setState({dialogOpen: true});
  };

  handleClose = () => {
    this.setState({dialogOpen: false});
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

    const style = {
     marginRight: 10,
      top: 'auto',
      right: 20,
      bottom: 20,
      position: 'fixed',
    };

    return (
      <MuiThemeProvider>
      <div>
        <FloatingActionButton
        secondary={true} style={style}
        onTouchTap={this.handleOpen}>
        <ContentAdd />
        </FloatingActionButton>
        <div>
        <Dialog
          autoScrollBodyContent={true}
          title="Submit a Resource"
          actions={actions}
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={this.handleClose}
        >
        <form onSubmit={this.handleSubmit}>
            <TextField name="Title"
              value={this.state.title}
              floatingLabelText="Title"
              onChange={e => this.setState({title: e.target.value})}
            /><br/>
          <TextField name="url"
              value={this.state.url}
              floatingLabelText="URL"
              onChange={e => this.setState({url: e.target.value})}
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
