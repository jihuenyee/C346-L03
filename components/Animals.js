import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; // Fixed capitalization for useState
import {StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, Image} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { ToastAndroid } from 'react-native';

const styles = StyleSheet.create({
    qnContainer: {
        backgroundColor: '#ECBAB0',
        padding: 10,
    },
    image: {
        width: '100%',
        height: 400,
        borderRadius: 5,
    },
    qn: {
        fontSize: 18,
        textAlign: 'center',
        padding: 10,
    }
});

const Animals = ({qn, pic}) => {
    return (
        <View style={styles.qnContainer}>
            <Image source={pic} style={styles.image} />
            <Text style={styles.qn}>{qn}</Text>
        </View>
    )
}

export default Animals;
