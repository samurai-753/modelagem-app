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
        const {simple_name, email, photo_url, background_photo,} = this.props.profile
        console.log(photo_url)
        return (
            <ImageBackground source={{uri: background_photo}} style={styles.backgroundImage}>
                <Image source={{uri: photo_url}} style={styles.profilePhoto} />
                <View style={styles.textContainer}>
                    <Text style={styles.profileName}>{simple_name}</Text>
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
        borderColor: '#000',
        borderWidth: 1
    },
    profilePhoto: {
        alignSelf: 'center',
        height: 120,
        width: 120,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 2,
        marginTop: 35
    },
    textContainer: {
        alignSelf: 'center',
    },
    profileName: {
        fontSize: 25,
        fontWeight: '900',
        color: 'white',
        textAlign: 'center'
    },
    profileEmail: {
        color: 'white',
        textAlign: 'center'
    }
})