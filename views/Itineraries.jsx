import React from 'react';
import { Button, Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';
import {useEffect, useState} from 'react'
import Itinerary from '../views/Itinerary'

const Itineraries = (props) => {
    const [itineraries, setItineraries] = useState([])
    const cityImg = props.route.params.city.citySrc
    const cityTitle = props.route.params.city.cityTitle
    const id = props.route.params.city._id

    useEffect(() => {
        fetchItineraries()
    }, [])

    const fetchItineraries = () => {
        fetch(`https://mytineraryback-end.herokuapp.com/api/itineraries/${id}`)
        .then(response => response.json())
        .then(data => setItineraries(data.response))
    } 
    
    return (
    <ImageBackground
        source={{ uri: 'https://www.solofondos.com/wp-content/uploads/2016/08/Wallpaper-para-Android-verticales.jpg' }}
        style={styles.view}>
        <ScrollView>
            <ImageBackground source={{uri: cityImg}} style={styles.banner}>
            <Text style={styles.cityName}>{cityTitle}</Text>
            </ImageBackground>
            {itineraries.map(itinerary => {
                return (
                    <Itinerary itinerary={itinerary} key={itinerary._id}/>
                )
            })}
        </ScrollView>
    </ImageBackground>
)};

const styles = StyleSheet.create({
    cityName: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center',
        backgroundColor: 'hsla(194, 47%, 42%, 0.53)',
        width: '100%'
    },
    banner: {
        width: '100%',
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50
    },
    card: {
        width: 350,
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
        marginTop: 30,
        textAlign: 'center'
    },
    view: {
        flex: 1
    },
})

export default Itineraries;