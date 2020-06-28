import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import * as Helper from "../Helper";
import { connect } from "react-redux";
import * as Server from "../Server";



export class Comment extends Component {
    constructor(props) {
        super(props)
    }

    async excluirComentario() {
        await Server.excluirComentario(this.props.comentario._id);
        this.props.update();
    }

    render() {
        const { comentario, profile } = this.props;
        let usuario = comentario.usuario[0]
        return (
            <View style={[styles.comment, styles.card]}>
                <View style={styles.header} >

                    <View style={{ flex: 3 }}>
                        <View style={styles.user}>
                            <Image source={{ uri: usuario.foto_url }} style={styles.logo} />
                            <Text style={styles.username}>{usuario.nome}</Text>
                        </View>
                        <Text>{comentario.comentario}</Text>

                    </View>

                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                        <Text>{Helper.formatarData(comentario.data, false)}</Text>

                        {
                            comentario.usuarioId == profile._id &&
                            <TouchableOpacity onPress={() => this.excluirComentario()} style={{ marginTop: 10 }}>
                                <Image source={require('../Assets/delete-icon.png')} style={styles.icon} />
                            </TouchableOpacity>
                        }
                    </View>

                </View>
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
        marginBottom: 10
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


function mapStateToProps(state) {
    return { profile: state.session.profile };
}

export default connect(mapStateToProps, null)(Comment);
