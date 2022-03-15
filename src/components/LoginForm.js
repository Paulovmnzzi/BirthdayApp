import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginForm = ({ changeForm }) => {
    return (
        <>
            <TextInput
                style={styles.input}
                placeholder='Correo electronico'
                placeholderTextColor="#969696"
            />
            <TextInput
                style={styles.input}
                placeholder='Contraseña'
                secureTextEntry={true}
                placeholderTextColor="#969696"
            />
            <TouchableOpacity >
                <Text style={styles.btnText}>Iniciar sesión</Text>
            </TouchableOpacity>
            <View style={styles.login}>
                <TouchableOpacity onPress={changeForm} >
                    <Text style={styles.btnText}>Registrarse</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    btnText: {
        color: 'white',
        fontSize: 18,
        marginTop: 5
    },
    input: {
        height: 40,
        color: 'white',
        width: '80%',
        marginBottom: 20,
        backgroundColor: '#1e3040',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#1e3040'
    },
    login:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20
    }
})