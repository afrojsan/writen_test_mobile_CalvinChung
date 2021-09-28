import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { TapGestureHandler } from 'react-native-gesture-handler';

import '../i18n/i18n'

const LoginName = 'Home';
const WelcomeName = 'Welcome';

const Tab = createBottomTabNavigator();

const Main = () => {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={LoginName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if(rn === LoginName){
                            iconName = focused ? 'ios-log-in' : 'ios-log-in-outline';
                        }else if(rn === WelcomeName){
                            iconName = focused ? 'home' : 'home-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>
                    },
                })} >
                
                <Tab.Screen name={LoginName} component={LoginScreen} />
                <Tab.Screen name={WelcomeName} component={WelcomeScreen} />

            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default Main;