import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    ScrollView,
    RefreshControl,
    Alert

} from 'react-native';

import Header from '../Components/Header'
import Publicador from '../Components/PublicadorItem'
import { connect } from "react-redux";

import * as Server from "../Server";
import Loading from '../Components/Loading';
import * as sessionActions from "../Actions/sessionActions";
import { bindActionCreators } from "redux";

export class Listagem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publicadores: [],
            loading: true,
            refreshing: false,
        };
    }

    componentDidMount(){
        this.getSeguidores()
    }

    async onRefresh(){
        this.setState({ refreshing: true });

        let mostrar_todos = this.props.navigation.getParam("mostrar_todos", false)
        if(mostrar_todos){
            this.getSeguidores()
            .then(()=>{
                this.setState({ refreshing: false });
            })   
        }
        else{
            const {email, senha} = this.props.profile;
            console.log("REFRESHHHH");
            Server.login(email, senha)
            .then((usuario) => {
                this.props.actions.login(usuario)
                
                this.getSeguidores(usuario.seguidores)
                .then(()=>{
                    this.setState({ refreshing: false });
                })
                .catch((err)=>{
                    Alert.alert("Erro", "Busca de publicadores falhou.")
                });
            })
        }

    }

    async getSeguidores(){
        let mostrar_todos = this.props.navigation.getParam("mostrar_todos", false)
        if(mostrar_todos){
            let publicadores = await Server.getPublicadores()
            this.setState({ publicadores, loading: false })
        }
        else{
            const {profile} = this.props;
            let publicadores = await Server.getPublicadores(profile.seguidores)
            console.log("deu bom", publicadores)
            this.setState({ publicadores, loading: false })
        }
    }

    render(){
        const {publicadores, loading, refreshing} = this.state
        if(loading){
            return (
                <Loading show={loading} />
            );
        }
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={()=>this.onRefresh()} />
                }    
            >
                <Header 
                    style={{marginBottom: 10}} 
                    pesquisar={false} 
                    // onChangeText={(txt)=>this.filtrar(txt)} 
                    // value={this.state.busca}
                />

                <View style={{paddingRight: 15, paddingLeft: 15}}>

                {
                    publicadores.map((publicador, index) =>
                        <Publicador publicador={publicador} goToPublicador={()=>this.props.navigation.navigate("Publisher", {id: publicador.id})}/>
                    )
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(Listagem);