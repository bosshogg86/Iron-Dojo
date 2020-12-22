import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Grid, Paper, LinearProgress } from '@material-ui/core/';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    height: 160,
    width: 220,
    padding: 20,
  },
});

const WeeklyVolumeNumber = ({ weeklyVolume }) => {
  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <Paper className={classes.paper}>
        <h4>Weekly Volume</h4>
        {weeklyVolume === null || weeklyVolume.length === 0 ? (
          <LinearProgress />
        ) : (
          <h1>{weeklyVolume} lbs</h1>
        )}
      </Paper>
    </Grid>
  );
};

export default WeeklyVolumeNumber;
