import React from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import WhiteArrow from '../../../../assets/images/WhiteArrow.js';


const useStyles = makeStyles(theme => ({
    button_label: {
        fontFamily: 'Roboto-Bold',
        color: '#ffffff',
        fontSize: 16,
        textTransform: 'none',
    },
    button: {
        background: '#ffab44',
        height: 48,
        borderRadius: 6,
    },
    button_content: {
        paddingLeft: 24,
        paddingRight: 24,
    },
    image: {
        height: 10,
        width: 10,
    }
}));

function SubmissionButton(props) {
    const classes = useStyles();
    return (
        <Box>
            <Button className={classes.button}
                    onClick={props.onClick}>
                <Grid container direction="row" alignItems="center" className={classes.button_content} spacing={1}>
                    <Grid item>
                        <Box className={classes.button_label}>Next</Box> 
                    </Grid>
                    <Grid item>
                        <WhiteArrow className={classes.image}/>
                    </Grid>
                </Grid>
            </Button>
        </Box>
    );
}

export default SubmissionButton;
