import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Dimensions
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class Loading extends Component {
    render() {
        if(this.props.show){
            return (
                <View style={styles.container}>
                    <Image source={require('../Assets/loading.gif')} style={styles.logo}/>
                </View>
            );
        }
        return (
            <View />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        // backgroundColor: '#ff0',
        backgroundColor: '#00B6E9',
        height: HEIGHT,
        width: WIDTH,
        zIndex: 2,
        alignItems: "center",
        justifyContent: "center"
    },
    
    logo: {
        height: 100,
        width: 100,
        // alignSelf: "center",
        // marginTop: 50,
        marginBottom: 50
    },
})