import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import CustomTextInput from '../Components/CustomTextInput';
import ProfileHeader from './ProfileHeader';
import FollowingInfo from './FollowingInfo';
import ProfileInfoEdit from './ProfileInfoEdit';


export default class Menu extends Component {
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

    render() {
        // const { user, password } = this.state;
        const { navigation } = this.props;
        const { profile } = this.state;
        return (
            <View style={{flex: 1, backgroundColor: "#fff"}}>
                <ProfileHeader profile={profile}/>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Profile")} style={{height: 50, alignItems: "center", justifyContent: "center", borderBottomColor: "#000", borderBottomWidth: 1}} >
                    <Text style={{}}>
                        Perfil
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Profile")} style={{height: 50, alignItems: "center", justifyContent: "center", borderBottomColor: "#000", borderBottomWidth: 1}} >
                    <Text style={{}}>
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: "space-between",
        backgroundColor: '#00B6E9',
        paddingLeft: 15,
        paddingRight: 15,
        // flex:1,
        height: 70,
        flexDirection: "row",
        alignItems: "center"
    },
    
    logo: {
        height: 40,
        width: 40,
        alignSelf: "center",
        // marginTop: 50,
        // marginBottom: 50
    },
})