import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'

const ARROW_SIZE = 30;

export default class ScrollSessoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            page: 0,

        };
    }

    onLayout = event => {
        let {width, height} = event.nativeEvent.layout;
        if (this.state.width != width){
            this.setState({width});
        }
        if (this.state.height != height){
            this.setState({height});
        }
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

    getTextoEncurtado(txt){
        if(txt.length > 50){
            retorno = [
                <TouchableOpacity activeOpacity={1} onPress={this.props.goToBoletim}>
                    <View>
                        <Text>{txt.slice(0,50)}... <Text style={{color: "#1e88e5", textDecorationLine: "underline"}}>ver mais</Text></Text>
                    </View>
                </TouchableOpacity>

            ]
            return retorno;
        }
        else{
            return(
                <Text>{txt}</Text>
            )
        }
    }

    render() {
        const { sessoes } = this.props;
        return (
            <ScrollView
                ref={(r)=>{if(r != null) this.scroll = r}}
                onLayout={this.onLayout} 
                style={[{width: "100%"}, this.props.style]} 
                horizontal={true} 
                keyboardShouldPersistTaps="always"
                pagingEnabled
                onMomentumScrollEnd={this.handleScrollStop}
                showsHorizontalScrollIndicator={false}
            >
                {
                    sessoes.map((item, index)=>
                        <View key={"sessao" + index} style={{width: this.state.width, minHeight: 50, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>

                            {
                                index == 0?
                                <Image source={require("../Assets/icons/arrow-head-left.png")} opacity={0.3} style={styles.arrow} />
                                :
                                <TouchableOpacity style={{height: "100%", width: ARROW_SIZE, paddingTop: (this.state.height/2) - (ARROW_SIZE/2)}} onPress={this.prevItem}>
                                    <Image source={require("../Assets/icons/arrow-head-left.png")} style={styles.arrow} />
                                </TouchableOpacity>
                            }
                            <View style={{width: this.state.width - (2*ARROW_SIZE)}}>
                                {
                                    this.props.encurtar?
                                    this.getTextoEncurtado(item)
                                    :
                                    <Text>{item}</Text>
                                }
                            </View>
                            {
                                index == sessoes.length - 1?
                                <Image source={require("../Assets/icons/arrow-head-right.png")} opacity={0.3} style={styles.arrow} />                                
                                :
                                <TouchableOpacity style={{height: "100%", width: ARROW_SIZE, paddingTop: (this.state.height/2) - (ARROW_SIZE/2)}} onPress={this.nextItem}>
                                    <Image source={require("../Assets/icons/arrow-head-right.png")} style={styles.arrow} />
                                </TouchableOpacity>
                            }
                        </View>
                    )

                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 3,
        alignContent: 'space-between',
        backgroundColor: '#fff',
    },
    lineone: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    user: {
        flexDirection: 'row'
    },
    logo: {
        alignSelf: 'flex-start',
        height: 30,
        width: 30,
        borderRadius: 200,
        borderColor: '#000',
        borderWidth: 2
    },
    username: {
        alignSelf: 'flex-start',
        marginTop: 0,
        color: '#365070',
        fontSize: 18,
        fontWeight: 'bold'
    },
    title: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#00B6E9'
    },
    image: {
        height: 200,
        width: 200,
        alignSelf: 'center'
    },
    description: {
        margin: 10,
    },
    infos: {
        margin: 2,
        borderTopColor:"#000",
        borderTopWidth: 4,
    },
    data: {
        margin: 3
    },
    arrow: {
        width: ARROW_SIZE, 
        height: ARROW_SIZE,
        resizeMode: "contain",
    }
})