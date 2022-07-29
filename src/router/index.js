import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import React from 'react';
import {
  Doctor,
  GetStarted,
  Home,
  Hospital,
  ListDoctor,
  LoginPage,
  Messages,
  SignUp,
  SplashScreen,
  UploadFoto,
} from '../pages';
import {ButtomNavigator} from '../component';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator tabBar={props => <ButtomNavigator {...props} />}>
      <Tab.Screen
        name="Doctor"
        component={Doctor}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Hospital"
        component={Hospital}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

function Router() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpPage"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadFoto"
        component={UploadFoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Doctor"
        component={Doctor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hospital"
        component={Hospital}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListDoctor"
        component={ListDoctor}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Router;
