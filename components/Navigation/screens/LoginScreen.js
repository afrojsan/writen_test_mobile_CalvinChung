import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';


const LoginScreen = () => {

    const [text, onChangeText] = React.useState("");
    const [password, onChangePassword] = React.useState("");
      
    return(
        <View style={style.LoginMain}>
           <Image 
                style={style.LoginLogo} 
                source={require('../../../src/img/welcome-page-Logo.jpeg')} 
           />
           <Text style={style.account} >
                Account:
           </Text>
           <TextInput 
                style={style.input}
                onChangeText={onChangeText}
                value={text} 
            />
            <Text style={style.password} >
                Password:
           </Text>
           <TextInput
                style={style.input} 
                onChangeText={onChangePassword}
                secureTextEntry={true}
                value={password} 
            />
           <Button title="Login" />
        </View>
    )
}

const style = StyleSheet.create({
    LoginMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    LoginLogo: {
        width: 250,
        height: 250,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
    },
    account: {
        paddingLeft: 20,
    },
    password: {
        paddingLeft: 20,
    },
});


export default LoginScreen;