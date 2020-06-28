import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import { connect } from "react-redux";

import CustomTextInput from './CustomTextInput'
import * as Server from "../Server";
import * as sessionActions from "../Actions/sessionActions";
import { bindActionCreators } from "redux";
import Loading from './Loading';

export class ProfileInfoEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            newPassword: '',
            newPasswordConfirm: '',
            photo: '',
            loading: false
        }
    }

    componentDidMount() {
        // const {profile} = this.props;
        // console.log("UAU", profile)
        // this.setState({
        //     nome: profile.nome
        // })
    }

    enviar() {
        this.props.toggleLoading(true);
        const { newPassword, newPasswordConfirm, nome } = this.state;

        if (nome == "" && newPassword == "" && newPasswordConfirm == "") {
            alert("Nenhuma alteração foi feita.");
            this.props.toggleLoading(false);
            return;
        }

        if (newPassword !== newPasswordConfirm) {
            alert("A senha e confirmação de senha devem ser iguais.");
            this.props.toggleLoading(false);
            return;
        }
        let profile = this.props.profile;
        profile.nome = nome;
        if (newPassword != "") {
            profile.senha = newPassword;
        }
        Server.alterarPerfil(profile)
            .then((usuario) => {
                Server.login(usuario.email, usuario.senha)
                    .then((usuario) => {
                        this.props.toggleLoading(false);
                        this.props.actions.login(usuario)
                    })
            })
            .catch((err) => {
                console.log(err)
            });
    }

    render() {
        const { nome, newPassword, newPasswordConfirm, loading } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Atualizar dados</Text>
                <View style={styles.fieldsContainer}>
                    <CustomTextInput white={false} placeholder="Nome Completo" value={nome} onChangeText={nome => this.setState({ nome })} />
                    <CustomTextInput white={false} secureTextEntry placeholder="Nova senha" value={newPassword} onChangeText={newPassword => this.setState({ newPassword })} />
                    <CustomTextInput white={false} secureTextEntry placeholder="Confirmar nova senha" value={newPasswordConfirm} onChangeText={newPasswordConfirm => this.setState({ newPasswordConfirm })} />
                    {/* <CustomTextInput white={false} placeholder="Enviar uma foto" /> */}
                </View>
                <TouchableOpacity onPress={() => this.enviar()} style={styles.confirmButton}>
                    <Text style={styles.listButtonText}> Confirmar alterações </Text>
                </TouchableOpacity>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 15
    },
    headerText: {
        fontSize: 20,
        // margin: 10,
        color: '#4C4C4C'
    },
    confirmButton: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        borderRadius: 8,
        backgroundColor: '#5E98DD',
        margin: 10
    },
    listButtonText: {
        fontSize: 18,
        fontWeight: '900',
        color: 'white'
    },
    fieldsContainer: {
        // marginLeft: 15,
        // marginRight: 15
    }
})




function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
}



function mapStateToProps(state) {
    return { profile: state.session.profile };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfoEdit);