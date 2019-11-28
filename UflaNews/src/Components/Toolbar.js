import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';


export default class Toolbar extends Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.containerContent}>
                    <View style={styles.containerLogo}>
                        <Image source={require('../Assets/logo.png')} style={styles.logo}/>
                    </View>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>UflaNews</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#5E98DD',
    },
    containerContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    logo: {
        height: 35,
        width: 35,
        margin: 10
    },
    title: {
        marginLeft: 20,
        fontSize: 20,
        color: '#fff'
    },
    containerLogo: {
        backgroundColor: '#fff',
        borderRadius: 30,
        height: 50,
        width: 50,
        margin: 5,
    },
    containerTitle: {
        flex: 1,
        height: "100%",
        alignItems: 'flex-start',
        justifyContent: 'center',
    }
})