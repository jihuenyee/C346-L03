import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; // Fixed capitalization for useState
import {StyleSheet, Text, Button, Alert, ScrollView} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Animals from './components/Animals.js';

const styles = StyleSheet.create({
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        backgroundColor: 'pink',
        padding: 10,
    },
});

const App = () => {

    const [answers, setAnswers] = useState(["", "", ""]);
    const [modalVisible, setModalVisible] = useState(false);

    const correctAnswers = ["Apple Jack", "Pinkie Pie", "Rainbow Dash", "Fluttershy", "Rarity", "Twilight Sparkle", "Siblings"];

    const handleAnswerChange = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
    };

    const getFeedbackMessage = (score) => {
        if (score === 7) {
            return "Yay! You got all correct! You're a my little pony pro!";
        } else if (5 <= score && score <= 6) {
            return "Oh no! Almost there! Not bad though!";
        } else if (2 <= score && score <= 4) {
            return "Not there yet... Its okay! Try again!";
        } else {
            return "Dont lose hope! Remember! Friendship is magic!";
        }
    };

    const checkAnswers = () => {
        let score = 0;
        answers.forEach((answer, index) => {
            if (answer === correctAnswers[index]) score++;
        });

        const feedback = getFeedbackMessage(score);
        Alert.alert(`Final score: ${score}/7`, `${feedback}`);
    };
  return (
      <ScrollView>
          <StatusBar hidden={true}/>
          <Text style={styles.header}>Welcome to Ji Huen's My Little Pony Quiz!</Text>
          <Animals pic={require("./img/apple jack.jpg")} qn={"Which pony is this?"}/>
          <RNPickerSelect
              onValueChange={(value) => handleAnswerChange(0, value)}
              items={[
                  { label: 'Pinkie Pie', value: 'Pinkie Pie' },
                  { label: 'Rarity', value: 'Rarity' },
                  { label: 'Apple Jack', value: 'Apple Jack' },
                  { label: 'Twilight Sparkle', value: 'Twilight Sparkle' },
                  { label: 'Rainbow Dash', value: 'Rainbow Dash' },
                  { label: 'Fluttershy', value: 'Fluttershy' }
              ]}
              value={answers[0]}
          />
          <Animals pic={require("./img/pinkie pie.jpg")} qn={"Which pony is this?"}/>
          <RNPickerSelect
              onValueChange={(value) => handleAnswerChange(1, value)}
              items={[
                  { label: 'Pinkie Pie', value: 'Pinkie Pie' },
                  { label: 'Rarity', value: 'Rarity' },
                  { label: 'Apple Jack', value: 'Apple Jack' },
                  { label: 'Twilight Sparkle', value: 'Twilight Sparkle' },
                  { label: 'Rainbow Dash', value: 'Rainbow Dash' },
                  { label: 'Fluttershy', value: 'Fluttershy' }
              ]}
              value={answers[1]}
          />
          <Animals pic={require("./img/rainbow dash.jpg")} qn={"Which pony is this?"}/>
          <RNPickerSelect
              onValueChange={(value) => handleAnswerChange(2, value)}
              items={[
                  { label: 'Pinkie Pie', value: 'Pinkie Pie' },
                  { label: 'Rarity', value: 'Rarity' },
                  { label: 'Apple Jack', value: 'Apple Jack' },
                  { label: 'Twilight Sparkle', value: 'Twilight Sparkle' },
                  { label: 'Rainbow Dash', value: 'Rainbow Dash' },
                  { label: 'Fluttershy', value: 'Fluttershy' }
              ]}
              value={answers[2]}
          />
          <Animals pic={require("./img/fluttershy.jpg")} qn={"Which pony is this?"}/>
          <RNPickerSelect
              onValueChange={(value) => handleAnswerChange(3, value)}
              items={[
                  { label: 'Pinkie Pie', value: 'Pinkie Pie' },
                  { label: 'Rarity', value: 'Rarity' },
                  { label: 'Apple Jack', value: 'Apple Jack' },
                  { label: 'Twilight Sparkle', value: 'Twilight Sparkle' },
                  { label: 'Rainbow Dash', value: 'Rainbow Dash' },
                  { label: 'Fluttershy', value: 'Fluttershy' }
              ]}
              value={answers[3]}
          />
          <Animals pic={require("./img/rarity.jpg")} qn={"Which pony is this?"}/>
          <RNPickerSelect
              onValueChange={(value) => handleAnswerChange(4, value)}
              items={[
                  { label: 'Pinkie Pie', value: 'Pinkie Pie' },
                  { label: 'Rarity', value: 'Rarity' },
                  { label: 'Apple Jack', value: 'Apple Jack' },
                  { label: 'Twilight Sparkle', value: 'Twilight Sparkle' },
                  { label: 'Rainbow Dash', value: 'Rainbow Dash' },
                  { label: 'Fluttershy', value: 'Fluttershy' }
              ]}
              value={answers[4]}
          />
          <Animals pic={require("./img/twilight sparkle.jpg")} qn={"Which pony is this?"}/>
          <RNPickerSelect
              onValueChange={(value) => handleAnswerChange(5, value)}
              items={[
                  { label: 'Pinkie Pie', value: 'Pinkie Pie' },
                  { label: 'Rarity', value: 'Rarity' },
                  { label: 'Apple Jack', value: 'Apple Jack' },
                  { label: 'Twilight Sparkle', value: 'Twilight Sparkle' },
                  { label: 'Rainbow Dash', value: 'Rainbow Dash' },
                  { label: 'Fluttershy', value: 'Fluttershy' }
              ]}
              value={answers[5]}
          />
          <Animals pic={require("./img/Luna and celestia.jpg")} qn={"What is their relationship?"}/>
          <RNPickerSelect
              onValueChange={(value) => handleAnswerChange(6, value)}
              items={[
                  { label: 'Lovers', value: 'Lovers' },
                  { label: 'Siblings', value: 'Siblings' },
                  { label: 'Enemies', value: 'Enemies' },
                  { label: 'Parent Child', value: 'Parent Child' }
              ]}
              value={answers[6]}
          />

          <Button title="Submit Answers" onPress={checkAnswers} />

      </ScrollView>
  )
}

export default App;
