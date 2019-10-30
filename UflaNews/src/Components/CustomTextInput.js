import React, {Component} from 'react'

import {StyleSheet,TextInput} from 'react-native';

export default class CustomTextInput extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {props} = this
        return (
            <TextInput {...props} style={styles.textInputCustom}/>
        )
    }
}

const styles = StyleSheet.create({
    textInputCustom: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 10,
        marginBottom: 10
    }
})

