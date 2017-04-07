// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';

// Required Material-UI Components
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import DetailIcon from 'material-ui/svg-icons/image/details.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import ArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up.js';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down.js';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const Result = (props) => {

  const styles = {
    block: {
      maxWidth: 250,
    },
    checkbox: {
      marginBottom: 0,
    },
  };

  return (


    <MuiThemeProvider>
    <Card style={{ position: 'relative', width: '100%', padding: 10 }}>



        <CardHeader
          avatar={props.result.thumbnail}
          title= {props.result.title}
          subtitle= {props.result.language}
          actAsExpander={true}
          showExpandableButton={true}
          style={{position: 'relative', width: '60%', display: 'inline' }}
        />

        <div style={{ position: 'relative', display: 'inline-flex', float: 'right'}}>
            <div style={{ alignSelf: 'center', marginLeft: 16 }}>
               <span> { props.result.rating } </span>
            </div>
            <div>

              <div style={{ display: 'inline-flex', flexDirection: 'column'}}>
                <div>
                    <IconButton tooltip="Upvote">
                      <ArrowDropUp />
                    </IconButton>
                </div>
                <div style={{ alignSelf: 'center' }}>
                   <IconButton tooltip="Downvote">
                    <ArrowDropDown />
                  </IconButton>
                </div>
            </div>

            </div>
            <div style={{ alignSelf: 'center' }}>
                <Checkbox
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder />}
                  style={styles.checkbox}
                />
            </div>
        </div>
      <CardActions>
        <RaisedButton
          label="Details"
          labelPosition="before"
          primary={true}
          icon={<DetailIcon />}
          style={styles.button}
          containerElement={<Link to="Resource" />}
        />
      </CardActions>
      <CardText expandable={true}>
          {props.result.description}
        </CardText>
      </Card>
    </MuiThemeProvider>

  );

 

}


export default Result;
