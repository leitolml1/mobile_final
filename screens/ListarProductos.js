import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button,Alert,TouchableOpacity,Image} from 'react-native';


export default function ListarProductos({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Bienvenido Huesped </Text>
      <View style={styles.divBotones}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Carrito')} style={styles.boton}>
              <Text style={styles.textoBoton}>PRODUCTOS</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Carrito')} style={styles.boton}>
              <Text style={styles.textoBoton}>CARRITO</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divProductos}>
              <View style={styles.divProducto}>
                <Text>
                  Coca cola 500 ml
                </Text>
                <TouchableOpacity style={styles.botonAñadir}>
                    <Text style={styles.textoPrecio}>1500$</Text>
                    <Text style={styles.textoAñadir}>AÑADIR</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divProducto}>
                <Text>
                  Coca cola 500 ml
                </Text>
                <TouchableOpacity style={styles.botonAñadir}>
                    <Text style={styles.textoPrecio}>1500$</Text>
                    <Text style={styles.textoAñadir}>AÑADIR</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divProducto}>
                <Text>
                  Coca cola 500 ml
                </Text>
                <TouchableOpacity style={styles.botonAñadir}>
                    <Text style={styles.textoPrecio}>1500$</Text>
                    <Text style={styles.textoAñadir}>AÑADIR</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divProducto}>
                <Text>
                  Coca cola 500 ml
                </Text>
                <TouchableOpacity style={styles.botonAñadir}>
                    <Text style={styles.textoPrecio}>1500$</Text>
                    <Text style={styles.textoAñadir}>AÑADIR</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divProducto}>
                <Text>
                  Coca cola 500 ml
                </Text>
                <TouchableOpacity style={styles.botonAñadir}>
                    <Text style={styles.textoPrecio}>1500$</Text>
                    <Text style={styles.textoAñadir}>AÑADIR</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divProducto}>
                <Text>
                  Coca cola 500 ml
                </Text>
                <TouchableOpacity style={styles.botonAñadir}>
                    <Text style={styles.textoPrecio}>1500$</Text>
                    <Text style={styles.textoAñadir}>AÑADIR</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divProducto}>
                <Text>
                  Coca cola 500 ml
                </Text>
                <TouchableOpacity style={styles.botonAñadir}>
                    <Text style={styles.textoPrecio}>1500$</Text>
                    <Text style={styles.textoAñadir}>AÑADIR</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divProducto}>
                <Text>
                  Coca cola 500 ml
                </Text>
                <TouchableOpacity style={styles.botonAñadir}>
                    <Text style={styles.textoPrecio}>1500$</Text>
                    <Text style={styles.textoAñadir}>AÑADIR</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.divProducto}>
                <Text>
                  Coca cola 500 ml
                </Text>
                <TouchableOpacity style={styles.botonAñadir}>
                    <Text style={styles.textoPrecio}>1500$</Text>
                    <Text style={styles.textoAñadir}>AÑADIR</Text>
                </TouchableOpacity>
              </View>

      </View>



    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
    alignItems: 'center',
    padding:20,
    margin:10,
  },
  divBotones:{
    flexDirection: 'row'  ,
  },
  textoBoton:{
    color:"white",
    textAlign:"center",
    fontSize:"15px"
  },
  boton:{
    backgroundColor:"black",
    borderWidth:3,
    borderRadius:"5px",
    marginHorizontal: 15, 
  },
  divProductos:{
    marginTop:"10px",
    borderRadius:"10px",
    width:"300px",
    height:"450px",

  },
  divProducto:{
    marginTop:"5px",
    borderRadius:"10px",
    backgroundColor:"#d3d3d3",
    flexDirection: 'row', // Alinear horizontalmente
    justifyContent: 'space-between', // Poner el botón a la derecha
    alignItems: 'center', // Centrar verticalmente
    marginBottom: 10,
    padding:"20px",
    height:"10px",

  },
  botonAñadir:{
    borderRadius:"10px",
    backgroundColor:"#08D85A",
    width:"80px",
    fontSize:"10px",
  },
  textoAñadir:{
    textAlign:"center",
    color:"white",
  },
  textoPrecio:{
    textAlign:"center",
    color:"white",
  },
});