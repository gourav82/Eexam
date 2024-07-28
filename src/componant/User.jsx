import { Button, StyleSheet, Text, TextInput, View,Image,ScrollView,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import loginImg from "../../assets/login.png"

const User = () => {
  const [openModel, setOpenModel]= useState(false)
  const toggleVisibility = () => {
    setOpenModel(!openModel);
  };
  return (
      <ScrollView>
        {openModel ?
  
      <View style={styles.input_container}>
      <Text style={styles.heading}>Sign Up</Text>
      {/* <View style={styles.contact_location}></View>
      <View style={styles.contact_form}></View> */}
      <View >
        <Text style={styles.input_lable}>Enter Your Name</Text>
        <TextInput style={styles.input_style}
          placeholder={"Gourav"}
          value={""}
          onChangeText={""}
        />
      </View>

      <View >
        <Text style={styles.input_lable}>Mobile No.</Text>
        <TextInput style={styles.input_style}
          placeholder={"1234567898"}
          value={""}
          onChangeText={""}
        />
      </View>

      <View >
        <Text style={styles.input_lable}>Email Id</Text>
        <TextInput style={styles.input_style}
          placeholder={"test@gmail.com"}
          value={""}
          onChangeText={""}
        />
      </View>

      <View >
        <Text style={styles.input_lable}>Enter Your City</Text>
        <TextInput style={styles.input_style}
          placeholder={"siwan"}
          value={""}
          onChangeText={""}
        />
      </View>
      <View >
        <Text style={styles.input_lable}>Enter Your Class</Text>
        <TextInput style={styles.input_style}
          placeholder={"10th"}
          value={""}
          onChangeText={""}
        />
      </View>
      <View >
        <Text style={styles.input_lable}>Password</Text>
        <TextInput style={styles.input_style}
          placeholder={"1234****..."}
          value={""}
          onChangeText={""}
        />
      </View>
      <View style={styles.forgot}>
       <Text ></Text>
       <TouchableOpacity onPress={toggleVisibility}> 
       <Text >Login Here</Text> 
         </TouchableOpacity>
      </View>
      <Button title='Submit' style={styles.input_btn}/>
      <Text></Text>
      </View>
      :
      <View style={styles.input_container}>
        <Text style={styles.heading}>Login</Text>
        <Image source={loginImg} style={styles.login_img} />

        <View>
        <Text style={styles.input_lable}>Enter Email & Mobile</Text>
        <TextInput style={styles.input_style}
          placeholder={"gb@gmail.com"}
          value={""}
          onChangeText={""}
        />
      </View>

      <View>
        <Text style={styles.input_lable}>Enter Password</Text>
        <TextInput style={styles.input_style}
          placeholder={"gb@123**"}
          value={""}
          onChangeText={""}
        />
      </View>
      <View style={styles.forgot} >
       <Text >Forgot Password..</Text>
       <TouchableOpacity onPress={toggleVisibility}> 
       <Text >Sign Up Here</Text> 
         </TouchableOpacity>
      </View>
       <Button title='Submit' style={styles.input_btn}/>
      </View>
      }
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
  login_img:{
width:300,
height:190,
margin:"auto"
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
  },
  input_btn:{
    backgroundColor:"#BB2953",
    borderRadius:20,
    marginTop:10,
  },
  forgot:{
    marginBottom:10,
    marginTop:20,
    justifyContent:"space-between",
    flexDirection:"row"
  }
})
export default User
