import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfilePost = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.wrapper}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 20,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default ProfilePost