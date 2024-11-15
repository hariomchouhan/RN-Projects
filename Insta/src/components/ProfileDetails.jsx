import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { UserData } from '../utils/UserData'

const ProfileDetails = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/Hariom.png')} style={styles.profileImage} />
                <View style={styles.accountNumberCountContainer}>
                    <Text style={styles.numberText}>{UserData.length}</Text>
                    <Text style={styles.numberTextLabel}>Posts</Text>
                </View>
                <View style={styles.accountNumberCountContainer}>
                    <Text style={styles.numberText}>1.2 M</Text>
                    <Text style={styles.numberTextLabel}>Followers</Text>
                </View>
                <View style={styles.accountNumberCountContainer}>
                    <Text style={styles.numberText}>1</Text>
                    <Text style={styles.numberTextLabel}>Following</Text>
                </View>
            </View>
            <Text style={styles.username}>Hariom Chouhan</Text>
            <Text style={styles.descText}>React Native</Text>
            <Text style={styles.descText}>Insta Clone</Text>
            <Text style={styles.translationText}>See Translation</Text>
            <View style={styles.btnContainer}>
                <TouchableOpacity>
                    <Text style={styles.btnText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.btnText}>Share Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style= {{padding: 2, borderRadius: 5, backgroundColor: '#E1E1E1', flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{color: 'black', height: 18, width: 18, }} source={require('../assets/icon/addPeople.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 15,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profileImage: {
        height: 80,
        width: 80,
        borderRadius: 50,
    },
    accountNumberCountContainer: {
        width: 75,
        alignItems: 'center',
    },
    numberText: {
        fontSize: 24,
        fontWeight: 400,
        color: 'black',
    },
    numberTextLabel: {
        fontSize: 16,
        color: 'black',
    },
    username: {
        fontSize: 18,
        color: 'black',
        fontWeight: 500,
        marginTop: 10,
    },
    descText: {
        color: 'black',
    },
    translationText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 500,
    },
    btnContainer: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    btnText: {
        backgroundColor: '#E1E1E1',
        width: 150,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        textAlign: 'center',
        color: 'black',
    }
})

export default ProfileDetails