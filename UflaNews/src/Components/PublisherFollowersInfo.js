import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';



export default class PublishersFollowersInfo extends Component {
    constructor(props) {
        super(props)
    }

    // handleFollowing = () => {
    //     const {following} = this.state
    //     this.setState({following : !following})
    // }


    render(){
        const {numSeguidores} = this.props.publicador;
        const { seguir, deixarDeSeguir, following } = this.props;

        return (
            <View style={styles.followersContainer}>
                <Text style={styles.followingCount}>Seguidores: {numSeguidores} </Text>
                {
                    following?
                    <TouchableOpacity style={styles.unfollowButton} onPress={deixarDeSeguir}>
                        <Text style={styles.listButtonText}>Deixar de seguir</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.followButton} onPress={seguir}>
                        <Text style={styles.listButtonText}>Seguir</Text>
                    </TouchableOpacity>

                }
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