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



export default class Listagem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: {
                'name': 'Comp Júnior',
                'following' : false,
                'posts' : [],
                'followersCount' : 9,
                'photo_url' : 'http://www.dcc.ufla.br/wp-content/uploads/2013/03/LogoComp.png',
                'background_photo' : 'https://scontent.fvag6-1.fna.fbcdn.net/v/t1.0-9/18582436_1303641433037411_156218022540687440_n.png?_nc_cat=109&_nc_oc=AQlSV8szqjb5FijCvfFimcKR1ChOm-bDi1cVqTE9rrcydx1b9pTcTZRS8AZdrgLKgro&_nc_ht=scontent.fvag6-1.fna&oh=9e21f6feccfa8c59ddaa3451b6873958&oe=5E572225',
            },
            publicadoresFiltrados: [
                {
                    "nome": "DCC",
                    "num_seguidores": 10,
                    "id": 0
                },
                {
                    "nome": "LOOP",
                    "num_seguidores": 7,
                    "id": 1
                },
                {
                    "nome": "LabRI",
                    "num_seguidores": 4,
                    "id": 2
                }
            ]

        }
    }

    


    render(){
        const {profile, publicadoresFiltrados} = this.state
        return (
            <ScrollView>
                <Header 
                    style={{marginBottom: 10}} 
                    pesquisar={false} 
                    onChangeText={(txt)=>this.filtrar(txt)} 
                    value={this.state.busca}
                />
                {
                    publicadoresFiltrados.map((publicador, index)=>
                        <Publicador publicador={publicador} />
                    )
                }
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({

})