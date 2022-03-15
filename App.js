import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native'
import React, {useEffect, useState} from 'react';
import { getAuth } from "firebase/auth";
import Auth from './src/components/Auth';
import app from './src/utils/firebase';

const App = () => {

  const [user, setUser] = useState(undefined);

  const auth = getAuth(app);

  useEffect(() => {
    auth.onAuthStateChanged((response) => {
      setUser(response)
    })
  }, [])


  return (
    <>
    <StatusBar barStyle='light-content' />
    <SafeAreaView style={styles.background}>
      { user ? (<Text> estas logueado</Text>) : ( <Auth /> )}
    </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  background:{
    backgroundColor: "#200a23",
    height: "100%"
  }
})