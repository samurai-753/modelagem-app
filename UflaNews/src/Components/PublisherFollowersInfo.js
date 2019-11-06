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

        this.state = {
            followersCount: this.props.profile.followersCount,
            following : this.props.profile.following
        }
    }

    handleFollowing = () => {
        const {following} = this.state
        console.log(following)
        this.setState({following : !following})
        console.log(this.state)
    }


    render(){
        const {followersCount, following} = this.state
        return (
            <View style={styles.followersContainer}>
                <Text style={styles.followingCount}> Seguidores: {followersCount} </Text>
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
        marginRight: 10
    },
    followingCount: {
        fontSize: 20,
        fontWeight: '800',
        color: '#5E98DD',
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
        width: 150,
        borderRadius: 8,
        backgroundColor: '#5E98DD'
    },
    listButtonText: {
        fontSize: 18,
        fontWeight: '900',
        color: 'white'
    }
})