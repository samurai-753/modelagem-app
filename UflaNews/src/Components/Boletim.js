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


export default class Boletim extends Component {
    constructor(props) {
        super(props)
        this.state = {
            publicador: {},
            width: 0,
            page: 0,
        };
        this.scroll = null;
    }

    componentDidMount(){
        this.getPublicador();
    }

    getPublicador(){
        const publicador = {
            "nome": "DCC",
            "num_seguidores": 10,
            "id": 0,
            "foto_url": "https://4.bp.blogspot.com/-TckS2ehpyDc/VQIthzSQS7I/AAAAAAAAA5w/Xq2pF5Uz3h8/s1600/ocelot%2Bpic%2B2.jpg",
        };

        this.setState({ publicador: publicador })
    }

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

    formatarData(data){
        let hora = "";
        if(data.length > 10){
            hora = data.slice(11, 16);
            data = data.slice(0, 10);
        }
        data = data.split("-");
        data = data[2] + "/" + data[1] + "/" + data[0];
        return data + " " + hora;
    }

    // const props = this.props;
        render() {
        const {boletim, style} = this.props;
        const {publicador} = this.state;
        // alert(boletim);
        return (
            <View style={[styles.card, style]}>

                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 10}}>
                    <Image source={{uri: publicador.foto_url}} style={{height: 40, width: 40, resizeMode: "cover", marginRight: 10, borderRadius: 20}}/>
                    <Text>{publicador.nome}</Text>
                </View>

                <Text style={styles.titulo}>{boletim.titulo}</Text>
                <Image source={{uri: boletim.imagem_src}} style={{height: 200, width: "100%", marginRight: 10, resizeMode: "cover", borderRadius: 4, marginBottom: 5}}/>


                <ScrollSessoes sessoes={boletim.sessoes} style={{marginBottom: 5}} encurtar={true} />

                <View style={{borderColor: "rgba(0,0,0,0.3)", borderBottomWidth: 1, width: "100%", marginBottom: 10}} />

                <View style={{flexDirection: "row", flex: 1, justifyContent: "space-between"}}>
                    <Text>{this.formatarData(boletim.data)}</Text>

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