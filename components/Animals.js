import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; // Fixed capitalization for useState
import {StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, Image} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { ToastAndroid } from 'react-native';

const Animals = ({qn, pic}) => {
    return (
        <View>
            <Image source={pic} style={{width:300, height:300}}/>
            <Text>{qn}</Text>
        </View>
    )
}

export default Animals;
