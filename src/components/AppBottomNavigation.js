import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import MainApp from "./MainApp";

const Tab = createBottomTabNavigator();

const AppBottomNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={MainApp} />
                {/*<Tab.Screen name="Settings" />*/}
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppBottomNavigation;
