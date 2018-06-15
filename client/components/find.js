import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Button from './button'


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
});

class Find extends Component{
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root && 'paper'} elevation={4}>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
      />
          <Button onClick={this.handleSubmit} />
        </Paper>
      </div>
    );

  }
}

Find.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Find);
