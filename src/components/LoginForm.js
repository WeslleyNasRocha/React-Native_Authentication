import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component{
    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput style={{width: 40, flex: 1}}/>
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;