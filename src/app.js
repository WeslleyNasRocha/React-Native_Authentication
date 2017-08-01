import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyC_jUwVMDjTS-rnKWOOZRFs8tspFKpNE4s",
            authDomain: "authapp-teste.firebaseapp.com",
            databaseURL: "https://authapp-teste.firebaseio.com",
            projectId: "authapp-teste",
            storageBucket: "authapp-teste.appspot.com",
            messagingSenderId: "325850977644"
        });
    }

    render() {
        return (
            <View>
                <Header title="Authentication" />
                <LoginForm></LoginForm>
            </View>
        );
    }
}

export default App;