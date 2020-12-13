import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Members from './Members';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles({
  mainContainer: {
      paddingTop: 10,
      direction: 'column',
  }
});

const About = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainContainer}>
            <Grid item container>
                <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                    <Members />
                </Grid>
                <Grid item xs={false} sm={2} />
            </Grid>
        </Grid>
    )
}

export default About;