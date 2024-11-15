import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProfileHeader = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.usernameText}>hariom_chouhan</Text>
                <View style={styles.contentContainer}>
                    <TouchableOpacity style={{marginRight: 25}}>
                        <Image source={require('../assets/footer/addPost.png')} style={{ height: 24, width: 24}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/icon/Menu.png')} style={{ height: 20, width: 20, tintColor: 'black' }} />
                    </TouchableOpacity>
                </View>
            </View>
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