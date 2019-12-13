import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
  Alert,
} from 'react-native';

import CustomTextInput from '../Components/CustomTextInput';
import * as Server from '../Server';
import Loading from '../Components/Loading';
import * as sessionActions from "../Actions/sessionActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


export class LoginScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: 'k4t0mono@samurai.io',
            password: 'birb',
            loading: false
        }
    }

    handleLogin = async () => {
        this.setState({loading: true})
        const {email, password} = this.state
        Server.login(email, password)
        .then((usuario) => {
            this.setState({loading: false})

            this.props.actions.login(usuario)

            this.props.navigation.navigate("Feed", { usuario });
        })
        .catch((err) => {
            this.setState({loading: false})

            Alert.alert("Erro!", "E-mail ou senha incorretos.");
        })
    }

    handleSingup = () => {
        this.props.navigation.navigate("Registrar")
    }

    render() {
        const { email, password, loading } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#00B6E9" barStyle="light-content" />
                <Loading show={loading} />
                <View style={{height: 10}}/>
                <View style={styles.inputsContainer}>
                    <Image source={require('../Assets/ufla-white.png')} style={styles.logo}></Image>
                    <CustomTextInput autoCapitalize={"none"} white={true} placeholder="Email" value={email} onChangeText={email => this.setState({email})}/>
                    <CustomTextInput white={true} placeholder="Senha" value={password} onChangeText={password => this.setState({password})} secureTextEntry={true}/>
                    <TouchableOpacity style={styles.loginButtonContainer} onPress={this.handleLogin}>
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



function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
}



function mapStateToProps(state, ownProps) {
    return {user: state.session};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);