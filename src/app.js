import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner, CardSection} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = {
        loggedId: null
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyC_jUwVMDjTS-rnKWOOZRFs8tspFKpNE4s",
            authDomain: "authapp-teste.firebaseapp.com",
            databaseURL: "https://authapp-teste.firebaseio.com",
            projectId: "authapp-teste",
            storageBucket: "authapp-teste.appspot.com",
            messagingSenderId: "325850977644"
        });

        firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    this.setState({loggedId: true});
                } else {
                    this.setState({loggedId: false});
                }
            });
    }

    renderContent() {
        switch (this.state.loggedId) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm/>;
            default:
                return (
                    <CardSection>
                        <Spinner />
                    </CardSection>
                );
        }
    }

    render() {
        return (
            <View>
                <Header title="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;