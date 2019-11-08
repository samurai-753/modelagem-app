import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native'


export default class News extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var text = "Aqui está a grande notícia que vai deixar o público chocado, pois é muita fofoca, mas vocês não estão entendendo, é uma parada muita doida que vai além do entendimento humano de tão doido! Valeu é nóis"
        var data = "17 de outubro de 2019 - 18:00"
        return (
            <View style={styles.container}>
                <View style={styles.user}>
                    <Image source={require('../Assets/noticia.jpg')} style={styles.logo}/>
                    <Text style={styles.username} > João Pedro</Text>
                </View>
                <Text style={styles.title}>NEW SYSTEM </Text>
                <Image source={require('../Assets/noticia.jpg')} style={styles.image}></Image>
                <Text style={styles.description}>{text}</Text>
                <View style={styles.infos}>
                    <Text style={styles.data}>{data}</Text>
                    <View style={styles.icons}>
                        <Image source={require('../Assets/comment-icon.png')} style={styles.icon}/>
                        <Image source={require('../Assets/like_icon.png')} style={styles.icon}/>                        
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        padding: 3,
        alignContent: 'space-between',
        backgroundColor: '#fff',
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
        color: '#00B6E9'
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor:"#000",
        borderTopWidth: 4,
    },
    data: {
        margin: 3
    },
    icon: {
        width: 25,
        height: 25,
        margin: 2
    },
    icons: {
        flexDirection: 'row',
        padding: 2
    }
})