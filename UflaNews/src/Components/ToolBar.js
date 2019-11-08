import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'


export default class ToolBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../Assets/ufla-white.png')} style={styles.logo}/>
                <Text style={styles.title}>UflaNews</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        marginTop: 0,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: "#00B6E9"
    },
    logo: {
        alignSelf: 'flex-start',
        height: 30,
        width: 30,
        borderRadius: 200,
        borderColor: '#000',
        borderWidth: 2
    },
    title: {
        fontSize: 25,
        alignSelf: 'center',
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#fff'
    },
})