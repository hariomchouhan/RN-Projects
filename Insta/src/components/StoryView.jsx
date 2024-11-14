// import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native'

// const StoryView = ({ route }) => {
//     const selectedItem = route.params.item
//     const navigation = useNavigation();

//     const screenHeight = Dimensions.get('window').height
//     const screenWidth = Dimensions.get('window').width
//     return (
//         <View style={styles.boxContainer}>
//             <View style={styles.topContainer}>
//                 <Image source={selectedItem.profile} style={styles.iconImage} />
//                 <Text style={styles.storyName}>{selectedItem.name}</Text>
//                 <Text style={styles.storyTime}>{selectedItem.story.time} hr</Text>
//             </View>
//             <View style={styles.mainContainer}>
//                 <Image source={selectedItem.story.image} style={{height: screenHeight - 100,
//         width: screenWidth,
//         borderBottomRightRadius: 15,
//         borderBottomLeftRadius: 15}} />
//             </View>
//         </View>
//     )
// }

// export default StoryView

// const styles = StyleSheet.create({
//     boxContainer: {
//         flex: 1
//     },
//     topContainer: {
//         flexDirection: 'row',
//         paddingTop: 12,
//         paddingLeft: 12,
//         alignItems: 'center',
//         position: 'relative',
//         zIndex: 1,
//     },
//     iconImage: {
//         height: 40,
//         width: 40,
//         borderRadius: 20,
//         marginRight: 10
//     },
//     storyName: {
//         fontSize: 18,
//         fontWeight: 700,
//         color: 'white'
//     },
//     storyTime: {
//         fontSize: 18,
//         fontWeight: 600,
//         marginLeft: 10,
//         color: 'white'
//     },
//     mainContainer: {
//         position: 'absolute',
//     },
//     mainImage: {
//         height: screenHeight - 100,
//         width: screenWidth,
//         borderBottomRightRadius: 15,
//         borderBottomLeftRadius: 15
//     }
// })




import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const StoryView = ({ route }) => {
  const selectedItem = route.params.item;
  const navigation = useNavigation();

  // Get screen dimensions
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    setTimeout(() => {
      navigation.goBack();
    }, 5000)
  }, [])

  return (
    <View style={styles.boxContainer}>
      {/* Top container with profile picture and details */}
      <View style={styles.topContainer}>
        <View style={styles.topLeftContainer}>
          <Image source={selectedItem.profile} style={styles.iconImage} />
          <Text style={styles.storyName}>{selectedItem.name}</Text>
          <Text style={styles.storyTime}>{selectedItem.story.time} hr</Text>
        </View>
        <TouchableOpacity style={styles.topRightContainer} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/Cross.png')} style={{ height: 20, width: 20, tintColor: '#ffffff' }} />
        </TouchableOpacity>
      </View>

      {/* Display the main story image */}
      <View style={styles.mainContainer}>
        <Image
          source={selectedItem.story.image}
          style={{
            height: screenHeight - 150,
            width: screenWidth,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
          }}
        />
        <View style={styles.bottomContainer}>
          <TextInput
            style={styles.inputBox}
            placeholder='Message'
            placeholderTextColor={'white'}
          />
          <TouchableOpacity>
            <Image
              style={{ tintColor: 'white', marginRight: 10 }}
              source={require('../assets/Messanger.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StoryView;

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  topContainer: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    zIndex: 1,
    justifyContent: 'space-between'
  },
  topLeftContainer: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingLeft: 12,
    alignItems: 'center',
    zIndex: 1,
  },
  topRightContainer: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingLeft: 12,
    alignItems: 'center',
    zIndex: 1,
  },
  iconImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  storyName: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  storyTime: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    color: 'white',
  },
  mainContainer: {
    position: 'absolute',
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'white',
    width: 330,
    paddingHorizontal: 15,
    color: 'white',
    borderRadius: 30
  },
});
