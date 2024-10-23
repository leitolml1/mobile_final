
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

function Carrito({ navigation }) {
  // Simulamos los productos en el carrito con cantidad y precio
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'COCA 500 ML', precio: 5000, cantidad: 1 },
    { id: 2, nombre: 'CHEBUSAN XL', precio: 8000, cantidad: 1 },
    { id: 3, nombre: 'SPRITE 1L', precio: 3000, cantidad: 1 },
  ]);

  // Función para aumentar la cantidad
  const aumentarCantidad = (id) => {
    setProductos((prevProductos) =>
      prevProductos.map((prod) =>
        prod.id === id ? { ...prod, cantidad: prod.cantidad + 1 } : prod
      )
    );
  };

  // Función para disminuir la cantidad
  const disminuirCantidad = (id) => {
    setProductos((prevProductos) =>
      prevProductos.map((prod) =>
        prod.id === id && prod.cantidad > 1 ? { ...prod, cantidad: prod.cantidad - 1 } : prod
      )
    );
  };

  // Función para calcular el subtotal
  const calcularSubtotal = () => {
    return productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CARRITO</Text>

      {/* Listado de productos en el carrito */}
      <ScrollView style={styles.productList}>
        {productos.map((producto) => (
          <View key={producto.id} style={styles.productItem}>
            <Text style={styles.productName}>{producto.nombre}</Text>
            <Text style={styles.productPrice}>${producto.precio * producto.cantidad}</Text>
            <View style={styles.productControls}>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => disminuirCantidad(producto.id)}
              >
                <Text style={styles.controlText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{producto.cantidad}</Text>
              <TouchableOpacity
                style={styles.controlButton}
                onPress={() => aumentarCantidad(producto.id)}
              >
                <Text style={styles.controlText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Botón para añadir más productos */}
      <TouchableOpacity onPress={() => navigation.navigate('ListarProductos')} style={styles.addMoreButton}>
        <Text style={styles.addMoreText}>Añadir más productos</Text>
      </TouchableOpacity>

      {/* Subtotal */}
      <Text style={styles.subtotal}>SUBTOTAL: ${calcularSubtotal()}</Text>

      {/* Botón de pagar */}
      <TouchableOpacity onPress={() => navigation.navigate('Pago')} style={styles.payButton}>
        <Text style={styles.payText}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  productList: {
    flex: 1,
    marginBottom: 20,
  },
  productItem: {
    backgroundColor: '#ccc',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: 16,
    color: '#000',
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
  },
  productControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  controlText: {
    color: '#fff',
    fontSize: 18,
  },
  quantityText: {
    color: '#000',
    fontSize: 16,
  },
  addMoreButton: {
    backgroundColor: '#1abc9c',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  addMoreText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  subtotal: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
  },
  payText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Carrito;
