import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Alert,Image,TouchableOpacity} from 'react-native';


export default function ListarProductos({navigation}) {
  return (
    <View styles={styles.container}>
      <Text>HOLA LEITO</Text>
        <Text>Listado Productos</Text>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('Carrito')}>
          <Text>Carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6c6c6',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20,
    margin:10,
  },
  top:{
    marginTop:"10px",
    flex:0.1,
    backgroundColor:"blue",
    borderWidth:5,
  },
  titulo:{
    fontSize:20,
  },
  medio:{
    marginTop:"10px",
    flex:0.5,
    backgroundColor:"green",
    borderWidth:5,
  },
  botones:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight:"10px",
  }
});
