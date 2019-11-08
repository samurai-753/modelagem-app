import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';



export default class FollowingInfo extends Component {
    constructor(props) {
        super(props)
    }


    render(){
        const {profile, handlePress} = this.props
        return (
            <View style={styles.followersContainer}>
                <Text style={styles.followingCount}> Seguindo: {profile.followingCount} </Text>
                <TouchableOpacity style={styles.listButton} onPress={handlePress}>
                    <Text style={styles.listButtonText}> Listar </Text>
                </TouchableOpacity>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    followersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#a1a1a1',
        marginLeft: 10,
        marginRight: 10
    },
    followingCount: {
        fontSize: 20,
        fontWeight: '800',
        color: '#5E98DD',
    },
    listButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 100,
        borderRadius: 8,
        backgroundColor: '#5E98DD'
    },
    listButtonText: {
        fontSize: 18,
        fontWeight: '900',
        color: 'white'
    }
})