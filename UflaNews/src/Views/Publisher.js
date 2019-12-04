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
import Loading from '../Components/Loading';

export default class Publisher extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: null,
            boletins: [],
            loading: true,

        }
    }

    componentDidMount(){
        let id = this.props.navigation.getParam("id", null)
        this.getPublicador(id);
        this.getBoletins(id);
    }

    async getBoletins(id){
        let boletins = await Server.getBoletins([id]);
        this.setState({ boletins });
    }

    async getPublicador(id){
        let profile = await Server.getPublicador([id]);
        this.setState({ profile, loading: false });
        
    }


    render(){
        const {profile, boletins, loading} = this.state
        if(loading){
            return (
                <Loading show={loading} />
            );
        }
        return (
            <ScrollView>
                <Loading show={loading} />
                <Header 
                    pesquisar={false} 
                    onChangeText={(txt)=>this.filtrar(txt)} 
                    value={this.state.busca}
                />
                {
                    profile &&
                    <View>
                        <PublisherHeader profile={profile}/>
                        <PublishersFollowersInfo profile={profile}/>
                    </View>
                }
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