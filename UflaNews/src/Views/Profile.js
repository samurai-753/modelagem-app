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
import * as sessionActions from "../Actions/sessionActions";
import { bindActionCreators } from "redux";
import * as Server from "../Server";

import { connect } from "react-redux";
import Loading from '../Components/Loading';


export class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
    }

    componentDidMount(){
        this.refresh();
    }

    refresh(){
        const {email, senha} = this.props.profile;
        Server.login(email, senha)
        .then((usuario) => {
            this.setState({loading: false})
            this.props.actions.login(usuario)
        })
        .catch((err) => {
            this.setState({loading: false})
            Alert.alert("Ops", "Erro ao atualizar informações do perfil.");
        })
    }

    render(){
        const {profile} = this.props;
        const {loading} = this.state;
        if(loading){
            return (
                <Loading show={loading} />
            );
        }
        return (
            <ScrollView>
                <Header/>
                <View>
                    <ProfileHeader profile={profile}/>
                    <View style={{marginLeft: 15, marginRight: 15}}>
                        <FollowingInfo profile={profile} handlePress={() => this.props.navigation.navigate("Listagem")}/>
                        <ProfileInfoEdit toggleLoading={(load)=>this.setState({ loading: load})} profile={profile}/>
                    </View>
                </View>
            </ScrollView>

        )
    }
}



function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
}


function mapStateToProps(state) {
    return {profile: state.session.profile};
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);