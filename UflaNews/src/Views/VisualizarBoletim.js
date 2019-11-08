import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import CustomTextInput from '../Components/CustomTextInput'
import Comment from '../Components/Comment';
import Header from '../Components/Header';
import { SafeAreaView } from 'react-navigation';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

import * as Server from "../Server";
import Boletim from '../Components/Boletim';

export default class NewsLetterDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boletim: null,
            comentarios: [],
        };
    }

    componentDidMount(){
        let id = this.props.navigation.getParam("id", null)
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
        this.setState({ boletim })
    }

    async getComentarios(boletimId){
        let comentarios = await Server.getComentarios(boletimId);
        this.setState({ comentarios });
        // alert(comentarios[0]);
    }


    render () {
        const { comentarios } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>                    
                    <Header/>
                    <View style={styles.body}>
                        {
                            this.state.boletim != null &&
                            <Boletim 
                                // style={{marginLeft: 0, marginRight: 0}}
                                encurtar={false}
                                boletim={this.state.boletim}
                                goToBoletim={()=>{}}
                            />
                        }
                        <View style={styles.comments}>
                            {
                                comentarios.map((comentario, index)=>
                                    <Comment 
                                        key={"comment" + index} 
                                        comentario={comentario}
                                    />
                                )
                            }
                            <View style={styles.commentField}>
                                <CustomTextInput 
                                    style={styles.textInputComentar}
                                    placeholder="Comentar"
                                />
                                <TouchableHighlight style={styles.buttonComment}>
                                    <Image source={require('../Assets/right-arrow.png')} style={styles.imageButton}/>
                                </TouchableHighlight>
                            </View>
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
    },
    buttonComment: {
        alignSelf: 'center'
    },
    imageButton: {
        height: 28,
        width: 28,
    },
    commentField: {
        flexDirection: 'row',
        alignItems: "center"
    }
})