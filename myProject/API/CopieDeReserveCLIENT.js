//      supposé fonctionner
/*


import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View} from 'react-native';
import SocketIOClient from 'socket.io-client/dist/socket.io.js'

export default class test2 extends Component {
    constructor(props){
        super(props);
        const ws = new WebSocket('http://localhost:8080');
        console.log("This is client side Web socket.",ws)
        ws.onopen = () => {
            console.log("Its connected")
            ws.send('something'); // send a message
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});*/
