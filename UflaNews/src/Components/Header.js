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
        const { pesquisar, onChangeText } = this.props;
        if(pesquisar){
            return (
                <View style={[styles.container, this.props.style]}>
                    <Image source={require('../Assets/ufla-white.png')} style={[styles.logo, {marginRight: 10}]}></Image>
                    <CustomTextInput 
                        white={true} 
                        placeholder="Pesquisar" 
                        value={this.props.value} 
                        onChangeText={onChangeText} 
                        style={{flex: 1}}
                    />
                    <Image source={require('../Assets/icons/search.png')} style={styles.logo}></Image>
                </View>
            );
        }
        else{
            return (
                <View style={[styles.container, this.props.style]}>
                    <Image source={require('../Assets/ufla-white.png')} style={[styles.logo, {marginRight: 10}]}></Image>
                    <Text style={{color: "#fff", fontSize: 26, fontWeight: "700"}}>UFLA News</Text>
                </View>
            );
        }
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
        alignItems: "center"
    },
    
    logo: {
        height: 40,
        width: 40,
        alignSelf: "center",
        // marginTop: 50,
        // marginBottom: 50
    },
})