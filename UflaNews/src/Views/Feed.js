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

const db = {
    "publicadors": [
        {
            "nome": "DCC",
            "num_seguidores": 10,
            "id": 0,
            "foto_url": "https://4.bp.blogspot.com/-TckS2ehpyDc/VQIthzSQS7I/AAAAAAAAA5w/Xq2pF5Uz3h8/s1600/ocelot%2Bpic%2B2.jpg",
        },
        {
            "nome": "LOOP",
            "num_seguidores": 7,
            "id": 1,
            "foto_url": "https://4.bp.blogspot.com/-TckS2ehpyDc/VQIthzSQS7I/AAAAAAAAA5w/Xq2pF5Uz3h8/s1600/ocelot%2Bpic%2B2.jpg",
        },
        {
            "nome": "LabRI",
            "num_seguidores": 4,
            "id": 2,
            "foto_url": "https://4.bp.blogspot.com/-TckS2ehpyDc/VQIthzSQS7I/AAAAAAAAA5w/Xq2pF5Uz3h8/s1600/ocelot%2Bpic%2B2.jpg",
        }
    ],
    "seguidores": [
        {
            "id": 0,
            "usuarioId": 0,
            "publicadorId": 0
        },
        {
            "id": 1,
            "usuarioId": 0,
            "publicadorId": 1
        },
        {
            "id": 2,
            "usuarioId": 0,
            "publicadorId": 2
        },
        {
            "id": 3,
            "usuarioId": 1,
            "publicadorId": 0
        },
        {
            "id": 4,
            "usuarioId": 1,
            "publicadorId": 1
        },
        {
            "id": 5,
            "usuarioId": 2,
            "publicadorId": 0
        },
        {
            "id": 6,
            "usuarioId": 2,
            "publicadorId": 2
        },
        {
            "id": 7,
            "usuarioId": 3,
            "publicadorId": 0
        },
        {
            "id": 8,
            "usuarioId": 3,
            "publicadorId": 1
        },
        {
            "id": 9,
            "usuarioId": 3,
            "publicadorId": 2
        }
    ],
    "comentarios": [
        {
            "comentario": "Grande bosta",
            "boletimId": 0,
            "data": "2019-11-01T11:35:16.834893",
            "id": 0,
            "usuarioId": 1
        }
    ],
    "usuarios": [
        {
            "nome": "KatoMono",
            "foto_url": "https://4.bp.blogspot.com/-TckS2ehpyDc/VQIthzSQS7I/AAAAAAAAA5w/Xq2pF5Uz3h8/s1600/ocelot%2Bpic%2B2.jpg",
            "email": "k4t0mono@samurai.io",
            "id": 0,
            "senha": "birb"
        },
        {
            "nome": "Dudei",
            "foto_url": "https://media.licdn.com/dms/image/C4E03AQFApzGsMuTm0g/profile-displayphoto-shrink_200_200/0?e=1577923200&v=beta&t=0tpD39UUri1j71hapEVzkw1AcBxpA_BShfmdQ7l5XrI",
            "email": "dudei@samurai.io",
            "id": 1,
            "senha": "123"
        },
        {
            "nome": "Thuza",
            "foto_url": "https://media.licdn.com/dms/image/C4D03AQFD2Dj4vkh4CA/profile-displayphoto-shrink_200_200/0?e=1577923200&v=beta&t=BmkwRs6xbqrx0gvWc4kFvOjfBnbehFeRh2VU-xIRBCk",
            "email": "thuza@samurai.io",
            "id": 2,
            "senha": "vim"
        },
        {
            "nome": "Ribolive",
            "foto_url": "https://media.licdn.com/dms/image/C4E03AQE8AfuIcYZCGA/profile-displayphoto-shrink_200_200/0?e=1577923200&v=beta&t=Nz-JReE75u6AbORXwyEqaWG5KUaoa8qVLW_RAZzLCUY",
            "email": "ribolive@samura.io",
            "id": 3,
            "senha": "asd"
        }
    ],
    "likes": [
        {
            "boletimId": 0,
            "id": 0,
            "usuarioId": 0
        },
        {
            "boletimId": 0,
            "id": 1,
            "usuarioId": 1
        },
        {
            "boletimId": 0,
            "id": 2,
            "usuarioId": 2
        },
        {
            "boletimId": 1,
            "id": 3,
            "usuarioId": 3
        }
    ],
    "boletims": [
        {
            "sessoes": [
                "1",
                "aaaa"
            ],
            "imagem_src": "https://ufla.br/images/banners/congressos-ufla.jpg",
            "titulo": "Lorem Amet Aline",
            "data": "2019-11-01T11:35:16.576988",
            "id": 0,
            "publicadorId": 1,
            "likes": 3
        },
        {
            "sessoes": [
                "A Polícia Federal deflagrou nesta sexta-feira (1º) uma operação com uma empresa grega apontada pelos investigadores como a responsável pela embarcação que derramou o óleo que atinge nove Estados brasileiros desde o fim de agosto.",
                "O nome da empresa não foi divulgado. Foram cumpridos dois mandados de busca e apreensão na capital fluminense, em sedes de representantes e contatos da companhia grega no Brasil, na operação batizada de Mácula.",
                "Segundo os investigadores, o derramamento de óleo ocorreu a cerca de 700 km na costa brasileira no fim de julho. Mais específica, um trabalho de geointeligência identificou uma mancha a 733km (395 milhas náuticas) a oeste do Estado da Paraíba.",
                "De acordo com a Polícia Federal, \"a embarcação, de bandeira grega, atracou (no porto San José) na Venezuela em 15 de julho, permaneceu por três dias, e seguiu rumo a Singapura, pelo oceano Atlântico, vindo a aportar apenas na África do Sul. O derramamento investigado teria ocorrido nesse deslocamento\"."
            ],
            "imagem_src": "https://ufla.br/images/banners/congressos-ufla.jpg",
            "titulo": "Polícia Federal faz operação contra empresa grega acusada do vazamento de óleo no litoral brasileiro",
            "data": "2019-11-01T11:35:16.577010",
            "id": 1,
            "publicadorId": 1,
            "likes": 1
        }
    ]
}


export default class LoginScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            boletins: [],
        }
    }

    componentDidMount(){
        this.getBoletins();
    }

    getBoletins(){
        this.setState({boletins: db.boletims})
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    ListHeaderComponent={<Header style={{marginBottom: 20}}/>}
                    data={this.state.boletins}
                    keyboardShouldPersistTaps="always"
                    renderItem={(boletim)=> 
                        <Boletim 
                            style={{marginLeft: 20, marginRight: 20}}
                            boletim={boletim.item}
                        />
                    }
                    // contentContainerStyle={}
                />
            </View>
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
    }
})