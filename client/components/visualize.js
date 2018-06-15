import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
});

function Visualize(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root && 'paper'} elevation={4}>
        <Typography variant="headline" component="h3">
          This will be the container for the data visualization.
        </Typography>
        <Typography component="p">
          Data by data.
        </Typography>
      </Paper>
    </div>
  );
}

Visualize.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Visualize);
