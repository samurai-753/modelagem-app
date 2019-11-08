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

import * as Server from "../Server";

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

    async getBoletins(){
        let boletins = await Server.getBoletins();
        this.setState({boletins})
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    ListHeaderComponent={<Header style={{marginBottom: 20}} pesquisar={true}/>}
                    data={this.state.boletins}
                    keyboardShouldPersistTaps="always"
                    renderItem={(boletim)=> 
                        <Boletim 
                            style={{marginLeft: 20, marginRight: 20}}
                            boletim={boletim.item}
                            encurtar={true}
                            goToBoletim={()=>this.props.navigation.navigate("VisualizarBoletim", {id: boletim.item.id})}
                        />
                    }
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