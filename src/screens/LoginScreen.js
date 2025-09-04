// src/screens/LoginScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // luego conectaremos con authService
    if (email === "admin" && password === "1234") {
      console.log("Ingreso exitoso, navegando a Main")
      navigation.navigate("Main");
    } else {
      console.log("Credenciales incorrectas")
      alert("Credenciales incorrectas");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button
        title="Ingresar"
        onPress={handleLogin}
        style={styles.button}
      />

      {/* boton para registrarse */}
      <TouchableOpacity 
        onPress={() => navigation.navigate("Registro")}
        style={styles.linkContainer}
      >
        <Text style={styles.linkText}>¿No tienes cuenta? </Text>
        <Text style={styles.linkTextBold}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  linkText: {
    color: '#666',
    fontSize: 16,
  },
  linkTextBold: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
