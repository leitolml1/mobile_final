import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Alert,Image,TouchableOpacity} from 'react-native';


export default function ListarProductos({navigation}) {
  return (
    <View style={styles.container}>
      <Text>HOLA LEITO</Text>
        <Text>Listado Productos</Text>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('Carrito')} style={styles.botonNegro}>
          <Text style={styles.textoBlanco}>Carrito</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divProductos}>
        <View style={styles.divProducto}>
          <Text>Coca cola 500ml</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Carrito')} style={styles.botonAgregar}>
          <Text>1500$</Text>
          <Text>Agregar</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.divProducto}>
          <Text>Coca cola 500ml</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Carrito')} style={styles.botonAgregar}>
          <Text>1500$</Text>
          <Text>Agregar</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.divProducto}>
          <Text>Coca cola 500ml</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Carrito')} style={styles.botonAgregar}>
          <Text>1500$</Text>
          <Text>Agregar</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.divProducto}>
          <Text>Coca cola 500ml</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Carrito')} style={styles.botonAgregar}>
          <Text>1500$</Text>
          <Text>Agregar</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.divProducto}>
          <Text>Coca cola 500ml</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Carrito')} style={styles.botonAgregar}>
          <Text>1500$</Text>
          <Text>Agregar</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.divProducto}>
          <Text>Coca cola 500ml</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Carrito')} style={styles.botonAgregar}>
          <Text>1500$</Text>
          <Text>Agregar</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.divProducto}>
          <Text>Coca cola 500ml</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Carrito')} style={styles.botonAgregar}>
          <Text>1500$</Text>
          <Text>Agregar</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.divProducto}>
          <Text>Coca cola 500ml</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Carrito')} style={styles.botonAgregar}>
          <Text>1500$</Text>
          <Text>Agregar</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.divProducto}>
          <Text>Coca cola 500ml</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Carrito')} style={styles.botonAgregar}>
          <Text>1500$</Text>
          <Text>Agregar</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6c6c6',
    alignItems: 'center',
    padding:20,
    margin:10,
  },
  divProducto:{
    marginTop:"10px",
    justifyContent: 'space-between',
    height:"50px",
    borderRadius:"5px",
    flexDirection:"row",
    backgroundColor:"#c6c6c6",
  },
  botonNegro:{
    color:"white",
    borderRadius:"10px",
    backgroundColor:"black",
    padding:"10px",
  },
  textoBlanco:{
    color:"white",
  },
  botonAgregar:{
    borderRadius:"10px",
    backgroundColor:"green",
    padding:"10px",
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
  },
  divProductos:{
    padding:"10px",
    backgroundColor:"white",
    width:"350px",
    height:"600px",
  }
});
