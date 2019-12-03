import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    ScrollView

} from 'react-native';

import Toolbar from '../Components/Toolbar'
import Header from '../Components/Header'
import Boletim from '../Components/Boletim'
import PublisherHeader from '../Components/PublisherHeader'
import PublishersFollowersInfo from '../Components/PublisherFollowersInfo'

import * as Server from "../Server";
import { thisExpression } from '@babel/types';

export default class Publisher extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: {
                'name': 'ADUFLA',
                'following' : false,
                'posts' : [],
                'followersCount' : 9,
                'photo_url' : 'http://www.adufla.org.br/site/wp-content/uploads/2015/04/Vetor-ADUFLA-fundo-branco-702x336.jpg',
                'background_photo' : '',
            },
            boletins: []

        }
    }

    componentDidMount(){
        this.getBoletins(1);
    }

    async getBoletins(id){
        let boletins = await Server.getBoletins(id);
        this.setState({ boletins });
    }


    render(){
        const {profile, boletins} = this.state
        return (
            <ScrollView>
                <Header 
                    pesquisar={false} 
                    onChangeText={(txt)=>this.filtrar(txt)} 
                    value={this.state.busca}
                />
                <PublisherHeader profile={profile}/>
                <PublishersFollowersInfo profile={profile}/>
                {
                    boletins.map((boletim, index)=>
                        <Boletim 
                            key={"feed"+index}
                            style={{marginLeft: 20, marginRight: 20}}
                            boletim={boletim}
                            encurtar={true}
                            goToBoletim={()=>this.props.navigation.navigate("VisualizarBoletim", {id: boletim.id})}
                            // goToPublicador={()=>this.props.navigation.navigate("Publisher")}
                        />
                    )
                }
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({

})