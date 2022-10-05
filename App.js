import React, { useState } from 'react';
import {Alert, Pressable, ScrollView, Switch, Text, TextInput, View} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import RadioForm from 'react-native-simple-radio-button';
import StyleSheet from './Styles';

export default function App () {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [hours, setHours] = useState(0)
  const [result, setResult] = useState(0)
  const [gender, setGender] = useState('male')
  const [color, setColor] = useState("#bb92f0")

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ]

  function calculate () {
    if (weight == 0) {
      Alert.alert(
        'Error',
        'Weight input missing',
        [
          {
            text: 'ok'
          }
        ]
      )
      setResult(0)
    } else {
      const litres = bottles * 0.33
      const grams = litres * 8 * 4.5
      const burning = weight / 10
      const gramsLeft = grams - burning * hours
      const resultMale = gramsLeft / (weight * 0.7)
      const resultFemale = gramsLeft / (weight * 0.6)

      if (gender === 'male') {
        if (resultMale < 0) {
          setResult(0)
        } else {
          if (resultMale >= 3) {
            setColor("#c90c19")
            setResult(resultMale)
          } else if (resultMale >= 2) {
            setColor("#f5d731")
            setResult(resultMale)
          } else {
            setColor("#90e640")
            setResult(resultMale)
          }
        }
      } else {
        if (resultFemale < 0) {
          setResult(0)
        } else {
          if (resultMale >= 3) {
            setColor("#c90c19")
            setResult(resultFemale)
          } else if (resultMale >= 2) {
            setColor("#f5d731")
            setResult(resultFemale)
          } else {
            setColor("#90e640")
            setResult(resultFemale)
          }
        }
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={isEnabled ? StyleSheet.containerDark : StyleSheet.containerLight}>
      <Switch
        thumbColor={isEnabled ? "#fff" : "#bb92f0"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={isEnabled ? StyleSheet.headingDark : StyleSheet.headingLight}>Alcometer</Text>

      <Text style={isEnabled ? StyleSheet.textDark : StyleSheet.textLight}>Weight</Text>
      <TextInput
        style={StyleSheet.textInput}
        value={weight}
        onChangeText={text => setWeight(text)}
        keyboardType='decimal-pad'
      />

      <Text style={isEnabled ? StyleSheet.textDark : StyleSheet.textLight}>Bottles</Text>
      <NumericInput onChange={bottles => setBottles(bottles)} minValue={0} rounded textColor={isEnabled ? "white" : "black"} leftButtonBackgroundColor={"#a972f2"} rightButtonBackgroundColor={"#a972f2"} />

      <Text style={isEnabled ? StyleSheet.textDark : StyleSheet.textLight}>Hours</Text>
      <NumericInput onChange={hours => setHours(hours)} minValue={0} rounded textColor={isEnabled ? "white" : "black"} style={StyleSheet.test} leftButtonBackgroundColor={"#a972f2"} rightButtonBackgroundColor={"#a972f2"} />

      <RadioForm
        style={StyleSheet.padding}
        buttonColor={"#bb92f0"}
        labelStyle={isEnabled ? StyleSheet.labelDark : StyleSheet.labelLight}
        selectedButtonColor={"#bb92f0"}
        buttonsize={10}
        radio_props={genders}
        initial={0}
        onPress={value => {
          setGender(value)
        }}
      />

      <Text style={[StyleSheet.headingLight,{color: color}]}>{result.toFixed(2)}</Text>
      <Pressable style={StyleSheet.button} onPress={calculate}>
        <Text style={StyleSheet.buttonText}>Calculate</Text>
      </Pressable>
      
      
    </ScrollView>
  )
}
