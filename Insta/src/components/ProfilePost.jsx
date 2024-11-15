import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { typeData, UserData } from '../utils/UserData'

const ProfilePost = () => {
    const screenWidth = Dimensions.get('window').width
    const [selected, setSelected] = useState(1)

    const renderItem = item => {
        return(
            <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={item.item.post.image} style={{height: screenWidth/3, width: screenWidth/3, borderWidth: 0.2}} />
            </View>
        )
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.wrapper}>
                {typeData?.map((item) => (
                    <View key={item.id} style={{ paddingBottom: 15, width: screenWidth / 2, borderBottomWidth: selected === item.id ? 1 : 0 }}>
                        <TouchableOpacity onPress={() => setSelected(item.id)}>
                            <Image source={item.image} style={{ tintColor: 'black', alignSelf: 'center' }} />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            {selected === 1 &&
            <FlatList
            data={UserData}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            />
            }
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