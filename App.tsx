import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/screens/Home";
import { Routes } from "./src/routes";
import { MovieProvider } from "./src/context/MoviesContext";

export default function App() {
  return (
    <>
      <MovieProvider>
        <Routes />
        <StatusBar style="auto" />
      </MovieProvider>
    </>
  );
}
