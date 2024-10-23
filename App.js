import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Para íconos de redes sociales
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
        name="Login"
        component={LoginScreen} // Ahora la pantalla de inicio es la de Login
        options={{
          title: 'Login',
          headerTitleAlign: 'center',
          headerShow: false,
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

// Componente de la pantalla de Login
function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        {/* Imagen del logo */}
        <Image
          source={require('./assets/logo_nuevo_puesto.png')} // Ruta correcta a tu imagen
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Contenedor para el formulario */}
      <View style={styles.formContainer}>
        <Text style={styles.instructions}>Para pedir, ingresá tu DNI:</Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={24} color="#ccc" />
          <TextInput
            style={styles.input}
            placeholder="DNI"
            placeholderTextColor="#ccc"
          />
        </View>

        {/* Botón de Ingresar */}
        <View style={styles.buttonContainer}>
          <Button
            title="Ingresar"
            color="#FF4B4B"
            onPress={() => navigation.navigate('ListarProductos')} // Navega a la lista de productos
          />
        </View>
      </View>

      <View style={styles.bottomSection}>
        {/* Iconos de redes sociales */}
        <View style={styles.socialIcons}>
          <FontAwesome name="instagram" size={30} color="#fff" />
          <FontAwesome name="facebook" size={30} color="#fff" />
          <FontAwesome name="twitter" size={30} color="#fff" />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 3,
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    marginTop: -100,
    zIndex: 1,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 185,
    marginBottom: 20,
    marginTop: 50,
  },
  instructions: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 20,
    height: 50,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
});
