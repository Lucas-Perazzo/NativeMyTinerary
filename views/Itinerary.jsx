import React from 'react';
import { Button, Text, View, StyleSheet, ImageBackground, TouchableOpacity, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Itinerary = ({itinerary}) => {
    return (
        <View style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: 15, marginBottom: 30}}>
            <View style={styles.topView}>
                <Image style={styles.userImage} source={{ uri: itinerary.userImg }}></Image>
                <View style={styles.contItinerary}>
                    <Text style={styles.text}>{itinerary.title}</Text>
                    <View style={styles.contIcons}>
                        <View style={styles.iconValue}>
                            <Icon name="heart" size={20} color="red" />
                            <Text style={styles.value}>{itinerary.likes.length}</Text>
                        </View>
                        <View style={styles.iconValue}>
                            <Icon name="clock-o" size={20} color="blue" />
                            <Text style={styles.value}>{itinerary.hours}</Text>
                        </View>
                        <View style={styles.iconValue}>
                            <Icon name="money" size={20} color="green" />
                            <Text style={styles.value}>{itinerary.price}</Text>
                        </View>
                    </View>
                    <View style={styles.contHashtags}>
                        {itinerary.hashtag.map((hashtag, i) => <Text key={`hashtag${i}`} style={{color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: 2, borderRadius: 15}}>{hashtag}</Text>)}
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    topView: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 10,
      marginRight: 10,
      marginBottom: 10,
      marginLeft: 10,
    },
    userImage: {
      width: (Dimensions.get('window').width) * .3,
      height: (Dimensions.get('window').width) * .3,
      borderRadius: 100,
      resizeMode: 'cover',
      marginLeft: 10,
    },
    contItinerary: {
      width: (Dimensions.get('window').width) * .65,
    },
    text: {
      marginBottom: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      fontSize: 18,
      textAlign: 'center',
      borderRadius: 10,
      margin: 5,
      padding: 5,
      fontWeight: 'bold',
      color: 'white'
    },
    contIcons: {
      width: (Dimensions.get('window').width) * .7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    iconValue: {
      flexDirection: 'row',
      marginRight: 10,
      marginBottom: 5
    },
    value: {
      marginLeft: 4,
      fontWeight: 'bold',
      color: 'white'
    },
    contHashtags: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  })

export default Itinerary