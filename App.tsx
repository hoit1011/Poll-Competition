import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Image , TouchableOpacity} from 'react-native';

const App = () => {
  const [zoomState, setZoomState] = useState<{ img1: boolean; img2: boolean; img3: boolean; img4: boolean; img5:boolean  }>({img1: false, img2: false, img3: false, img4: false,img5: false});
  const [zoomState1, setZoomState1] = useState<{ img1: boolean; img2: boolean; img3: boolean; img4: boolean; img5:boolean  }>({img1: false, img2: false, img3: false, img4: false,img5: false});
  const [zoomState2, setZoomState2] = useState<{ img1: boolean; img2: boolean; img3: boolean; img4: boolean; img5:boolean  }>({img1: false, img2: false, img3: false, img4: false,img5: false});
  const [zoomState3, setZoomState3] = useState<{ img1: boolean; img2: boolean; img3: boolean; img4: boolean; img5:boolean  }>({img1: false, img2: false, img3: false, img4: false,img5: false});
  const [zoomState4, setZoomState4] = useState<{ img1: boolean; img2: boolean; img3: boolean; img4: boolean; img5:boolean  }>({img1: false, img2: false, img3: false, img4: false,img5: false});
  const [zoomState5, setZoomState5] = useState<{ img1: boolean; img2: boolean; img3: boolean; img4: boolean; img5:boolean  }>({img1: false, img2: false, img3: false, img4: false,img5: false});
  const [zoomState6, setZoomState6] = useState<{ img1: boolean; img2: boolean; img3: boolean; img4: boolean; img5:boolean  }>({img1: false, img2: false, img3: false, img4: false,img5: false});
  const [zoomState7, setZoomState7] = useState<{ img1: boolean; img2: boolean; img3: boolean; img4: boolean; img5:boolean  }>({img1: false, img2: false, img3: false, img4: false,img5: false});
  const [zoomState8, setZoomState8] = useState<{ img1: boolean; img2: boolean; img3: boolean; img4: boolean; img5:boolean  }>({img1: false, img2: false, img3: false, img4: false,img5: false});
  const [zoomState9, setZoomState9] = useState<{ img1: boolean; img2: boolean; img3: boolean; img4: boolean; img5:boolean  }>({img1: false, img2: false, img3: false, img4: false,img5: false});

  const toggleZoom =(img: string, questionNumber: number) => {
    let newArray = [...array];
    newArray[0] = parseInt(img.replace('img', ''),10);
    setArray(newArray);

    console.log(array)

    setZoomState({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
}

  const toggleZoom1 =(img: string, questionNumber: number) => {
  let newArray = [...array];
  newArray[1] = parseInt(img.replace('img', ''),10);
  setArray(newArray);
  console.log(array)
  
  setZoomState1({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
}

const toggleZoom2 =(img: string, questionNumber: number) => {
  let newArray = [...array];
  newArray[2] = parseInt(img.replace('img', ''),10);
  setArray(newArray);
  console.log(array)
  
  setZoomState2({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
}

const toggleZoom3 =(img: string, questionNumber: number) => {
  let newArray = [...array];
  newArray[3] = parseInt(img.replace('img', ''),10);
  setArray(newArray);
  console.log(array)
  
  setZoomState3({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
}

const toggleZoom4 =(img: string, questionNumber: number) => {
  let newArray = [...array];
  newArray[4] = parseInt(img.replace('img', ''),10);
  setArray(newArray);
  console.log(array)
  
  setZoomState4({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
}

const toggleZoom5 =(img: string, questionNumber: number) => {
  let newArray = [...array];
  newArray[5] = parseInt(img.replace('img', ''),10);
  setArray(newArray);
  console.log(array)
  
  setZoomState5({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
}

const toggleZoom6 =(img: string, questionNumber: number) => {
  let newArray = [...array];
  newArray[6] = parseInt(img.replace('img', ''),10);
  setArray(newArray);
  console.log(array)
  
  setZoomState6({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
}

const toggleZoom7 =(img: string, questionNumber: number) => {
  let newArray = [...array];
  newArray[7] = parseInt(img.replace('img', ''),10);
  setArray(newArray);
  console.log(array)
  
  setZoomState7({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
}

const toggleZoom8 =(img: string, questionNumber: number) => {
  let newArray = [...array];
  newArray[8] = parseInt(img.replace('img', ''),10);
  setArray(newArray);
  console.log(array)
  
  setZoomState8({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
}

const toggleZoom9 =(img: string, questionNumber: number) => {
  let newArray = [...array];
  newArray[9] = parseInt(img.replace('img', ''),10);
  setArray(newArray);
  console.log(array)
  
  setZoomState9({ img1: false, img2: false, img3: false, img4: false, img5: false, [img]: true });
}
  const [array,setArray] = useState<number[]>([0,0,0,0,0,0,0,0,0,0])
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
            <Text style={styles.questiontext}>동의</Text>

            <TouchableOpacity onPress={() => toggleZoom('img1',1)}>
            {zoomState.img1 ? 
                  <Text style={[styles.cheak,zoomState.img1 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom('img2',1)}>
            {zoomState.img2 ? 
                  <Text style={[styles.cheak,zoomState.img2 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom('img3',1)}>
            {zoomState.img3 ? 
                  <Text style={[styles.cheak,zoomState.img3 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom('img4',1)}>
            {zoomState.img4 ? 
                  <Text style={[styles.cheak,zoomState.img4 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom('img5',1)}>
            {zoomState.img5 ? 
                  <Text style={[styles.cheak,zoomState.img5 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <Text style={styles.questiontext} >비동의</Text>
            </View>
            <View style = {styles.questionView}>
              <Text style={styles.question}>1. 질문</Text>
          </View>
          <View style={styles.cheakView}>
            <Text style={styles.questiontext}>동의</Text>

            <TouchableOpacity onPress={() => toggleZoom1('img1',2)}>
            {zoomState1.img1 ? 
                  <Text style={[styles.cheak,zoomState1.img1 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom1('img2',2)}>
            {zoomState1.img2 ? 
                  <Text style={[styles.cheak,zoomState1.img2 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom1('img3',2)}>
            {zoomState1.img3 ? 
                  <Text style={[styles.cheak,zoomState1.img3 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom1('img4',2)}>
            {zoomState1.img4 ? 
                  <Text style={[styles.cheak,zoomState1.img4 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom1('img5',2)}>
            {zoomState1.img5 ? 
                  <Text style={[styles.cheak,zoomState1.img5 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <Text style={styles.questiontext} >비동의</Text>
            </View>
            <View style = {styles.questionView}>
              <Text style={styles.question}>1. 질문</Text>
          </View>
          <View style={styles.cheakView}>
            <Text style={styles.questiontext}>동의</Text>

            <TouchableOpacity onPress={() => toggleZoom2('img1',2)}>
            {zoomState2.img1 ? 
                  <Text style={[styles.cheak,zoomState2.img1 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom2('img2',2)}>
            {zoomState2.img2 ? 
                  <Text style={[styles.cheak,zoomState2.img2 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom2('img3',2)}>
            {zoomState2.img3 ? 
                  <Text style={[styles.cheak,zoomState2.img3 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom2('img4',2)}>
            {zoomState2.img4 ? 
                  <Text style={[styles.cheak,zoomState2.img4 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom2('img5',2)}>
            {zoomState2.img5 ? 
                  <Text style={[styles.cheak,zoomState2.img5 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <Text style={styles.questiontext} >비동의</Text>
            </View>
            <View style = {styles.questionView}>
              <Text style={styles.question}>1. 질문</Text>
          </View>
          <View style={styles.cheakView}>
            <Text style={styles.questiontext}>동의</Text>

            <TouchableOpacity onPress={() => toggleZoom3('img1',2)}>
            {zoomState3.img1 ? 
                  <Text style={[styles.cheak,zoomState3.img1 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom3('img2',2)}>
            {zoomState3.img2 ? 
                  <Text style={[styles.cheak,zoomState3.img2 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom3('img3',2)}>
            {zoomState3.img3 ? 
                  <Text style={[styles.cheak,zoomState3.img3 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom3('img4',2)}>
            {zoomState3.img4 ? 
                  <Text style={[styles.cheak,zoomState3.img4 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom3('img5',2)}>
            {zoomState3.img5 ? 
                  <Text style={[styles.cheak,zoomState3.img5 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <Text style={styles.questiontext} >비동의</Text>
            </View>
            <View style = {styles.questionView}>
              <Text style={styles.question}>1. 질문</Text>
          </View>
          <View style={styles.cheakView}>
            <Text style={styles.questiontext}>동의</Text>

            <TouchableOpacity onPress={() => toggleZoom4('img1',2)}>
            {zoomState4.img1 ? 
                  <Text style={[styles.cheak,zoomState4.img1 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom4('img2',2)}>
            {zoomState4.img2 ? 
                  <Text style={[styles.cheak,zoomState4.img2 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom4('img3',2)}>
            {zoomState3.img4 ? 
                  <Text style={[styles.cheak,zoomState4.img3 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom4('img4',2)}>
            {zoomState4.img4 ? 
                  <Text style={[styles.cheak,zoomState4.img4 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom4('img5',2)}>
            {zoomState4.img5 ? 
                  <Text style={[styles.cheak,zoomState4.img5 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <Text style={styles.questiontext} >비동의</Text>
            </View>
            <View style = {styles.questionView}>
              <Text style={styles.question}>1. 질문</Text>
          </View>
          <View style={styles.cheakView}>
            <Text style={styles.questiontext}>동의</Text>

            <TouchableOpacity onPress={() => toggleZoom5('img1',2)}>
            {zoomState5.img1 ? 
                  <Text style={[styles.cheak,zoomState5.img1 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom5('img2',2)}>
            {zoomState5.img2 ? 
                  <Text style={[styles.cheak,zoomState5.img2 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom5('img3',2)}>
            {zoomState5.img5 ? 
                  <Text style={[styles.cheak,zoomState5.img3 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom5('img4',2)}>
            {zoomState5.img4 ? 
                  <Text style={[styles.cheak,zoomState5.img4 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom5('img5',2)}>
            {zoomState5.img5 ? 
                  <Text style={[styles.cheak,zoomState5.img5 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <Text style={styles.questiontext} >비동의</Text>
            </View>

            <View style = {styles.questionView}>
              <Text style={styles.question}>1. 질문</Text>
          </View>
          <View style={styles.cheakView}>
            <Text style={styles.questiontext}>동의</Text>

            <TouchableOpacity onPress={() => toggleZoom6('img1',2)}>
            {zoomState6.img1 ? 
                  <Text style={[styles.cheak,zoomState6.img1 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom6('img2',2)}>
            {zoomState6.img2 ? 
                  <Text style={[styles.cheak,zoomState6.img2 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom6('img3',2)}>
            {zoomState6.img3 ? 
                  <Text style={[styles.cheak,zoomState6.img3 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom6('img4',2)}>
            {zoomState6.img4 ? 
                  <Text style={[styles.cheak,zoomState6.img4 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom6('img5',2)}>
            {zoomState6.img5 ? 
                  <Text style={[styles.cheak,zoomState6.img5 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <Text style={styles.questiontext} >비동의</Text>
            </View>

            <View style = {styles.questionView}>
              <Text style={styles.question}>1. 질문</Text>
          </View>
          <View style={styles.cheakView}>
            <Text style={styles.questiontext}>동의</Text>

            <TouchableOpacity onPress={() => toggleZoom7('img1',2)}>
            {zoomState7.img1 ? 
                  <Text style={[styles.cheak,zoomState7.img1 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom7('img2',2)}>
            {zoomState7.img2 ? 
                  <Text style={[styles.cheak,zoomState7.img2 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom7('img3',2)}>
            {zoomState7.img3 ? 
                  <Text style={[styles.cheak,zoomState7.img3 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom7('img4',2)}>
            {zoomState7.img4 ? 
                  <Text style={[styles.cheak,zoomState7.img4 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom7('img5',2)}>
            {zoomState7.img5 ? 
                  <Text style={[styles.cheak,zoomState7.img5 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <Text style={styles.questiontext} >비동의</Text>
            </View>

            <View style = {styles.questionView}>
              <Text style={styles.question}>1. 질문</Text>
          </View>
          <View style={styles.cheakView}>
            <Text style={styles.questiontext}>동의</Text>

            <TouchableOpacity onPress={() => toggleZoom8('img1',2)}>
            {zoomState8.img1 ? 
                  <Text style={[styles.cheak,zoomState8.img1 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom8('img2',2)}>
            {zoomState8.img2 ? 
                  <Text style={[styles.cheak,zoomState8.img2 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom8('img3',2)}>
            {zoomState8.img3 ? 
                  <Text style={[styles.cheak,zoomState8.img3 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom8('img4',2)}>
            {zoomState8.img4 ? 
                  <Text style={[styles.cheak,zoomState8.img4 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom8('img5',2)}>
            {zoomState8.img5 ? 
                  <Text style={[styles.cheak,zoomState8.img5 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <Text style={styles.questiontext} >비동의</Text>
            </View>

            <View style = {styles.questionView}>
              <Text style={styles.question}>1. 질문</Text>
          </View>
          <View style={styles.cheakView}>
            <Text style={styles.questiontext}>동의</Text>

            <TouchableOpacity onPress={() => toggleZoom9('img1',2)}>
            {zoomState9.img1 ? 
                  <Text style={[styles.cheak,zoomState9.img1 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom9('img2',2)}>
            {zoomState9.img2 ? 
                  <Text style={[styles.cheak,zoomState9.img2 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom9('img3',2)}>
            {zoomState9.img3 ? 
                  <Text style={[styles.cheak,zoomState9.img3 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom9('img4',2)}>
            {zoomState9.img4 ? 
                  <Text style={[styles.cheak,zoomState9.img4 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleZoom9('img5',2)}>
            {zoomState9.img5 ? 
                  <Text style={[styles.cheak,zoomState9.img5 && styles.zoomed]}>◉</Text> : 
                  <Text style={styles.cheak}>◎</Text>
            }    
            </TouchableOpacity>
            <Text style={styles.questiontext} >비동의</Text>
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
  marginLeft:5,
  marginRight:5,
  opacity:0.7,

 },
 cheakView:{
  flexDirection:"row",
 },
 zoomed:{
  fontSize:55,
  opacity:1,
 },
 questiontext:{
  fontSize:14,
  marginTop:20,
  marginLeft:2
 }
});

export default App;
