import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  KeyboardAvoidingView,
  Alert
} from 'react-native';

import CustomTextInput from '../Components/CustomTextInput';
import { ScrollView } from 'react-native-gesture-handler';
import * as Server from '../Server';
import Loading from '../Components/Loading';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sessionActions from "../Actions/sessionActions";




export class RegisterScreen extends Component {
    static navigationOptions = {
        header: 'none'
    }

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            passwordCheck: '',
            loading: false,
        }
    }

    handleCadastro = () => {
        const { name, email, password, passwordCheck } = this.state

        if(name == "" || email == "" || password == "" || passwordCheck == ""){
            Alert.alert("Erro!", "Preencha todos os campos antes de enviar.")
            return;
        }
        if(password !== passwordCheck) {
            Alert.alert("Erro!", "Senha e confirmação de senha devem ser iguais.")
            return;
        }

        this.setState({loading: true})


        let usuario_dados = { email, senha: password, nome: name, foto_url: "https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg" }
        Server.cadastrar(usuario_dados).then((usuario) => {
            Alert.alert(`Sucesso`, "Usuário cadastrado!");
            Server.login(email, password)
            .then((usuario) => {
                this.setState({loading: false})

                this.props.actions.login(usuario)

                this.props.navigation.navigate("Feed", { usuario });
            })
            // TODO: Setar coisas do usuario
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        const { name, password, email, passwordCheck, loading } = this.state;
        const { navigation } = this.props;
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Loading show={loading} />
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{paddingTop: 15}}>
                    <Image source={require("../Assets/icons/arrow_left.png")} style={{width: 50, height: 50, resizeMode: "contain"}}/>
                </TouchableOpacity>
                <View style={{alignItems: "center"}}>
                    <Text style={{color: "#00B6E9", fontWeight: "700", fontSize: 36, marginBottom: 20 }}>
                        Cadastre-se!
                    </Text>
                    <Text style={{textAlign: "center", fontSize: 12, marginLeft: 10, marginRight: 10}}>
                        QUER RECEBER AS NOTÍCIAS DA UFLA EM PRIMEIRA MÃO? VOCÊ ESTÁ QUASE LÁ!
                    </Text>
                </View>
                <View style={styles.inputsContainer}>
                    <CustomTextInput white={false} placeholder="Nome" value={name} onChangeText={name => this.setState({name})}/>
                    <CustomTextInput white={false} autoCapitalize={"none"} placeholder="E-mail" value={email} onChangeText={email => this.setState({email})}/>
                    <CustomTextInput white={false} placeholder="Senha" value={password} onChangeText={password => this.setState({password})} secureTextEntry={true}/>
                    <CustomTextInput white={false} placeholder="Confirme sua senha" value={passwordCheck} onChangeText={passwordCheck => this.setState({passwordCheck})} secureTextEntry={true}/>
                    <TouchableOpacity style={styles.loginButtonContainer} onPress={this.handleCadastro}>
                        <Text style={styles.txtButton}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>

                <View />
                    
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15,
    },
    logo: {
        height: 100,
        width: 100,
        alignSelf: "center",
        // marginTop: 50,
        marginBottom: 50
    },
    rightArrow: {
        height: 60,
        width: 60,
    },
    loginButtonContainer : {
        alignSelf: "center",
        backgroundColor: "#00B6E9",
        borderRadius: 25,
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 15
    },
    singupText: {
        color: "#fff"

    },
    inputsContainer: {
        // flex: 1,
        justifyContent: "center",
        paddingRight: 10,
        paddingLeft: 10,
        // color: "#e62"
    },
    buttonsContainer: {
        // flex: 1,
        marginBottom: 20
    },
    txtButton:{
        color: "#fff"
    }
})



function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
}



function mapStateToProps(state, ownProps) {
    return {user: state.session};
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);