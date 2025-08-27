import React from "react";
import { SafeAreaView } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import Settings from "./src/screens/Settings";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* 👇 Cambia el componente que quieras mostrar */}
      <LoginScreen />
      {/* <Settings /> */}
    </SafeAreaView>
  );
}
