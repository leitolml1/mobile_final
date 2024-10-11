import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ListarProductos from './screens/ListarProductos';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import Carrito from './screens/Carrito';
import Pago from './screens/Pago';

// Crea el stack navigator
const Stack = createStackNavigator();

// Componente principal
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

// Componente del Stack Navigator
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" // Cambié el nombre a "Home" para diferenciar
        component={HomeScreen} // Cambié el componente aquí
        options={{
          title: 'Inicio',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen 
        name="ListarProductos" 
        component={ListarProductos} 
        options={{
          title: 'Listar Productos',
          headerTitleAlign: 'center',
        }}
       />
      <Stack.Screen 
        name="Carrito" 
        component={Carrito} 
        options={{
          title: 'Carrito',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen 
        name="Pago" 
        component={Pago} 
        options={{
          title: 'Pago',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

// Componente de la pantalla de inicio
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('./assets/logo_nuevo_puesto.png')}
          style={{ width: 200, height: 100 }}
        />
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('ListarProductos')}>
          <Text>Listado Productos</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6c6c6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
  },
});
