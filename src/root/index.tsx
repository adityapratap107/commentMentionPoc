import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import SplashAnimation from '../screens/Animation/SplashAnimation';
import Comments from '../screens/Comments';
import MentionExample from '../screens/Home';
import Home from '../screens/Home';
import Login from '../screens/Login';
import MainScreen from '../screens/MainScreen';
import ProductScreen from '../screens/Products';
import Profile from '../screens/Profile';

const Root = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='ProductScreen'screenOptions={{headerShown: false}}>
            <Stack.Screen name='MainScreen' component={MainScreen}/>
            <Stack.Screen name='Comments' component={Comments}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='Home' component={MentionExample}/>
            {/* <Stack.Screen name='SplashAnimation' component={SplashAnimation}/> */}
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='ProductScreen' component={ProductScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Root

const styles = StyleSheet.create({});