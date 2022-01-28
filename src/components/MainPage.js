import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchAppBar from './SearchAppBar';
import InfoGrid from './steps/InfroGrid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    padding: 'none',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper} style={{boxShadow: "none"}}><SearchAppBar/><InfoGrid/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
