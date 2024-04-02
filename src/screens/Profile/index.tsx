import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles';

const Profile = (props) => {
    // console.log(props);
    const {name} = props?.route?.params;
    // console.log(name);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.ProfileHeadingText}>Profile</Text>
      {
        name ? (
          <View>
            <Text style={styles.profileName}>{name}</Text>
          </View>
        ) : (
          <View>
            <Text style={[styles.profileName, {color: 'red'}]}>No User Found  :)</Text>
          </View>
        )
      }
    </SafeAreaView>
  )
}

export default Profile;
