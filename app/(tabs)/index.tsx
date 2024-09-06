import { Image, StyleSheet, Platform,View,Text,TouchableOpacity,StatusBar } from 'react-native';
import React,{useState} from 'react'


export default function HomeScreen() {
  const [backgroundColor,setBackgroundColor] = useState("#1f2f3f")
  const newColor = () => {
    let color = "#";
    const variable = '123456789ABCDEF';
    for(let i =0;i<6;i++){
      color += variable[Math.floor(Math.random()*16)];
    }
    setBackgroundColor(color);
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={backgroundColor} />
      <View style={styles.mainScreen}>
        <TouchableOpacity onPress={newColor}>
          <Text style={styles.changeButton}>Change Color</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen:{
    flex:1,
    borderColor:'black',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  changeButton:{
    color:'black',
    backgroundColor:'white',
    padding:15,
    fontSize:25,
    fontWeight:'bold',
    borderRadius:15,

  },
});
