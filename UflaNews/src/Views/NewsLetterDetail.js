import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import Comment from '../Components/Comment';
import News from '../Components/News';
import ToolBar from '../Components/ToolBar';
import { SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

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
                            <Comment/>
                            <Comment/>
                            <Comment/>
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
    }
})