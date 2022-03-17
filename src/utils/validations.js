import isEmail from 'validator/es/lib/isEmail';


const validarRegistro = ({ email, password, password2 }, setErrores) => {

    let errores = {email: false, password: false, password2: false};

    if (email && password && password2) {
        if(!isEmail(email)){
            errores.email = true;
            console.log('validar email: ', !isEmail(email))
        }
        if(password !== password2) {
            errores.password = true;
            errores.password2 = true;
        }
    } else {
        if(!email) errores.email = true;
        if(!password) errores.password = true;
        if(!password2) errores.password2 = true;
    }

    setErrores(errores);

};




export default validarRegistro;