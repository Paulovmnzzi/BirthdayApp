import isEmail from 'validator/es/lib/isEmail';


const validarRegistro = ({ email, password, password2 }, setErrores) => {

    let errores = {email: false, password: false, password2: false, error: ''};

    if (email && password && password2) {
        if(!isEmail(email)){
            errores.email = true;
            errores.error = 'Debe ingresar un email correcto'
            console.log('validar email: ', !isEmail(email))
        }
        if(password !== password2) {
            errores.password = true;
            errores.password2 = true;
            errores.error = 'Las contraseñas deben coincidir'
        }
        if(password.length <= 5){
            errores.password = true;
            errores.error = 'La contraseña debe ser de más de 5 caracteres.'
        }
    } else {
        if(!email) {errores.email = true; errores.error = 'Por favor complete todos los campos' };
        if(!password) errores.password = true; errores.error = 'Por favor complete todos los campos' 
        if(!password2) errores.password2 = true; errores.error = 'Por favor complete todos los campos' 

    }

    setErrores(errores);

};




export default validarRegistro;