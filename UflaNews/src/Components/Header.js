import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import CustomTextInput from '../Components/CustomTextInput';


export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        const { user, password } = this.state;
        return (
            <View style={[styles.container, this.props.style]}>
                <Image source={require('../Assets/ufla-white.png')} style={styles.logo}></Image>
                <CustomTextInput white={true} placeholder="Pesquisar" value={user} onChangeText={user => this.setState({user})} style={{flex: 1}}/>                
                <Image source={require('../Assets/icons/search.png')} style={styles.logo}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: "space-between",
        backgroundColor: '#00B6E9',
        paddingLeft: 15,
        paddingRight: 15,
        // flex:1,
        height: 70,
        flexDirection: "row",
    },
    
    logo: {
        height: 40,
        width: 40,
        alignSelf: "center",
        marginRight: 10
        // marginTop: 50,
        // marginBottom: 50
    },
})