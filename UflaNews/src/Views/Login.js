import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import CustomTextInput from '../Components/CustomTextInput';
import * as Server from '../Server';


export default class LoginScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: 'k4t0mono@samurai.io',
            password: 'birb'
        }
    }

    handleLogin = async () => {
        const {email, password} = this.state

        let res = await Server.login(email)
        if(res){
            res.json().then((json)=> {
                let user = json[0];
                if(user.senha === password) {
                    this.props.navigation.navigate("Feed");
                    console.log('Logado')
                } else {
                    throw "";
                }
            })
            .catch((error) => {
                alert('Email ou senha inválidos');
            })
        }
    }

    handleSingup = () => {
        this.props.navigation.navigate("Registrar")
    }

    render() {
        const { email, password } = this.state;
        return (
            <View style={styles.container}>
                <View style={{height: 10}}/>
                <View style={styles.inputsContainer}>
                    <Image source={require('../Assets/ufla-white.png')} style={styles.logo}></Image>
                    <CustomTextInput white={true} placeholder="Email" value={email} onChangeText={email => this.setState({email})}/>
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