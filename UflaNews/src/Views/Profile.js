import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

import Toolbar from '../Components/Toolbar'
import ProfileHeader from '../Components/ProfileHeader'
import FollowingInfo from '../Components/FollowingInfo'
import ProfileInfoEdit from '../Components/ProfileInfoEdit'



export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: {
                'name': 'Eduardo F. Lima',
                'photo_url' : 'https://media.licdn.com/dms/image/C4E03AQFApzGsMuTm0g/profile-displayphoto-shrink_200_200/0?e=1577923200&v=beta&t=0tpD39UUri1j71hapEVzkw1AcBxpA_BShfmdQ7l5XrI',
                'email' : 'eduardo@gmail.com',
                'simple_name': 'Eduardo F. Lima'.split(' ')[0],
                'background_photo' : 'https://images.unsplash.com/photo-1548022401-6b11ed578cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                'followingCount': 5
            }
        }
    }


    render(){
        const {profile} = this.state
        return (
            <ScrollView>
                <Toolbar/>
                <View>
                    <ProfileHeader profile={profile}/>
                    <FollowingInfo profile={profile}/>
                    <ProfileInfoEdit profile={profile}/>
                </View>
            </ScrollView>

        )
    }
}