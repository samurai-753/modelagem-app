import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'
import * as Helper from "../Helper";

export default class Comment extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { comentario } = this.props;
        let usuario = comentario.usuario
        return (
            <View style={[styles.comment, styles.card]}>
                <View style={styles.header} >
                    <View style={styles.user}>
                        <Image source={{uri: usuario.foto_url}} style={styles.logo}/>
                        <Text style={styles.username}>{usuario.nome}</Text>
                    </View>

                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text>{Helper.formatarData(comentario.data, false)}</Text>
                        {/* <Image source={require('../Assets/delete-icon.png')} style={styles.icon}/> */}
                    </View>

                </View>
                <Text>{comentario.comentario}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        // height: 100,
        backgroundColor: "#fff",
        margin: 5,
        marginTop: 10,
        padding: 10,
    },
    comment: {
        flex: 1,
        padding: 3,
        margin: 2,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    user: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
    },
    logo: {
        alignSelf: 'flex-start',
        height: 30,
        width: 30,
        borderRadius: 200,
        borderColor: '#000',
        borderWidth: 1
    },
    username: {
        // alignSelf: 'flex-start',
        // includeFontPadding: false,
        marginLeft: 5,
        color: '#365070',
        fontWeight: 'bold'

    },
    data: {
        marginEnd: 3
    },
    icon: {
        width: 25,
        height: 25,
        margin: 2
    },
})