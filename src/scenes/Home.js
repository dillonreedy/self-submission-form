import React from 'react';
import LeftPanel from '../components/LeftPanel/LeftPanel.js';
import RightPanel from '../components/RightPanel/RightPanel.js';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    homepage: {
        minHeight: '100vh',
    },
    leftpanel: {
        backgroundColor: '#585858',
    },
}));


function Home() {
    const classes = useStyles();

    return (
    <Grid container className={classes.homepage}>
        <Grid item xs={6} className={classes.leftpanel}>
            <LeftPanel />
        </Grid>
        <Grid item xs={6}>
            <RightPanel />
        </Grid>
    </Grid>
    );
}

export default Home;