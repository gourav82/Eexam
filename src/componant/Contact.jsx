import { StyleSheet, Text, View, Image, TextInput,ScrollView } from 'react-native'
import React from 'react'
import contactImg from "../../assets/contact.png"

const Contact = () => {
  return (
    <ScrollView>
    <View>
      <Text style={styles.heading}>Contact Us</Text>
      <Image source={contactImg} style={styles.contact_img} />
      <View style={styles.contact_details}>
        <Text><Text style={styles.text}>Mobile:- </Text> 7976800918</Text>
        <Text><Text style={styles.text}>Email:- </Text> eexam@gmail.com</Text>
        <Text><Text style={styles.text}>Address:- </Text> Church Gali Siwan Bihar 841226</Text>
      </View>
      <Text style={styles.heading}>Send Messages</Text>
      {/* <View style={styles.contact_location}></View>
      <View style={styles.contact_form}></View> */}
      <View style={styles.input_container}>
        <Text style={styles.input_lable}>Enter Your Name</Text>
        <TextInput style={styles.input_style}
          placeholder={"Enter Your Name"}
          value={""}
          onChangeText={""}
        />
      </View>

      <View style={styles.input_container}>
        <Text style={styles.input_lable}>Mobile No.</Text>
        <TextInput style={styles.input_style}
          placeholder={"Mobile No."}
          value={""}
          onChangeText={""}
        />
      </View>

      <View style={styles.input_container}>
        <Text style={styles.input_lable}>Email Id</Text>
        <TextInput style={styles.input_style}
          placeholder={"Email Id"}
          value={""}
          onChangeText={""}
        />
      </View>

      <View style={styles.input_container}>
        <Text style={styles.input_lable}>Enter Your City</Text>
        <TextInput style={styles.input_style}
          placeholder={"Enter Your City"}
          value={""}
          onChangeText={""}
        />
      </View>
      <View style={styles.input_container}>
        <Text style={styles.input_lable}>Enter Your City</Text>
        <TextInput style={styles.input_style}
          placeholder={"Your Message"}
          value={""}
          onChangeText={""}
          numberOfLines={6}
          multiline={true}
        />
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 25,
    color: "#BB2953",
    margin: 15,
  },
  contact_img: {
    width: 300,
    height: 250,
    margin: "auto"
  },
  contact_details: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    margin: "auto",
    backgroundColor: "white",
    padding: 10,
    elevation: 5,
    borderRadius: 10
  },
  text: {
    color: "#BB2953",
    fontSize: 16,
  },
  input_container:{
    marginLeft:20,
    marginRight:20,

  },
  input_lable:{
marginBottom:8,

  },
  input_style:{
    width:320,
    backgroundColor:"white",
    elevation:5,
    padding:6,
    borderRadius:10,
    marginBottom:10,



  }
})
export default Contact
