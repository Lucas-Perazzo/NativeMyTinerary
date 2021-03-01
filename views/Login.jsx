import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, ImageBackground, ToastAndroid, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import accountActions from '../redux/actions/accountActions'
import { connect } from 'react-redux'

const Login = (props) => {
    const [signUser, setSignUser] = useState({})
    const [error, setError] = useState([])

    const inputValue = (name, value) => {
        setSignUser({
            ...signUser,
            [name]: value
        })
    }
    
    const validateAcc = async e => {
        e.preventDefault()
        if ( signUser.userName === '' || signUser.password === '' ){
            console.log("All Fields are Required!")
            return false
        }
        setError([])
        const response = await props.signUser(signUser)
        if (response && !response.success) {
            setError([response.msg])
        } else {
            ToastAndroid.show('Sign In success, Welcome!', ToastAndroid.LONG)
            props.navigation.navigate("Home")
        }

    }
    console.log(signUser)
    console.log(props.loggedUser)
    return (
    <View style={styles.container}>
        <ImageBackground 
            source={{uri: 'https://www.jordanrobins.com.au/wp-content/uploads/2020/10/Hyams-Beach-Sunrise-_-Vertical-1.jpg'}}
            style={styles.imageBackground}>
            <Text style={styles.textoBlanco}>Login</Text>
            <TextInput
                placeholder='UserName'
                style={styles.input}
                onChangeText={value => (inputValue('userName', value))}/>
            <TextInput
                placeholder='Password'
                style={styles.input}
                onChangeText={value => (inputValue('password', value))} secureTextEntry={true}/>
            <Button 
                title="Login" 
                onPress={validateAcc}
                color={'black'}
                />
        </ImageBackground>
    </View>
)};

const styles = StyleSheet.create({
    imageBackground: {
        flex:1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
    },
    textoBlanco: {
        color: 'black',
        fontSize: 50,
        marginBottom: 50

    },
    input: {
        borderWidth: 1,
        padding: 2,
        backgroundColor: 'hsla(194, 47%, 42%, 0.33)',
        color: 'black',
        borderRadius: 8,
        marginBottom: 20,
        width: '70%',
        height: '8%',
        textAlign: 'center'
    },
}) 

const mapStatetoProps = state => {
    return {
        loggedUser: state.account.loggedUser
    }
}
const mapDispatchtoProps = {
    signUser: accountActions.login
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Login)


