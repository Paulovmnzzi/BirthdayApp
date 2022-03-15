import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Auth = () => {

    const [isLogin, setIsLogin] = useState(true);

    const changeForm = () => {
        setIsLogin(!isLogin)
    }

  return (
    <View style={styles.view} >
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        {isLogin ? <LoginForm changeForm={changeForm} /> : <RegisterForm changeForm={changeForm} />} 
    </View>
  )
}

export default Auth;

const styles = StyleSheet.create({
    view:{
        flex: 1,
        alignItems: 'center'
    },
    logo:{
        width: '80%',
        height: 240,
        marginVertical: 40,
    }
})