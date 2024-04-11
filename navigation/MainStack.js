import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Notas from "../screens/Notas";
import Tareas from "../screens/Tareas";
import Login from "../screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";  //esta es parte 2
import CreateTask from "../screens/CreateTask";
import { useState } from "react";


const HomeStack = createNativeStackNavigator();

function BasicStack() {

    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };
    return (
        <HomeStack.Navigator
            initialRouteName="MY FEED"
        >
            <HomeStack.Screen
                name="MY FEED"
                component={Home}
                options={{
                    headerShown: false,
                    headerBackTitleVisible: false,
                }}
            />
            <HomeStack.Screen
                name="Notas"
                component={Notas}
                options={{
                    headerBackTitleVisible: false,
                }}
            />
            <HomeStack.Screen
                name="Tareas"
                component={Tareas}

                options={{
                    headerBackTitleVisible: false,
                }}
            />

            <HomeStack.Screen
                name="CreateNote"
                component={CreateTask}

                options={{
                    headerBackTitleVisible: false,
                }}
            />
        </HomeStack.Navigator>
    );
}
//parte 1
const Tab = createBottomTabNavigator();

function MainStack() {


    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Profile' || route.name === 'Estadisticas' || route.name === 'Plantas' || route.name === 'Login' || route.name === 'User') {
                        iconName = 'user';
                    } else if (route.name === 'Home') {
                        iconName = 'home';
                    }

                    return <Entypo name={iconName} size={focused ? 35 : 20} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#50F205',
                inactiveTintColor: '#10454F',
                style: {
                    backgroundColor: '#A3AB78',
                    borderTopWidth: 0, // Remove top border on Android
                    elevation: 0, // Remove shadow on Android
                },
                labelStyle: {
                    display: 'none', // Hide labels
                },
            }}
        >
            <Tab.Screen name='Profile' component={Profile} />
            <Tab.Screen name='Estadisticas' component={Profile} />
            <Tab.Screen name='Home' component={BasicStack} />
            <Tab.Screen name='Plantas' component={Profile} />
            <Tab.Screen name='User' component={Profile} />
            <Tab.Screen name='Login' component={Login} />
        </Tab.Navigator>
    );
}



export default function Navigation() {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    )
}