// Required React Components
import React from 'react';

// Required Material-UI Components
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Required Modules
import Nav from './nav.jsx';


export default class Result extends React.Component {


  constructor (props) {
    super (props);
  }

  

  render () {
    return (

      <MuiThemeProvider>
        <Card>
          <CardHeader
            title= {this.props.result.title}
            subtitle= {this.props.result.language}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton label="Do some shit" />
            <FlatButton label="Do other random shit" />
          </CardActions>
          <CardText expandable={true}>
            {this.props.result.description}
          </CardText>
        </Card>
      </MuiThemeProvider>



    );

  }
}
