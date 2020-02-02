import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import InputField from './components/InputField/InputField.js';
import SubmissionButton from './components/SubmissionButton/SubmissionButton.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    panel_content: {
        paddingLeft: 24,
        paddingTop: 90,
    },
    button: {
        paddingTop: 48,
    }
}));

function RightPanel() {
    const classes = useStyles();
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [address, setAddress] = useState('');
    let [address2, setAddress2] = useState('');

    let [userSubmitted, setUserSubmitted] = useState(false);

    const handleClick = () => {
        const containsErrors = [firstName, lastName, address].map(x => x.length === 0).includes(true);
        
        setUserSubmitted(true);

        if (!containsErrors) {
            alert(`
                The user entered the following fields:

                First Name: ${firstName}
                Last Name: ${lastName}
                Address: ${address}
                Address 2: ${address2}
            `);
        }   
    }

    return (
        <Grid className={classes.panel_content}>
            <Grid container direction="column" spacing={3}>
                <Grid item>
                    <InputField label="FIRST NAME"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                error={userSubmitted && firstName.length === 0}/>
                </Grid>
                <Grid item>
                    <InputField label="LAST NAME"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                error={userSubmitted && lastName.length === 0}/>
                </Grid>
                <Grid item>
                    <InputField label="ADDRESS"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                error={userSubmitted && address.length === 0}/>
                </Grid>
                <Grid item>
                    <InputField label="ADDRESS 2 (OPTIONAL)"
                                value={address2}
                                onChange={(e) => setAddress2(e.target.value)}/>
                </Grid>
            </Grid>
            <Grid className={classes.button}>
                <SubmissionButton onClick={handleClick}/>
            </Grid>
        </Grid>
    );
}

export default RightPanel;
