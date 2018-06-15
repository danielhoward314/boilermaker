import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import { WiredTextarea } from "wired-textarea"


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
});

class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state !== nextState) return true
    return false
  }

  render () {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root && 'paper'} elevation={4}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Text:<textarea value={this.state.text} onChange={this.handleChange} rows={60} />
          </label>
          <input type="submit" text="Submit" />
        </form>
        </Paper>
      </div>
    );
  }
}

const mapState = state => {
  return {
    ...state
  };
};

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapState, null)(Post));
