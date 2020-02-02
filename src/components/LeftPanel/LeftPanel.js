import React from 'react';
import { Box, Grid } from '@material-ui/core';
import GiantRobot from '../../assets/images/GiantRobot.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    left_panel_content: {
        paddingTop: 32,
        paddingRight: 238.812,
    },
    image: {
        height: '26px',
        width: '177px',
    },
    title: {
        fontFamily: 'Roboto-Bold',
        color: '#ffffff',
        fontSize: 32,
        paddingTop: 32,
    },
    title_description: {
        fontFamily: 'Merriweather-Regular',
        color: '#eaeaea',
        fontSize: 14,
        paddingTop: 16,
    },
}));

function LeftPanel() {
    const classes = useStyles();
    return (
        <Grid>
            <Grid container alignItems="flex-start" justify="flex-end" direction="row" className={classes.left_panel_content}>
                <Grid>
                    <Box className={classes.image}>
                        <GiantRobot/>
                    </Box>
                    <Box className={classes.title}>
                        Welcome
                    </Box>
                    <Box className={classes.title_description}>
                        Please tell us a bit about yourself to get started.
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default LeftPanel;
