import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Exams = () => {
  return (
    <View>
      <Text style={styles.heading}>Students Testimonials</Text>
      <View style={styles.container}>
      <Image source={""} style={styles.img} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 25,
    color: "#BB2953",
    margin: 15,
  },
  container: {
    margin: 20,
    borderRadius: 10,
    borderColor: "gray",
    padding: 15,
    elevation: 10,
    backgroundColor: "white",
},
})
export default Exams
