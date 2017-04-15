// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { connect } from 'react-redux';

// Functions
import { commentsByResource } from '../actions/index.js'
import { handleCheck, isFavorite, getComments, handleVote, isUpvoted, isDownvoted } from '../helpers/helpers.js'

// Required Material-UI Components
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
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


const Result = ({ result, user, results, dispatch }) => {

  return (

    <MuiThemeProvider>
      <Card style={{ position: 'relative', width: '100%', minHeight: 100, padding: 10 }}>

        <div style={{ paddingTop: "10px", verticalAlign: 'middle', position: 'relative', top: "-50%", left: 50, display: 'inline-block', float: 'left'}}>
          <img src={`${result.image}`} width="40"/>
        </div>
        <CardHeader
          title= {result.title}
          subtitle= {result.language}
          style={{position: 'relative', left: 100, width: "60%", display: 'inline' }}
        />

          <div style={{ position: 'absolute', left: 0, display: 'inline-flex', float: 'left'}}>
            <div style={{ alignSelf: 'center', marginLeft: 16 }}>
              <span> { result.rating } </span>
            </div>

              <div style={{ display: 'inline-flex', flexDirection: 'column'}}>
                <Checkbox
                  defaultChecked={isUpvoted(user, result, results.votes)}
                  onCheck={() => handleVote(result._id, results.votes, {vote: 1}, dispatch)}
                  checkedIcon={<ArrowDropUp />}
                  uncheckedIcon={<ArrowDropUp />}
                />
                <Checkbox
                  defaultChecked={isDownvoted(user, result, results.votes)}
                  onCheck={() => handleVote(result._id, results.votes, {vote: -1}, dispatch)}
                  checkedIcon={<ArrowDropDown />}
                  uncheckedIcon={<ArrowDropDown />}
                />
            </div>
          </div>

          <div style={{ display: 'inline-block', float: 'right', position: 'absolute', right: 0, top: 10 }}>
            <Checkbox
              defaultChecked={isFavorite(user, result)}
              onCheck={() => handleCheck({id: result._id})}
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              style={styles.checkbox}
            />
          </div>

          <div style={{ position: 'relative', width: "50%", float: 'right'}}>
            <CardActions>
              <RaisedButton
                label="Details"
                labelPosition="before"
                primary={true}
                icon={<DetailIcon />}
                style={styles.button}
                containerElement={<Link to={`results/${result._id}`} />}
                onClick={() => getComments(result._id, dispatch)}
              />
              <RaisedButton
                label="Link"
                labelPosition="before"
                primary={true}
                style={styles.button}
                href={`${result.url}`}
                target="_blank"
              />
            </CardActions>
          </div>
      </Card>
    </MuiThemeProvider>
  );
}

const styles = {
  button: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 0,
  },
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    results: state.results
  }
}

export default connect(mapStateToProps)(Result);
