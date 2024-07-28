import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import aboutImg from "../../assets/about.png"
const About = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.heading}>About Eexam</Text>
        <Image source={aboutImg} style={styles.about_img} />
        <Text style={styles.para}>Welcome to Eexam, your premier destination for comprehensive online test series and exam preparation. At Eexam, we are dedicated to helping you achieve your educational and professional goals by providing the most effective and user-friendly online testing platform.</Text>
        <Text style={styles.heading}>Our Mission</Text>
        <Text style={styles.para}>Our mission is to empower students and professionals by offering a wide range of meticulously designed test series that cater to all major competitive exams. We strive to make high-quality exam preparation accessible to everyone, anytime and anywhere.</Text>
        <Text style={styles.heading}>What We Offer</Text>
        <Text style={styles.para}>Extensive Test Series: We offer a diverse array of test series covering various competitive exams, including but not limited to:</Text>
        <Text style={styles.list}>1 Banking Exams (IBPS, SBI, RBI)</Text>
        <Text style={styles.list}>2 Civil Services (UPSC, State PSCs)</Text>
        <Text style={styles.list}>3 Engineering Entrance Exams (JEE Main, JEE Advanced)</Text>
        <Text style={styles.list}>4 Medical Entrance Exams (NEET)</Text>
        <Text style={styles.list}>5 Management Entrance Exams (CAT, MAT, XAT)</Text>
        <Text style={styles.list}>6 Government Jobs (SSC, Railways, Defense)</Text>
        <Text style={styles.list}>7 and many more...</Text>
      </View>
      <View>
        <Text style={styles.heading}>Why Choose Eexam?</Text>
        <Text style={styles.para}>1. User-Friendly Interface: Our platform is designed with simplicity and ease of use in mind, ensuring a seamless and intuitive experience for all users.</Text>
        <Text style={styles.para}>2. Affordable Pricing: We believe that quality education should be accessible to everyone. Our test series are priced competitively to provide you with the best value for your investment.</Text>
        <Text style={styles.para}>3. Customer Support: Our dedicated support team is always ready to assist you with any queries or concerns, ensuring a smooth and hassle-free experience.</Text>
      </View>
      <View>
        <Text style={styles.heading}>Join Us</Text>
        <Text style={styles.para}>Embark on your journey to success with Eexam. Whether you are preparing for your next big exam or looking to improve your knowledge and skills, Eexam is here to support you every step of the way.

          Stay focused, stay determined, and let Eexam be your partner in achieving your dreams.</Text>
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
  para: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 17,
    marginTop: 5,
  },
  about_img: {
    width: 300,
    height: 100,
    margin: "auto",
    marginBottom: 15
  },
  list: {
    fontSize: 15,
    marginLeft: 20,
    marginLeft: 20,
    marginTop: 5
  }
})
export default About
