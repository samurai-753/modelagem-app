import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import CustomTextInput from '../Components/CustomTextInput'
import Comment from '../Components/Comment';
import News from '../Components/News';
import ToolBar from '../Components/ToolBar';
import { SafeAreaView } from 'react-navigation';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

export default class NewsLetterDetail extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <SafeAreaView style={styles.container}>
                <ToolBar/>
                <ScrollView>                    
                    <View style={styles.body}>
                        <View style={styles.newsletter}>
                            <News/>
                        </View>
                        <View style={styles.comments}>
                            <Comment/>
                            <Comment/>
                            <Comment/>
                            <View style={styles.commentField}>
                                <CustomTextInput style={styles.textInputComentar}
                                    placeholder="Comentar"/>
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
        height: 'auto',
        width: 'auto',
        borderRadius: 2,
        borderColor: '#000',
        alignSelf: "center",
    },
    comments: {
        flex: 0,
        marginTop: 20,
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
        flexDirection: 'row'
    }
})