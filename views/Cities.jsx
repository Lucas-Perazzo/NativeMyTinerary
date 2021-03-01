import React from 'react';
import { Button, Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';
import {useEffect, useState} from 'react'

const Cities = (props) => {
    const [cities, setCities] = useState ([])

    useEffect(() => {
        fetchCities()
    }, [])

    const fetchCities = () => {
        fetch('https://mytineraryback-end.herokuapp.com/api/cities')
        .then(response => response.json())
        .then(data => setCities(data.response))
    }
    return (
    <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1535940762834-e5334814e85f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80' }}
        style={styles.view}>
        <ScrollView> 
            <View style={styles.container}>
                <Text style={styles.textoNegro}>Cities</Text>
                {cities.length > 0 && cities.map(city => {
                    return (
                        <TouchableOpacity onPress={() => props.navigation.navigate("Itineraries", {city:city})} key={city._id}>
                            <ImageBackground    imageStyle={{borderRadius: 30}}
                                                source={{uri: city.citySrc}}
                                                style={styles.card}>
                                <Text style={styles.texto}>{city.cityTitle}</Text>
                            </ImageBackground> 
                        </TouchableOpacity> 
                    )
                })}
            </View>
            <Button title="Go Back To Home" onPress={() => props.navigation.navigate("Home")}  color='black'/>
        </ScrollView>
    </ImageBackground>
)};

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'hsla(194, 47%, 42%, 0.53)',
        width: '100%',
        textAlign: 'center'
    },
    card: {
        width: 390,
        height: 175,
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textoNegro: {
        color: 'black',
        fontSize: 50,
        marginTop: 30
    },
    view: {
        flex: 1
    },
})

export default Cities;