import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import ScrollSessoes from './ScrollSessoes';
const { DEVICE_WIDTH } = Dimensions.get('window');

import * as Server from "../Server";
import * as Helper from "../Helper";

export default class Boletim extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // publicador: {},
            width: 0,
            page: 0,
        };
        this.scroll = null;
    }

    componentDidMount(){
        // this.getPublicador();
    }

    // async getPublicador(){
    //     let id = this.props.boletim.publicadorId;
    //     let publicador = await Server.getPublicador(id);
    //     this.setState({ publicador })
    // }

    onLayout = event => {
        let {width, height} = event.nativeEvent.layout;
        if (this.state.width == width){
            return;
        }
        this.setState({width: width});
    }

    handleScrollStop = (event) => {
        let page = Math.ceil(event.nativeEvent.contentOffset.x/this.state.width);
        this.setState({ page });
    }

    nextItem = () => {
        let page = this.state.page + 1;
        let xScroll = page * this.state.width;
        this.scroll.scrollTo({x: xScroll, y: 0, animated: true});
        this.setState({ page });
        // alert("foi")
    }

    prevItem = () => {
        let page = this.state.page - 1;
        let xScroll = page * this.state.width;
        this.scroll.scrollTo({x: xScroll, y: 0, animated: true});
        this.setState({ page });
        // alert("foi")
    }


    // const props = this.props;
    render() {
        const {boletim, style, goToPublicador} = this.props;
        // const {publicador} = this.state;
        const publicador = boletim.publicador
        // alert(boletim);
        return (
            <View style={[styles.card, style]}>

                <TouchableOpacity onPress={goToPublicador} style={{flexDirection: "row", alignItems: "center", marginBottom: 10}} activeOpacity={1}>
                    <Image source={{uri: publicador.fotoUrl}} style={{height: 40, width: 40, resizeMode: "cover", marginRight: 10, borderRadius: 20}}/>
                    <Text>{publicador.nome}</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={1} onPress={this.props.goToBoletim}>
                    <Text style={styles.titulo}>{boletim.titulo}</Text>
                    <Image source={{uri: boletim.imagemSrc}} style={{height: 200, width: "100%", marginRight: 10, resizeMode: "cover", borderRadius: 4, marginBottom: 5}}/>
                </TouchableOpacity>

                <ScrollSessoes sessaos={boletim.sessaos} style={{marginBottom: 5}} encurtar={this.props.encurtar} goToBoletim={this.props.goToBoletim}/>

                <View style={{borderColor: "rgba(0,0,0,0.3)", borderBottomWidth: 1, width: "100%", marginBottom: 10}} />

                {/* <WebView
                    source={{html: "<p style='font-size: 70px'><b>XOXOTA</b></p>"}}
                    // style={{height: 400}}
                    scalesPageToFit={false}
                /> */}

                <View style={{flexDirection: "row", flex: 1, justifyContent: "space-between", alignItems: "center"}}>
                    <Text>{Helper.formatarData(boletim.data)}</Text>

                    <View style={{flexDirection: "row"}}>
                        
                        <TouchableOpacity onPress={()=>{}}>
                            <Image source={require("../Assets/icons/comment.png")} style={[styles.icon, {marginRight: 10}]} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{}}>
                            <Image source={require("../Assets/icons/like.png")} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        // height: 100,
        backgroundColor: "#fff",
        margin: 5,
        marginTop: 10,
        padding: 10,
    },
    titulo: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 10
    },
    icon: {
        width: 30, 
        height: 30, 
        resizeMode: "contain"
    }
})