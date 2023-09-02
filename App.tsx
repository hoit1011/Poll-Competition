import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native';

const App = () => {
  return (
    <View>
      <ImageBackground source={require("./picture/back.png")} style ={styles.background}>
        <ScrollView
          style={styles.container}>
          <View style={styles.topheader}>
            <Text>기본 설명</Text>
          </View> 
          <View style = {styles.questionView}>
              <Text style={styles.question}>1. 질문</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf:"center",
  },
  background: {
    width:"100%",
    height:"100%",
  },
  item: {
    marginVertical:10,
    fontSize:18
  },
  topheader: {
    backgroundColor:"skyblue",
    opacity:1,
    width:375,
    height:100,
    alignItems:"center",
   alignSelf:"center",
   justifyContent:"center",
 },
 question: {
   textAlign:"center",
 },
 questionView:{
  alignSelf:"center", 
   alignItems:"center",
   marginTop:40,
   width:200,
   height:50,
   backgroundColor:"skyblue",
   borderRadius:25,
   justifyContent:"center",
 }
});

export default App;
