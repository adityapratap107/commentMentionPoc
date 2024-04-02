import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from './styles'
import SplashAnimation from '../Animation/SplashAnimation'
import { useState } from 'react'

const MainScreen = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
  return (
    <>
    <SafeAreaView style={{
        flex:1,
        backgroundColor: '#410061',
        // justifyContent: 'center',    
        alignItems: 'center',
    }}>
        <SplashAnimation />
        <View style={styles.headerView}>
            <Text style={styles.text}>SpotCheck</Text>
        </View>
        <View style={styles.innerview}>
            <Text style={styles.formText}>Phone Number or Username</Text>
            <TextInput style={styles.textinput} value={username} onChangeText={(val) => {
                setUserName(val)
            }}/>
        </View>
        <View style={styles.passwordView}>
            <Text style={styles.formText}>Password</Text>
            <TextInput style={styles.textinput}/>
        </View>
        <View style={styles.passwordView}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
        </View>
        <View>
            <Pressable style={styles.LoginBtn} onPress={() => {
                console.log('press')
            }}>
                <Text style={styles.loginText}>Login</Text>
            </Pressable>
        </View>
    </SafeAreaView>
    </>
  )
}

export default MainScreen
