import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class FollowingInfo extends Component {
    constructor(props) {
        super(props)
    }


    render(){
        const {profile} = this.props
        return (
            <View style={styles.followersContainer}>
                <Text style={styles.followingCount}> Seguindo: {profile.followingCount} </Text>
                <TouchableOpacity style={styles.listButton}>
                    <Text style={styles.listButtonText}> Listar </Text>
                </TouchableOpacity>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    followersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 2,
        borderBottomColor: '#a1a1a1'

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