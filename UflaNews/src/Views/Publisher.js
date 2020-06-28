import React, { Component } from 'react';
import {
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

import { connect } from "react-redux";


export class Publisher extends Component {
    constructor(props) {
        super(props)

        this.state = {
            publicador: null,
            boletins: [],
            loading: true,
            follow_obj: null,
        }
        this._id = null
    }

    componentDidMount() {
        this._id = this.props.navigation.getParam("id", null)
        this.getPublicador(this._id);
        this.getBoletins(this._id);
        this.ehSeguidor(this._id);
    }

    async ehSeguidor(id) {
        let follow_obj = await Server.ehSeguidor(this._id, this.props.profile._id);
        if (follow_obj.length > 0) {
            this.setState({ follow_obj: follow_obj[0] });
        }
        else {
            this.setState({ follow_obj: null });
        }

    }

    async getBoletins(id) {
        let boletins = await Server.getBoletins([id]);
        this.setState({ boletins });
    }

    async getPublicador(id) {
        let publicador = await Server.getPublicador([id]);
        this.setState({ publicador, loading: false });
    }

    async seguir() {
        let follow_obj = await Server.seguir(this._id, this.props.profile._id);
        if (follow_obj) {
            this.getPublicador(this._id);
        }
        this.setState({ follow_obj: follow_obj });
    }

    async deixarDeSeguir() {
        let response = await Server.deixarDeSeguir(this.state.follow_obj._id);
        if (response) {
            this.getPublicador(this._id);
        }
        this.setState({ follow_obj: null });
    }


    render() {
        const { publicador, boletins, loading } = this.state
        if (loading) {
            return (
                <Loading show={loading} />
            );
        }
        return (
            <ScrollView>
                <Loading show={loading} />
                <Header
                    pesquisar={false}
                    onChangeText={(txt) => this.filtrar(txt)}
                    value={this.state.busca}
                />
                {
                    publicador &&
                    <View>
                        <PublisherHeader publicador={publicador} />
                        <PublishersFollowersInfo
                            publicador={publicador}
                            following={this.state.follow_obj}
                            seguir={() => this.seguir()}
                            deixarDeSeguir={() => this.deixarDeSeguir()}
                        />
                    </View>
                }
                {
                    boletins.map((boletim, index) =>
                        <Boletim
                            key={"feed" + index}
                            style={{ marginLeft: 20, marginRight: 20 }}
                            boletim={boletim}
                            encurtar={true}
                            goToBoletim={() => this.props.navigation.navigate("VisualizarBoletim", { id: boletim._id })}
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

function mapStateToProps(state) {
    return { profile: state.session.profile };
}

export default connect(mapStateToProps, null)(Publisher);