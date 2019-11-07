import React, {Component} from 'react'

import {StyleSheet,TextInput} from 'react-native';

export default class CustomTextInput extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {props} = this;
        const {white} = props;
        return (
            <TextInput 
                {...props} 
                style={[styles.textInputCustom,  white? styles.white : null]}
                placeholderTextColor={white? "#fff" : null}
                underlineColorAndroid={white? "#fff" : null}
            />
        )
    }
}

const styles = StyleSheet.create({
    textInputCustom: {
        flex: 1,
        // backgroundColor: 'white',
        borderRadius: 10,
        // marginLeft: 25,
        // marginRight: 25,
        marginTop: 10,
        marginBottom: 10
    },
    white:{
        color: "#fff",
    }
})

