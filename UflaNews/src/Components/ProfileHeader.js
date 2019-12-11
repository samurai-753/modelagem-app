import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground 
} from 'react-native';


export default class ProfileHeader extends Component {
    constructor(props) {
        super(props)
    }


    render(){
        const {nome, email, foto_url, } = this.props.profile
        return (
            <ImageBackground source={require("../Assets/background.jpg")} style={styles.backgroundImage}>
                <Image source={{uri: foto_url}} style={styles.profilePhoto} />
                <View style={styles.textContainer}>
                    <Text style={styles.profileName}>{nome}</Text>
                    <Text style={styles.profileEmail}>{email}</Text>
                </View>
            </ImageBackground>

        )
    }
}


const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%', 
        height: 230,
        // borderColor: '#000',
        // borderWidth: 1
    },
    profilePhoto: {
        alignSelf: 'center',
        height: 120,
        width: 120,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 2,
        marginTop: 20,
        marginBottom: 5
    },
    textContainer: {
        alignSelf: 'center',
        // backgroundColor: "#fff",
        // borderRadius: 7,
        // padding: 5
    },
    profileName: {
        fontSize: 25,
        fontWeight: '900',
        color: '#000',
        borderRadius: 7,
        textAlign: 'center',

        backgroundColor: "#fff",
        borderRadius: 7,
        padding: 5,
        alignSelf: "center",

    },
    profileEmail: {
        color: '#000',
        borderRadius: 7,
        textAlign: 'center',

        backgroundColor: "#fff",
        borderRadius: 7,
        padding: 5,
        alignSelf: "center",
        marginTop: 5
    }
})