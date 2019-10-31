import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'

export default class Comment extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.comment}>
                <View style={styles.lineone} >
                    <View style={styles.user}>
                        <Image source={require('../Assets/noticia.jpg')} style={styles.logo}/>
                        <Text style={styles.username} > João Pedro</Text>
                    </View>
                    <Text>17/09</Text>
                </View>
                <Text>Cometário sobre a notícia aqui</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    comment: {
        flex: 1,
        padding: 3,
        backgroundColor: '#FCFCFC',
    },
    lineone: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    user: {
        flex: 1,
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
        fontWeight: 'bold'

    },
    data: {
        marginEnd: 3
    }
})