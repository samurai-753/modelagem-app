import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

import CustomTextInput from '../Components/CustomTextInput';


export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            password: ''
        }
    }

    handleLogin = () => {
        const {user, password} = this.state
        alert(`Fazendo o login do user ${user} com a senha ${password}`)
    }

    handleSingup = () => {
        alert("Indo para a tela de login")
    }

    render() {
        const {user, password} = this.state
        return (
            <View style={styles.container}>
                <Image source={require('../Assets/noticia.jpg')} style={styles.logo}></Image>
                <View style={styles.inputsContainer}>
                    <CustomTextInput placeholder="Usuário" value={user} onChangeText={user => this.setState({user})}/>
                    <CustomTextInput placeholder="Senha" value={password} onChangeText={password => this.setState({password})} secureTextEntry={true}/>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.loginButtonContainer} onPress={this.handleLogin}>
                        <Image source={require('../Assets/right-arrow.png')} style={styles.rightArrow}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginButtonContainer} onPress={this.handleSingup}>
                        <Text style={styles.singupText}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        backgroundColor: '#73abf0'
    },
    logo: {
        height: 300,
        width: 300,
        borderRadius: 200,
        borderColor: '#000',
        borderWidth: 5,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    },
    rightArrow: {
        height: 60,
        width: 60,
    },
    loginButtonContainer : {
        alignSelf: "center"
    },
    singupText: {
        color: "#0b3161",
        fontSize: 20
    },
    inputsContainer: {
        flex: 1,
        justifyContent: "center"
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: "space-around"
    }
})