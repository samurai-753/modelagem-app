import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  KeyboardAvoidingView
} from 'react-native';

import CustomTextInput from '../Components/CustomTextInput';
import { ScrollView } from 'react-native-gesture-handler';


export default class RegisterScreen extends Component {
    static navigationOptions = {
        header: 'none'
    }

    constructor(props) {
        super(props)

        this.state = {
            user: '',
            password: '',
            passwordCheck: '',
            email: '',
        }
    }

    handleCadastro = () => {
        const {user, password} = this.state
        alert(`Fazendo o login do user ${user} com a senha ${password}`)
    }

    render() {
        const { user, password, email, passwordCheck } = this.state;
        const { navigation } = this.props;
        return (
            <ScrollView contentContainerStyle={styles.container}>

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
                    <CustomTextInput placeholder="Usuário" value={user} onChangeText={user => this.setState({user})}/>
                    <CustomTextInput placeholder="E-mail" value={email} onChangeText={email => this.setState({email})}/>
                    <CustomTextInput placeholder="Senha" value={password} onChangeText={password => this.setState({password})} secureTextEntry={true}/>
                    <CustomTextInput placeholder="Confirme sua senha" value={passwordCheck} onChangeText={passwordCheck => this.setState({passwordCheck})} secureTextEntry={true}/>
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
        paddingLeft: 10
    },
    buttonsContainer: {
        // flex: 1,
        marginBottom: 20
    },
    txtButton:{
        color: "#fff"
    }
})