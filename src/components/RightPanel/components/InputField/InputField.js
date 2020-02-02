import React, { useState } from 'react';
import { Box, OutlinedInput, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const textStyles = makeStyles(theme => ({
    label: {
        fontFamily: 'Merriweather-Regular',
        color: '#666666',
        fontSize: 12,
    },
    input_text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#666666',
    },
    error_text: {
        fontFamily: 'Merriweather-Regular',
        fontSize: 12,
        color: '#e70000',
    },
}));

const inputStyles = makeStyles(theme => ({
    all_input: {
        height: 48,
        width: 376,
        borderRadius: 6,
    },
    idle_input: {
        borderColor: '#f7f7f7',
        backgroundColor: '#eaeaea',
    },
    focused_input: {
        borderColor: '#00adee',
        backgroundColor: '#ffffff',
    },
    error_input: {
        borderColor: '#e70000',
        backgroundColor: '#ffffff',
    }
}));

function getTextFieldLabel(isError, label, classes)
{
    const getInlineText = (classStyling, text) => { return (<Box component="div" display="inline" className={classStyling}>{text}</Box>) };

    if (isError)
    {
        return (
            <Box>
                {getInlineText(classes.label, label)} {getInlineText(classes.error_text, "REQUIRED")}
            </Box>
        );
    } else {
        return (<Box className={classes.label}>{label}</Box>);
    }
}

function getInputStyle(isError, isFocused, currentValue, inputClasses)
{
    let textFieldStyle = [inputClasses.all_input];

    if (isError) 
        textFieldStyle.push(inputClasses.error_input);
    else if (isFocused) 
        textFieldStyle.push(inputClasses.focused_input);
    else 
        textFieldStyle.push(inputClasses.idle_input);

    return textFieldStyle;
}


function InputField(props) {
    const [isFocused, setIsFocused] = useState(false);
    const inputClasses = inputStyles();
    const textClasses = textStyles();
    const inputStyle = getInputStyle(props.error, isFocused, props.value, inputClasses);


    return (
        <Grid>
            { getTextFieldLabel(props.error, props.label, textClasses) }
            <OutlinedInput
                        error={props.error}
                        value={props.value}
                        onChange={props.onChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}  
                        className={inputStyle}
                        inputProps={{
                            className: textClasses.input_text,
                        }}/>
        </Grid>
    );
}

export default InputField;
