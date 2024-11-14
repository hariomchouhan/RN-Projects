import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { UserData } from '../utils/UserData'
import { useNavigation } from '@react-navigation/native'

const Stories = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <FlatList
        horizontal
        data={UserData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.dataContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Story', {item})}>
              <View style={styles.imageContainer}>
                <Image source={item.story.image} style={styles.image} />
              </View>
            </TouchableOpacity>
            <Text style={styles.personName} numberOfLines={1}>{item.name}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      />
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  dataContainer: {
    marginLeft: 10,
  },
  imageContainer: {
    borderWidth: 3,
    borderRadius: 40,
    padding: 2,
    borderColor: '#f3640f'
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  personName: {
    textAlign: 'center',
    fontSize: 10
  }
})





//  {/* Old tricks */}
//       {/* Add a ScrollView with horizontal scrolling
//       // <ScrollView
//       //   horizontal
//       //   showsHorizontalScrollIndicator={false}
//       //   contentContainerStyle={styles.scrollContainer}
//       // >
//       // {UserData?.map((item) => (
//       //   <View style={styles.dataContainer}>
//       //     <TouchableOpacity>
//       //       <View style={styles.imageContainer}>
//       //         <Image source={item.story.image} style={styles.image} />
//       //       </View>
//       //     </TouchableOpacity>
//       //     <Text style={styles.personName}>{item.name}</Text>
//       //   </View>
//       // ))}
//       // </ScrollView> */}