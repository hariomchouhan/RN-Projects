import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.mainContainer}>
            <View>
                <Image source={require('../assets/Instagram.png')} style={styles.logoHeader} />
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity style={styles.btn}>
                    <Image source={require('../assets/Like.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ position: 'relative' }}>
                        <Image source={require('../assets/Messanger.png')} />
                        <View style={{ position: 'absolute', bottom: 12, left: 13 }}>
                            <Text style={{ backgroundColor: 'red', paddingHorizontal: 5, borderRadius: 10 }}>5</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
    },
    rightContainer: {
        flexDirection: 'row',
    },
    logoHeader: {
        height: 28,
        width: 110,
    },
    btn: {
        marginRight: 15,
    }
})