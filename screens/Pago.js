import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function Pago() {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  const handleFinalize = () => {
    // Lógica para finalizar el pago
    Alert.alert('Pago finalizado', `Método seleccionado: ${selectedPayment}`);
  };

  const handleCancel = () => {
    // Lógica para cancelar la acción
    Alert.alert('Pago cancelado');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Método de Pago:</Text>

      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => handlePaymentSelect('Efectivo')}
      >
        <View style={[styles.radioCircle, selectedPayment === 'Efectivo' && styles.selectedRadio]} />
        <Text style={styles.radioText}>Efectivo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => handlePaymentSelect('Recargo a la Habitación')}
      >
        <View style={[styles.radioCircle, selectedPayment === 'Recargo a la Habitación' && styles.selectedRadio]} />
        <Text style={styles.radioText}>Recargo a la Habitación</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.finalizeButton} onPress={handleFinalize}>
        <Text style={styles.finalizeButtonText}>FINALIZAR</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.cancelButtonText}>CANCELAR</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  greeting: {
    fontSize: 18,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRadio: {
    backgroundColor: 'green',
  },
  radioText: {
    fontSize: 16,
  },
  finalizeButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 30,
  },
  finalizeButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 15,
  },
  cancelButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
