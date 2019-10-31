import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'

export default class News extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.user}>
                    <Image source={require('../Assets/noticia.jpg')} style={styles.logo}/>
                    <Text style={styles.username} > João Pedro</Text>
                </View>
                <Text style={styles.title}>NEW SYSTEM </Text>
                <Image source={require('../Assets/noticia.jpg')} style={styles.image}></Image>
                <Text style={styles.description}>Aqui está a grande notícia que vai deixar o público chocado, pois é muita fofoca</Text>
                <View style={styles.infos}>
                    <Text style={styles.data}>17/09</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 3,
        alignContent: 'space-between',
        backgroundColor: '#FCFCFC',
    },
    lineone: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    user: {
        flexDirection: 'row'
    },
    logo: {
        alignSelf: 'flex-start',
        height: 30,
        width: 30,
        borderRadius: 200,
        borderColor: '#000',
        borderWidth: 2
    },
    username: {
        alignSelf: 'flex-start',
        marginTop: 0,
        color: '#365070',
        fontSize: 18,
        fontWeight: 'bold'
    },
    title: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    image: {
        height: 200,
        width: 200,
        alignSelf: 'center'
    },
    description: {
        margin: 10,
    },
    infos: {
        margin: 2,
        borderTopColor:"#000",
        borderTopWidth: 4,
    },
    data: {
        margin: 3
    }
})