import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {logout} from '../store'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
    borderRadius: 10
  },
});

class Dashboard extends Component {
  constructor(props){
    super(props)
  }

  render () {
    const { classes } = this.props;
    console.log(this.props.isLoggedIn)
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell className='cell'>Dashboard</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
                <TableRow className={classes.row} >
                  <CustomTableCell component="th" scope="row" className='cell'>
                    <Link to='/post'>Post</Link>
                  </CustomTableCell>
                </TableRow>
                <TableRow className={classes.row} >
                  <CustomTableCell component="th" scope="row" className='cell'>
                  <Link to='/find'>Find</Link>
                  </CustomTableCell>
                </TableRow>
                <TableRow className={classes.row} >
                  <CustomTableCell component="th" scope="row" className='cell'>
                  <Link to='/visualize'>Visualize</Link>
                  </CustomTableCell>
                </TableRow>
                <TableRow className={classes.row} >
                  <CustomTableCell component="th" scope="row" className='cell'>
                  <Link to="/" onClick={this.props.handleClick}>Logout</Link>
                  </CustomTableCell>
                </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <CustomTableCell className='last-cell' />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    );
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapState, mapDispatch)(Dashboard));
