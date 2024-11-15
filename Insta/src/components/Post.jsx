import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { UserData } from '../utils/UserData'

const Post = () => {
    const screenWidth = Dimensions.get('window').width
    return (
        <View style={styles.mainContainer}>
            {
                UserData?.map((item) => (
                    <View key={item.id} style={styles.innerMainContainer}>
                        <View style={styles.profileContainer}>
                            <Image style={styles.profileImage} source={item.profile} />
                            <Text style={styles.personName}>{item.name}</Text>
                        </View>
                        <View>
                            <Image source={item.post.image} style={[styles.mainImage, {width: screenWidth}]} />
                        </View>
                        <View style={styles.detailContainer}>
                            <TouchableOpacity>
                                <Image style={[styles.icons, {marginLeft: 0}]} source={require('../assets/Like.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={[styles.icons, {width: 24}]} source={require('../assets/Comment.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.icons} source={require('../assets/Messanger.png')} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.likeCount}>{item.post.like} likes</Text>
                        <View style={styles.captionContainer}>
                            <Text style={styles.captionPersonName}>{item.name}{' '}</Text>
                            <Text style={styles.captionText}>{item.post.caption}</Text>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 2,
    },
    innerMainContainer: {
        marginTop: 10,
    },
    profileImage: {
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 8,
    },
    personName: {
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 600,
        color: 'black',
    },
    mainImage: {
        height: 400,
    },
    icons: {
        height: 24,
        width: 28,
        marginLeft: 15
    },
    detailContainer: {
        paddingHorizontal: 13,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    likeCount: {
        marginLeft: 13,
        marginTop: 10,
        fontSize: 16,
        fontWeight: 600,
        color: 'black',
    },
    captionContainer: {
        flexDirection: 'row',
        paddingHorizontal: 13,
        alignItems: 'center',
    },
    captionPersonName: {
        color: 'black',
        fontSize: 16,
        fontWeight: 500,
    },
    captionText: {
        color: 'black',
    }
})