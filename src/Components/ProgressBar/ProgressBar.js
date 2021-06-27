import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(15),
    
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function ProgressBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={80} color="secondary" />
    </div>
  );
}