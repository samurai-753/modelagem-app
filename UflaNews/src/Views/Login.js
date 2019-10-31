import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import CustomTextInput from '../Components/CustomTextInput';


export default class LoginScreen extends Component {
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
        this.props.navigation.navigate("Register")
        // alert("Indo para a tela de login")
    }

    render() {
        const { user, password } = this.state;
        return (
            <View style={styles.container}>
                <View style={{height: 10}}/>
                <View style={styles.inputsContainer}>
                    <Image source={require('../Assets/ufla-white.png')} style={styles.logo}></Image>
                    <CustomTextInput white={true} placeholder="Usuário" value={user} onChangeText={user => this.setState({user})}/>
                    <CustomTextInput white={true} placeholder="Senha" value={password} onChangeText={password => this.setState({password})} secureTextEntry={true}/>
                    <TouchableOpacity style={styles.loginButtonContainer} onPress={this.handleLogin}>
                        {/* <Image source={require('../Assets/right-arrow.png')} style={styles.rightArrow}></Image> */}
                        <Text style={styles.txtButton}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.loginButtonContainer} onPress={this.handleSingup}>
                        <Text style={styles.singupText}>CADASTRE-SE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: '#00B6E9',
        paddingLeft: 25,
        paddingRight: 25,
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
        backgroundColor: "#fff",
        borderRadius: 25,
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 15
    },
    singupText: {
        color: "#00B6E9"

    },
    inputsContainer: {
        flex: 1,
        justifyContent: "center",
        paddingRight: 15,
        paddingLeft: 15
    },
    buttonsContainer: {
        // flex: 1,
        marginBottom: 20
    },
    txtButton:{
        color: "#00B6E9"
    }
})