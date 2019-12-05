import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Keyboard,
    RefreshControl,
} from 'react-native';

import CustomTextInput from '../Components/CustomTextInput'
import Comment from '../Components/Comment';
import Header from '../Components/Header';
import { SafeAreaView } from 'react-navigation';

import * as Server from "../Server";
import Boletim from '../Components/Boletim';
import Loading from '../Components/Loading';
import { connect } from "react-redux";


export class VisualizarBoletim extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boletim: null,
            comentarios: [],
            loading_boletim: true,
            loading_comentarios: true,
            txt_comentario: "",
            refreshing: false,
        };

        this.input = null;
        this.focar_input = this.props.navigation.getParam("comentar", false);

    }

    componentDidMount(){
        let id = this.props.navigation.getParam("id", null)
        this.id = id;
        if(id != null){
            this.getBoletim(id);
            this.getComentarios(id);
        }
        else{
            // TODO tratar erro
        }
    }

    async getBoletim(id){
        let boletim = await Server.getBoletim(id);
        // alert(boletim.titulo)
        this.setState({ boletim, loading_boletim: false })
    
    }

    async getComentarios(boletimId) {
        let comentarios = await Server.getComentarios(boletimId);
        console.log("COMENTARIO", comentarios)
        this.setState({ comentarios, loading_comentarios: false });
        
        if(this.focar_input && this.input != null){
            setTimeout(() => {
                this.input.focus();
                this.focar_input = false;
            }, 2000);
        }
    }

    async enviarComentario(){
        Keyboard.dismiss();
        const { boletim, txt_comentario } = this.state;
        const { profile } = this.props;
        // alert(profile.id)
        // alert(boletim.id)
        // alert(txt_comentario)
        this.setState({loading_boletim: true})
        let comentario = await Server.postarComentario(profile.id, boletim.id, txt_comentario);
        console.log("coment", comentario)
        await this.getComentarios(boletim.id);
        this.setState({txt_comentario: "", loading_boletim: false})

    }

    async onRefresh(){
        this.setState({ refreshing: true });
        await this.getBoletim(this.id);
        await this.getComentarios(this.id);
        this.setState({ refreshing: false });
    }

    render () {
        const { comentarios, boletim, loading_boletim, loading_comentarios, refreshing} = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <Loading show={loading_boletim || loading_comentarios} />
                <ScrollView 
                    keyboardShouldPersistTaps={"always"}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={()=>this.onRefresh()} />
                    }
                >
                    <Header/>
                    <View style={styles.body}>
                        {
                            boletim != null &&
                            <Boletim 
                                // style={{marginLeft: 0, marginRight: 0}}
                                showNumLikes
                                encurtar={false}
                                boletim={boletim}
                                goToBoletim={()=>{}}
                                goToPublicador={()=>this.props.navigation.navigate("Publisher", {id: boletim.publicador.id})}
                                // goToPublicador={()=>this.props.navigation.navigate("Publisher")}
                            />
                        }
                        <View style={styles.comments}>
                            {
                                comentarios.map((comentario, index)=>
                                    <Comment 
                                        update={()=>this.getComentarios(this.id)}
                                        key={"comment" + index} 
                                        comentario={comentario}
                                    />
                                )
                            }
                        </View>
                        <View style={styles.commentField}>
                            <CustomTextInput 
                                inputRef={(r)=>this.input = r}
                                style={{flex: 1}}
                                value={this.state.txt_comentario} 
                                onChangeText={(txt)=>this.setState({ txt_comentario: txt  })} 
                                placeholder="Comentar"

                            />
                            <TouchableOpacity onPress={()=>this.enviarComentario()} style={styles.buttonComment}>
                                <Image source={require('../Assets/right-arrow.png')} style={styles.imageButton}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    },
     
    body: {
        padding: 10,
    },
    newsletter: {
        // height: 'auto',
        width: '100%',
        borderRadius: 2,
        borderColor: '#000',
        alignSelf: "center",
    },
    comments: {
        flex: 0,
    },
    textInputComentar: {
        flex: 1
    },
    buttonComment: {
        // alignSelf: 'center'
    },
    imageButton: {
        height: 28,
        width: 28,
    },
    commentField: {
        flexDirection: 'row',
        alignItems: "center",
        width: "100%",
    }
})


function mapStateToProps(state) {
    return {profile: state.session.profile};
}

export default connect(mapStateToProps, null)(VisualizarBoletim);
