import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, ImageBackground, ToastAndroid, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import accountActions from '../redux/actions/accountActions'
import { connect } from 'react-redux'

const Register = (props) => {
    const [newUser, setNewUser] = useState({})
    const [error, setError] = useState([])

    const inputValue = (name, value) => {
        setNewUser({
            ...newUser,
            [name]: value
        })
    }

    const validateAcc = async e => {
        e.preventDefault()
        if (newUser.name === '' || newUser.lastName === '' || newUser.img === '' || newUser.userName === '' || newUser.password === ''){
            console.log('All Fields are Required!');
            return false
        }
        setError([])
        const response = await props.newAccount(newUser)
        if (response && !response.success) {
            setError(response.error)
        } else {
            Alert.alert("New Account Created!");
            props.navigation.navigate("Home")
        }
    }

    const countries = ["Australia", "Argentina", "Brasil", "Bélgica", "Camerún", "China", "Dinamarca", "EE.UU", "Francia", "Groenlandia", "Russia", "Italia", "Germany", "Jamaica"]

    return (
    <View style={styles.container}>
        <ImageBackground 
            source={{uri: 'https://www.jordanrobins.com.au/wp-content/uploads/2020/10/Hyams-Beach-Sunrise-_-Vertical-1.jpg'}}
            style={styles.imageBackground}>
            <Text style={styles.textoBlanco}>Register</Text>
            <TextInput
                placeholder='Name'
                style={styles.input}
                onChangeText={value => (inputValue('name', value))}/>
            <TextInput
                placeholder='Last Name'
                style={styles.input}
                onChangeText={value => (inputValue('lastName', value))}/>
            <TextInput
                placeholder='UserName'
                style={styles.input}
                onChangeText={value => (inputValue('userName', value))}/>
            <TextInput
                placeholder='Password'
                style={styles.input}
                onChangeText={value => (inputValue('password', value))}/>
            <TextInput
                placeholder='URL Image'
                style={styles.input}
                onChangeText={value => (inputValue('img', value))}/>
            <TextInput
                placeholder='Country'
                style={styles.input}
                onChangeText={value => (inputValue('country', value))}/>  
            <Button 
                title="Register" 
                onPress={validateAcc}
                color={'black'}/>
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
    newAccount: accountActions.newAccount
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Register)
