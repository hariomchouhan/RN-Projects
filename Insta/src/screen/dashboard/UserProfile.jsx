import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileHeader from '../../components/ProfileHeader'
import ProfileDetails from '../../components/ProfileDetails'
import ProfilePost from '../../components/ProfilePost'

const UserProfile = () => {
  return (
    <View style={styles.mainContainer}>
      <ProfileHeader />
      <ProfileDetails />
      <ProfilePost />
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
})