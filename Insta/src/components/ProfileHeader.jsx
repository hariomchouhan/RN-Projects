import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ProfileHeader = () => {
    const [open, setOpen] = useState(false)
    const handleModal = () => {
        setOpen(!open);
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.usernameText}>hariom_chouhan</Text>
                <View style={styles.contentContainer}>
                    <TouchableOpacity style={{ marginRight: 25 }}>
                        <Image source={require('../assets/footer/addPost.png')} style={{ height: 24, width: 24 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleModal}>
                        <Image source={require('../assets/icon/Menu.png')} style={{ height: 20, width: 20, tintColor: 'black' }} />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={open}
                onRequestClose={() => {
                    setOpen(!open)
                }}
            >
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <View style={{backgroundColor: '#ffffff',
              height: 580,
              borderTopEndRadius: 25,
              borderTopStartRadius: 25,}}>
                        <TouchableOpacity onPress={handleModal}>
                        <Image
                style={{alignSelf: 'center'}}
                source={require('../assets/icon/Modalclose.png')}
              />
              <View style={{paddingHorizontal: 20}}>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Setting and privacy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Your activity
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Archive
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>Saved</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    SuperVision
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Meta Varified
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Close Friends
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Favourites
                  </Text>
                </TouchableOpacity>
              </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ProfileHeader

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 15,
        paddingTop: 10,
        height: 55,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    usernameText: {
        fontSize: 24,
        fontWeight: 500,
        color: 'black',
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icons: {
        height: 24,
        width: 24,
    },
})