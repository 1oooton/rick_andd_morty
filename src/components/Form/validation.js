export default function validation(inputs){
     const regexEmail=/\S+@\S+\.\S+/;
     const regexPass=new RegExp("[0-9]");
    const errors={};
    if(!regexEmail.test(inputs.username)){
        errors.username="debe ser un gmail valido"
    }
    if(!inputs.username){
        errors.username="El nombre es obligatorio"
    }
    if(inputs.username.length>35){
        errors.username="Maximo 35 caracteres "
    }
    if(regexPass.test(inputs.password)){
        errors.password="al menos 1 numero "
    }
    if(inputs.password.length < 6 || inputs.password.length > 10  ){
        errors.password="entre 6 y 10 caracteres "
    }

    return errors;
}
