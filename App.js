import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: "AIzaSyDS71vPK6Rm6QFvxqS6hRu6xS4aZ2Bn48A",
  authDomain: "react-app-mod5.firebaseapp.com",
  databaseURL: "https://react-app-mod5.firebaseio.com",
  projectId: "react-app-mod5",
  storageBucket: "react-app-mod5.appspot.com",
  messagingSenderId: "256285827591",
  appId: "1:256285827591:web:8683f480d0d6ddb2e540a2",
  measurementId: "G-6MYC3RMQPB"
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
