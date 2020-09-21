import React ,{useState} from 'react';
import { StyleSheet, View,TextInput,TouchableWithoutFeedback,Keyboard,Text,Button } from 'react-native';
import Header from './component/header';
import Calculate from './component/calculate';

export default function App() {
  const [getresult,setResult] = useState(0);
  const [getvalue,setValue] = useState(0);

  const gstcalculator = () => {
    var result = parseFloat(getvalue) * 10/100;
    setResult(result);
  }

  return (
    <View>
      <View>
        <Header />
        <Text style={styles.container}>Enter Value to Be checked ...</Text>
        <TextInput style={styles.input}
                   keyboardType='decimal-pad'
                   placeholder='e.g 50000,45589'
                   onChangeText={data => setValue(data)}

         />
        <Text style={styles.container}>Enter a GST Percentage...</Text>
        <TextInput style={styles.input}
                   keyboardType='decimal-pad'
                   placeholder='e.g 5,17%'
                 
       />
      </View>
    <Calculate handle={gstcalculator} />
    <Text style={styles.ansText}>Calculate Answer is....</Text>
    <Text style={styles.ans}>{getresult}</Text>
  </View>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30,
    paddingBottom:0,
    marginLeft:30,
    fontSize:20,
  },
  input: {
    borderWidth:3,
    borderRadius:20,
    padding:8,
    margin:10,
    width:300,
    height:50,
    marginLeft:45,
  },
  ans: {
    fontSize:50,
    marginHorizontal:180,
    marginTop:15,

  },
  ansText: {
    fontSize:28,
    marginTop:20,
    marginHorizontal:45,
  }
  
});
