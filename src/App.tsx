import { makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import LearningForm from './components/form/LearningLogForm';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: 'auto 1fr'
  }
});

const App: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <LearningForm />
    </div>
  );
}

export default App;
