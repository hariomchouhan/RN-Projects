import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputBox from './src/components/InputBox'
import CustomButton from './src/components/CustomButton'
import Login from './src/screen/auth/Login'
import Signup from './src/screen/auth/Signup'

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Login /> */}
      <Signup />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})