import { useRouter } from 'expo-router'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export default function userdata() {
  const router = useRouter()
  return (
    <View style = {styles.mainContainer}>
    <View style = {styles.container}>
        <View style = {styles.textContainer}>
    
      <Text style = {styles.text}>What is your First Name?</Text>
      <Text style = {styles.text}>What is your Last Name?</Text>
      <Text style = {styles.text}>When is your Birthday?</Text>
      <Text style = {styles.text}>Where do you live </Text>
      </View>
        <View style = {styles.inputBox}>
            <TextInput style = {styles.textInput}/>
      <TextInput style = {styles.textInput}/>
      <TextInput style = {styles.textInput}/>
      <TextInput style = {styles.textInput}/>
      </View>
     
    </View>
     <View style = {styles.submitButton}>
        <Pressable onPress = {()=>{router.push('/')}}><Text style = {styles.textButton}>Submit</Text></Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'

    },
    container: {
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center',
        gap:10,


    },
    textContainer: {
        flexDirection:'column',
        paddingBottom:30,
        gap:10,
        justifyContent:'center',
        alignItems:'flex-end'
        

    },
    inputBox: {
        flexDirection:'column',
        paddingBottom:30,
        gap:10,
        

    }
    ,
    input: {
        borderWidth: 1,
        borderRadius:20,
        fontSize:17,
        

    },
    text: {
      fontSize: 17,
      justifyContent:'center',
      alignItems:'center',
      padding:5,
    },
    submitButton: {
      color:"white",
      backgroundColor:'purple',
      padding:10,
      borderRadius: 10,

    },
  textButton: {
    color:'white',
  },
    textInput:{
    outlineStyle:'none',
    width:150,
    padding:5,
    margin:0,
    alignItems:'flex-start',
    justifyContent:'center',
    borderWidth:1,
    borderRadius:10,
    borderColor: '#ccc',
    color:'#A020F0'
  },

})