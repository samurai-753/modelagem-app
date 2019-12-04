import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class PublishersFollowersInfo extends Component {
    constructor(props) {
        super(props)
    }

    handleFollowing = () => {
        const {following} = this.state
        this.setState({following : !following})
    }


    render(){
        const {numSeguidores, following} = this.props.profile
        return (
            <View style={styles.followersContainer}>
                <Text style={styles.followingCount}>Seguidores: {numSeguidores} </Text>
                <TouchableOpacity style={following ? styles.unfollowButton : styles.followButton} onPress={this.handleFollowing}>
                    <Text style={styles.listButtonText}> {following ? "Deixar de seguir" : "Seguir"} </Text>
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
        marginRight: 10,
        marginBottom: 15
    },
    followingCount: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000',
    },
    unfollowButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 150,
        borderRadius: 8,
        backgroundColor: '#ea7979'
    },
    followButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 8,
        backgroundColor: '#00B6E9'
    },
    listButtonText: {
        fontSize: 18,
        fontWeight: '900',
        color: 'white'
    }
})