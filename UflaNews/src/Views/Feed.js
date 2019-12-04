import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';

import Header from '../Components/Header';
import Boletim from '../Components/Boletim';

import * as Server from "../Server";
import Publicador from '../Components/PublicadorItem';

import { Drawer } from 'native-base';
import Menu from '../Components/Menu';
import Loading from '../Components/Loading';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boletins: [],
            boletinsFiltrados: [],
            publicadores: [],
            publicadoresFiltrados: [],
            busca: "",
            loading: true
        }

    }

    componentDidMount(){
        let usuario = this.props.navigation.getParam("usuario", null);
        let publicadores = usuario.seguidores.map((x) => x.publicadorId)

        this.getBoletins(publicadores);
        this.getPublicadores();
    }

    async getBoletins(publicadores){
        let boletins = await Server.getBoletins(publicadores);
        this.setState({ boletins, loading: false })
    }

    async getPublicadores(){
        let publicadores = await Server.getPublicadores();
        this.setState({publicadores})
    }
    
    filtrar(busca){
        // let busca = this.state.busca;
        this.setState({ busca });
        let boletins = this.state.boletins;
        let publicadores = this.state.publicadores;

        let boletinsFiltrados = boletins.filter((boletim)=>{
            return boletim.titulo.toLowerCase().includes(busca.toLowerCase());
        })

        let publicadoresFiltrados = publicadores.filter((publicador)=>{
            return publicador.nome.toLowerCase().includes(busca.toLowerCase());
        })

        this.setState({ boletinsFiltrados, publicadoresFiltrados });
    }

    render() {
        const { busca, boletins, boletinsFiltrados, publicadoresFiltrados, loading } = this.state;
        return (
            <Drawer 
                ref={(ref) => { this.drawer = ref}} 
                content={
                    <Menu
                        navigation={this.props.navigation}
                    />
                } 
                onClose={() => {}} 
            >
            <View style={styles.container}>
                <Loading show={loading} />
                <ScrollView>
                    <Header 
                        style={{marginBottom: 10}} 
                        pesquisar={true} 
                        onChangeText={(txt)=>this.filtrar(txt)} 
                        value={this.state.busca}
                        openMenu={()=>this.drawer._root.open()}
                    />
                    {
                        this.state.busca == "" &&
                        boletins.map((boletim, index)=>
                            <Boletim 
                                key={"feed"+index}
                                style={{marginLeft: 20, marginRight: 20}}
                                boletim={boletim}
                                encurtar={true}
                                goToBoletim={()=>this.props.navigation.navigate("VisualizarBoletim", {id: boletim.id})}
                                // goToPublicador={()=>{console.log("TEYTEY")}}
                                goToPublicador={()=>this.props.navigation.navigate("Publisher", {id: boletim.publicador.id})}
                            />
                        )
                    }

                    {
                        this.state.busca != "" &&
                        publicadoresFiltrados.length > 0 &&
                        <View style={{marginLeft: 20, marginRight: 20}}>
                            <Text style={styles.tituloLista}>Publicadores:</Text>
                            {
                                publicadoresFiltrados.map((publicador, index)=>
                                    <Publicador publicador={publicador} goToPublicador={()=>this.props.navigation.navigate("Publisher", {id: publicador.id})}/>
                                )
                            }
                        </View>
                    }
                    {
                        this.state.busca != "" &&
                        boletinsFiltrados.length > 0 &&
                        <View style={{marginLeft: 20, marginRight: 20}}>
                            <Text style={styles.tituloLista}>Boletins:</Text>
                            {
                                boletinsFiltrados.map((boletim, index)=>
                                    <Boletim 
                                        key={"feed"+index}
                                        boletim={boletim}
                                        encurtar={true}
                                        goToBoletim={()=>this.props.navigation.navigate("VisualizarBoletim", {id: boletim.id})}
                                        goToPublicador={()=>this.props.navigation.navigate("Publisher", {id: boletim.publicador.id})}
                                    />
                                )
                            }
                        </View>
                    }
                </ScrollView>
            </View>
            </Drawer> 
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content:{
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10
    },
    logo: {
        height: 100,
        width: 100,
        alignSelf: "center",
        // marginTop: 50,
        marginBottom: 50
    },
    rightArrow: {
        height: 60,
        width: 60,
    },
    loginButtonContainer : {
        alignSelf: "center",
        backgroundColor: "#fff",
        borderRadius: 25,
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 15
    },
    singupText: {
        color: "#00B6E9"

    },
    inputsContainer: {
        flex: 1,
        justifyContent: "center",
        paddingRight: 15,
        paddingLeft: 15
    },
    buttonsContainer: {
        // flex: 1,
        marginBottom: 20
    },
    txtButton:{
        color: "#00B6E9"
    },
    tituloLista: {
        fontSize: 16, 
        fontWeight: "700", 
        color: "#ACB8BB",
        marginTop: 20, 
        marginBottom: 10
    }
})