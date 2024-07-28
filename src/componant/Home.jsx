import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native'
import React from 'react'
import photo from "../../assets/exam4.png"
import examData from "../json/exams.json"


const imageMap = {
    '../../assets/exam1.png': require('../../assets/exam1.png'),
    '../../assets/exam2.png': require('../../assets/exam2.png'),
    '../../assets/exam3.png': require('../../assets/exam3.png'),
    '../../assets/exam4.png': require('../../assets/exam4.png'),
    '../../assets/exam5.png': require('../../assets/exam5.png'),
    '../../assets/exam6.png': require('../../assets/exam6.png'),
    '../../assets/exam7.png': require('../../assets/exam7.png'),
    '../../assets/exam8.png': require('../../assets/exam8.png')

  };
const Home = () => {
    return (
        <View>
            <FlatList data={examData} renderItem={(ele)=>{
                return(
                    <View style={styles.container}>
                    <Image source={imageMap[ele.item.img]} style={styles.img} />
                    <Text style={styles.text}>{ele.item.exam}</Text>
                    <View style={styles.btn}>
                        <Button title={ele.item.sub[0]} />
                        <Button title={ele.item.sub[1]} />
                        <Button title={ele.item.sub[2]} />
                    </View>
                </View>
                )
            }}/>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        borderRadius: 10,
        borderColor: "gray",
        padding: 15,
        elevation: 10,
        backgroundColor: "white",
    },
    img: {
        width: 200,
        height: 150,
        margin: "auto"
    },
    btn: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    text:{
     fontSize:20,
     color:"#BB2953",
     textAlign:"center",
     margin:10,
    }
})
export default Home
