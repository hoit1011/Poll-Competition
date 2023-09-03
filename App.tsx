import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Image , TouchableOpacity} from 'react-native';

const App = () => {
  const [zoomState, setZoomState] = useState<{ img1: boolean; img2: boolean; img3: boolean; img4: boolean; img5:boolean  }>({img1: false, img2: false, img3: false, img4: false,img5: false});

  const toggleZoom =(img: string) => {
    setZoomState({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
  }

  let count = 50
  
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
          <View style={styles.cheakView}>
            <TouchableOpacity onPress={() => toggleZoom('img1')}>
            {zoomState.img1 ? 
                  <Text style={[styles.cheak,zoomState.img1 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom('img2')}>
            {zoomState.img2 ? 
                  <Text style={[styles.cheak,zoomState.img2 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom('img3')}>
            {zoomState.img3 ? 
                  <Text style={[styles.cheak,zoomState.img3 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom('img4')}>
            {zoomState.img4 ? 
                  <Text style={[styles.cheak,zoomState.img4 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom('img5')}>
            {zoomState.img5 ? 
                  <Text style={[styles.cheak,zoomState.img5 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
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
  arrow:{
    fontSize:112,
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
   fontWeight:"bold",
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
 },
 cheak:{
  fontSize:60,
 },
 cheakView:{
  flexDirection:"row",
 },
 zoomed:{
  fontSize:55,
 },
});

export default App;
