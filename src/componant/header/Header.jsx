import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import photo from "../../../assets/logo.png"
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Image source={photo} style={styles.logo}/>
    <FontAwesome name="reorder" size={30} color="#901"  onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    flexDirection: "row",
    justifyContent: "space-between",
     margin: 30,
     marginBottom:0,
    },
    logo:{
     width:45,
     height:45,
    }
})
export default Header

