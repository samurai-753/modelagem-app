import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground 
} from 'react-native';


export default class PublisherHeader extends Component {
    constructor(props) {
        super(props)
    }


    render(){
        const {nome, fotoUrl, background_photo} = this.props.profile
        return (
            <ImageBackground source={require("../Assets/background.jpg")} style={styles.backgroundImage}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: fotoUrl}} style={styles.profilePhoto} />

                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.profileName}>{nome}</Text>
                </View>
            </ImageBackground>

        )
    }
}


const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%', 
        height: 230,
        resizeMode: "cover"
    },
    profilePhoto: {
        alignSelf: 'center',
        height: 120,
        width: 120,
        resizeMode: "contain",
        // borderColor: '#fff',
        // borderWidth: 2,
        // backgroundColor: "#fff"
    },
    imageContainer:{
        marginTop: 35,
        alignSelf:"center",
        backgroundColor: "#fff",
        borderRadius: 10
    },
    textContainer: {
        alignSelf: 'center',
    },
    profileName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    profileEmail: {
        color: 'white',
        textAlign: 'center'
    }
})