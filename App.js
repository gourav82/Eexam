import "react-native-gesture-handler"
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/componant/Home';
import About from './src/componant/About';
import Contact from "./src/componant/Contact";
import User from "./src/componant/User";
import Exams from "./src/componant/Exams";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <>

        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} 
          options={{
            tabBarIcon: ()=> <FontAwesome name="home" size={20} color="#BB2953"/>
          }}
          />
          <Tab.Screen name="Exams" component={Exams} 
           options={{
            tabBarIcon: ()=> <FontAwesome name="graduation-cap" size={20} color="#BB2953"/>
          }}/>
          <Tab.Screen name="About" component={About} 
          options={{
            tabBarIcon: ()=> <FontAwesome name="question-circle-o" size={20} color="#BB2953"/>
          }}
          />
          <Tab.Screen name="Contact" component={Contact} 
          options={{
            tabBarIcon: ()=> <FontAwesome name="address-book-o" size={20} color="#BB2953"/>
          }}
          />
          <Tab.Screen name="User" component={User}
           options={{
            tabBarIcon: ()=> <FontAwesome name="user" size={20} color="#BB2953"/>
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 45,
    height: 45,
  }
});
