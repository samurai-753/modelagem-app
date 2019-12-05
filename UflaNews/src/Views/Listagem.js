import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    ScrollView

} from 'react-native';

import Header from '../Components/Header'
import Publicador from '../Components/PublicadorItem'
import { connect } from "react-redux";

import * as Server from "../Server";
import Loading from '../Components/Loading';

export class Listagem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publicadores: [],
            loading: true
        };
    }

    componentDidMount(){
        this.getSeguidores()
    }

    async getSeguidores(){
        const {profile} = this.props;
        let publicadores = await Server.getPublicadores(profile.seguidores)
        console.log("deu bom", publicadores)
        this.setState({ publicadores, loading: false })
    }

    render(){
        const {publicadores, loading} = this.state
        if(loading){
            return (
                <Loading show={loading} />
            );
        }
        return (
            <ScrollView>
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


// const styles = StyleSheet.create({

// })

function mapStateToProps(state) {
    return {profile: state.session.profile};
}

export default connect(mapStateToProps, null)(Listagem);