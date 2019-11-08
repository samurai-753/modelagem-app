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

export default class Publicador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            publicador: {},
            width: 0,
            page: 0,
        };
        this.scroll = null;
    }

    // componentDidMount(){
    //     this.getPublicador();
    // }

    render() {
        const {publicador, style, goToPublicador} = this.props;
        // alert(boletim);
        return (
            <TouchableOpacity style={[styles.card, style]} onPress={goToPublicador}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image source={{uri: publicador.foto_url}} style={{height: 40, width: 40, resizeMode: "cover", marginRight: 10, borderRadius: 20}}/>
                    <Text>{publicador.nome}</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Image source={require("../Assets/icons/followers.png")} style={{width: 20, height: 20, resizeMode: "contain", marginRight: 3}}/>
                    <Text>{publicador.num_seguidores}</Text>
                </View>

            </TouchableOpacity>
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
        
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
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