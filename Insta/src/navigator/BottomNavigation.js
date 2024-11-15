import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../screen/dashboard/Dashboard'
import Search from '../screen/dashboard/Search'
import AddPost from '../screen/dashboard/AddPost'
import Reel from '../screen/dashboard/Reel'
import UserProfile from '../screen/dashboard/UserProfile'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
            <Tab.Screen name="Home" component={Dashboard} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={
                            focused ?
                                require('../assets/footer/sHomeButton.png')
                                : require('../assets/footer/homeButton.png')}
                    />
                )
            }} />
            <Tab.Screen name="Search" component={Search} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={
                            focused ?
                                require('../assets/footer/sSearch.png')
                                : require('../assets/footer/search.png')}
                    />
                )
            }} />
            <Tab.Screen name="AddPost" component={AddPost} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={
                            focused ?
                                require('../assets/footer/sAddPost.png')
                                : require('../assets/footer/addPost.png')}
                    />
                )
            }} />
            <Tab.Screen name="Reels" component={Reel} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={
                            focused ?
                                require('../assets/footer/sReel.png')
                                : require('../assets/footer/reel.png')}
                    />
                )
            }} />
            <Tab.Screen name="UserProfile" component={UserProfile} options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={
                            focused ?
                                require('../assets/footer/sUser.png')
                                : require('../assets/footer/user.png')}
                    />
                )
            }} />
        </Tab.Navigator>
    )
}

export default BottomNavigation