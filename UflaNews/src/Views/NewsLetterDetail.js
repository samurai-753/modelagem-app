import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import Comment from '../Components/Comment';
import News from '../Components/News';

export default class NewsLetterDetail extends Component {
    constructor(props) {
        super(props)
    }


    render () {
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <Image source={require('../Assets/noticia.jpg')} style={styles.logo}/>
                    <Text style={styles.title}>UflaNews</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.newsletter}>
                        <News/>
                    </View>
                    <View style={styles.comments}>
                        <Comment/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    },
    toolbar: {
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
    body: {
        padding: 10,
    },
    newsletter: {
        height: 350,
        width: 'auto',
        borderRadius: 2,
        borderColor: '#000',
        alignSelf: "center",
    },
    comments: {
        marginTop: 20,
        backgroundColor: "#00FF00",
        height: 60,
        width: 'auto'
    }
})