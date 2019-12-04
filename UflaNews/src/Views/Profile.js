import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

import ProfileHeader from '../Components/ProfileHeader'
import FollowingInfo from '../Components/FollowingInfo'
import ProfileInfoEdit from '../Components/ProfileInfoEdit'
import Header from '../Components/Header';

import { connect } from "react-redux";


export class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: {
            }
        }
    }


    render(){
        const {profile} = this.props
        return (
            <ScrollView>
                <Header/>
                <View>
                    <ProfileHeader profile={profile}/>
                    <View style={{marginLeft: 15, marginRight: 15}}>
                        <FollowingInfo profile={profile} handlePress={() => this.props.navigation.navigate("Listagem")}/>
                        <ProfileInfoEdit profile={profile}/>
                    </View>
                </View>
            </ScrollView>

        )
    }
}




function mapStateToProps(state) {
    return {profile: state.session.profile};
}

export default connect(mapStateToProps, null)(Profile);