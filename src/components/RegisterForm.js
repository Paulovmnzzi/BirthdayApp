import { StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import validarRegistro from './../utils/validations';

const RegisterForm = ({ changeForm }) => {

    const [dataForm, setDataForm] = useState({ email: '', password: '', password2: '' });
    const [errores, setErrores] = useState({ email: false, password: false, password2: false, error: '' });

    const handleRegister = () => {

        validarRegistro(dataForm, setErrores);

    }

    return (
        <>
            { errores.email && (<Text style={styles.warning}> {errores.error} </Text>)}
            <TextInput
                style={[styles.input, errores.email && styles.error]}
                placeholder='Correo electronico'
                placeholderTextColor="#969696"
                onChange={e => (setDataForm({ ...dataForm, email: e.nativeEvent.text }), console.log(dataForm))}
            />
            { errores.password && (<Text style={styles.warning}> {errores.error} </Text>)}
            <TextInput
                style={[styles.input, errores.password && styles.error]}
                placeholder='Contraseña'
                secureTextEntry={true}
                placeholderTextColor="#969696"
                onChange={e => (setDataForm({ ...dataForm, password: e.nativeEvent.text }), console.log(dataForm))}
            />
            { errores.password2 && (<Text style={styles.warning}> {errores.error} </Text>)}
            <TextInput
                style={[styles.input, 
                    errores.password2 && styles.error]}
                placeholder='Repetir contraseña'
                secureTextEntry={true}
                placeholderTextColor="#969696"
                onChange={e => (setDataForm({ ...dataForm, password2: e.nativeEvent.text }), console.log(dataForm))}
            />
            <TouchableOpacity onPress={() => handleRegister()} >
                <Text style={styles.btnText}>Registrarse</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={changeForm} style={styles.login} >
                <Text style={styles.btnText}>Iniciar sesión</Text>
            </TouchableOpacity>
        </>
    )
}

export default RegisterForm;

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
    login: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    error: {
        borderColor: 'red'
    },
    warning: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '400',
        letterSpacing: 2,
        marginBottom: 3
    }
})