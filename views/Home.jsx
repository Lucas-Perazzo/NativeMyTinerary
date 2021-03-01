import React from 'react';
import { Button, Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import accountActions from "../redux/actions/accountActions"
import { connect } from "react-redux"

const Home = (props) => {
    if (props.loggedUser) {
        var welcome = <>
            <View>
                <Text style={{ fontSize: 30 }}>{`Welcome! ${props.loggedUser.name} ${props.loggedUser.lastName}`}</Text>
                <Button title="Log Out" color='black' onPress={() => props.logoutUser()} />
            </View>
        </>

    } else {
        var welcome = <>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
                <Button title="Sign In" color='black' onPress={() => props.navigation.navigate("Login")} />
                <Button title="Register" color='black' onPress={() => props.navigation.navigate("Register")} />
            </View>
        </>
    }
    return (
        <>
            <ImageBackground
                source={{ uri: 'https://www.jordanrobins.com.au/wp-content/uploads/2020/10/Hyams-Beach-Sunrise-_-Vertical-1.jpg' }}
                style={styles.view}>
                <ScrollView>
                    <View style={styles.container}>
                        <Image source={require('../assets/myitinerary.png')} style={styles.logo} />
                        {welcome}
                        <View style={styles.slogan}>
                            <Text style={styles.sloganText}>Find your perfect trip, designed by insiders who know and love their cities.</Text>
                        </View>
                        <View style={styles.slogan}>
                            <Text style={styles.sloganText}>Discover cities by clicking here below!.</Text>
                        </View>
                        <Button title="Go to Cities" onPress={() => props.navigation.navigate("Cities")} style={styles.texto} color='black' />
                    </View>
                </ScrollView>
            </ImageBackground>

        </>
    )
};

const styles = StyleSheet.create({
    logo: {
        marginTop: 15
    },
    sloganText: {
        fontSize: 40,
        color: 'bisque'
    },
    slogan: {
        backgroundColor: 'hsla(61, 47%, 0%, 0.53)',
        width: '90%',
        padding: 30,
        borderRadius: 15,
        margin: 20
    },
    view: {
        flex: 1
    },
    title1: {
        fontSize: 15,
        color: 'bisque',
        backgroundColor: 'black',
        marginTop: 20,
        padding: 10,
        borderRadius: 8
    },
    banner: {
        width: '100%',
        height: '100%',
    },
    bannerImg: {
        width: '100%',
        height: '100%'
    },
    header: {
        backgroundColor: 'black',
        height: '10%',
        padding: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    textoBlanco: {
        color: 'white',
        fontSize: 15,
    }
})

const mapStateToProps = state => {
    return {
        loggedUser: state.account.loggedUser
    }
}
const mapDispatchToProps = {
    logoutUser: accountActions.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
