import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AppColor } from '../utils/AppColors'

const CustomButton = ({buttonTitle, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={{width: 350, backgroundColor: AppColor.BUTTON, borderRadius: 5}}>
            <Text style={{color: 'white', paddingVertical: 12, fontSize: 18, textAlign: 'center'}}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({})