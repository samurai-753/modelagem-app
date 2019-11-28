import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import CustomTextInput from './CustomTextInput'


export default class ProfileInfoEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.profile.name,
            newPassword : '',
            newPasswordConfirm: '',
            photo : ''
        }
    }


    render(){
        const {name, newPassword, newPasswordConfirm, photo} = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Atualizar dados</Text>
                <View style={styles.fieldsContainer}>
                    <CustomTextInput white={false} placeholder="Nome Completo" value={''} onChangeText={name => this.setState({name})}/>
                    <CustomTextInput white={false} placeholder="Nova senha" value={newPassword} onChangeText={newPassword => this.setState({newPassword})}/>
                    <CustomTextInput white={false} placeholder="Confirmar nova senha" value={newPasswordConfirm} onChangeText={newPasswordConfirm => this.setState({newPasswordConfirm})}/>
                    <CustomTextInput white={false} placeholder="Enviar uma foto" />
                </View>
                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.listButtonText}> Confirmar alterações </Text>
                </TouchableOpacity>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    headerText : {
        fontSize: 20,
        margin: 10,
        color: '#4C4C4C'
    },
    confirmButton: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        borderRadius: 8,
        backgroundColor: '#5E98DD',
        margin: 10
    },
    listButtonText: {
        fontSize: 18,
        fontWeight: '900',
        color: 'white'
    },
    fieldsContainer: {
        marginLeft: 15,
        marginRight: 15
    }
})