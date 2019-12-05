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
import { connect } from "react-redux";


export class Menu extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        console.log("PERFIL", this.props.profile)
    }

    render() {
        // const { user, password } = this.state;
        const { navigation, profile } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <ProfileHeader profile={profile}/>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Profile")} style={styles.button} >
                        <Image source={require("../Assets/icons/user.png")} style={styles.logo}/>
                        <Text style={styles.txt_button}>
                            Perfil
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Login")} style={styles.button_logout} >
                    <Text style={{color: "#fff"}}>
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#00B6E9", 
        justifyContent: "space-between"
    },
    button: {
        height: 50, 
        alignItems: "center", 
        justifyContent: "center", 
        flexDirection: "row",
        // borderBottomColor: "#fff", 
        // borderBottomWidth: 1
        backgroundColor: "#03a7d5",
    },
    button_logout:{
        padding: 7,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#00789a",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 15,
        borderRadius: 20
    },
    txt_button:{
        color: "#fff",
        fontSize: 16
    },
    logo: {
        height: 20,
        width: 20,
        alignSelf: "center",
        marginRight: 15
        // marginTop: 50,
        // marginBottom: 50
    },
})



function mapStateToProps(state, ownProps) {
    return {profile: state.session.profile};
}

export default connect(mapStateToProps, null)(Menu);