// Required React Components
import React from 'react';
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory } from 'react-router';
import { connect } from 'react-redux';

import { commentsByResource } from '../actions/index.js'

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

import { handleCheck, isFavorite, getComments, handleVote, isUpvoted, isDownvoted } from '../helpers/helpers.js'

// var config = {
//   headers: {
//     'Access-Control-Allow-Headers': '*',
//     'Access-Control-Expose-Headers': '*',
//     'Access-Control-Allow-Origin': '*'
//   },
// };

const Result = ({ result, user, results, dispatch }) => {

  // TODO: place this call in the back end.

  // axios.get('http://api.linkpreview.net/?key=58eff68ba74a41677ff8f43415db89c2157e0f9e042aa&q=' + result.url, config)
  // .then( res => {
  //   var preview = {
  //     description: res.data.description,
  //     image: res.data.image,
  //     title: res.data.title,
  //     url: res.data.url
  //   };
  //   console.log(preview);
  // })
  // .catch( err => {
  //   console.error(err)
  // })

  return (

    <MuiThemeProvider>
      <Card style={{ position: 'relative', width: '100%', padding: 10 }}>

        <CardHeader
          avatar={result.thumbnail}
          title= {result.title}
          subtitle= {result.language}
          actAsExpander={true}
          showExpandableButton={true}
          style={{position: 'relative', width: '60%', display: 'inline' }}
        />

          <div style={{ position: 'relative', display: 'inline-flex', float: 'right'}}>
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

            <div style={{ alignSelf: 'center' }}>
              <Checkbox
                defaultChecked={isFavorite(user, result)}
                onCheck={() => handleCheck({id: result._id})}
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
            containerElement={<Link to={`results/${result._id}`} />}
            onClick={() => getComments(result._id, dispatch)}
          />
        </CardActions>

        <CardText expandable={true}>
          <a href={`${result.url}`} >LINK</a><br /> <br />
          {result.description} <br />
        </CardText>
      </Card>
    </MuiThemeProvider>
  );
}

const styles = {
  block: {
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
