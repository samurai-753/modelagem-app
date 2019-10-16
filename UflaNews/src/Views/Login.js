import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, Image} from 'react-native'


class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: ''
        }
    }

    render(){
        const {userName, password} = this.state
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../Assets/noticia.jpg')}
                />
                <TextInput placeholder="Usuario" onChangeText={(userName) => this.setState({userName})}/>
                <TextInput placeholder="Senha" onChangeText={(password) => this.setState({password})}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4287f5",
    },
    logo: {
        height: 300,
        width: 300,
        borderRadius: 200
    }
  });

export default Login
