import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputBox from './src/components/InputBox'
import CustomButton from './src/components/CustomButton'

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <InputBox placeholder={'Username'} />
      <CustomButton buttonTitle={'Login'} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})