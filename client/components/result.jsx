import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Result extends React.Component {
  
  constructor (props) {
    super (props);
  }

  render () {
    return (
    <Card>
        <img src= {this.props.result.url} height="42" width="42" />
      <CardHeader
        title= {this.props.result.title}
        subtitle= {this.props.result.language}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardActions>
        <FlatButton label="Explore" />
        <FlatButton label="Do other random shit" />
      </CardActions>
      <CardText expandable={true}>
          {this.props.result.description}
      </CardText>
    </Card>
    );
  }
}

export default Result;