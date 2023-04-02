import {Validate} from "./validate.js";
import { addProfesor, addStudent, modalAlert } from "./paint.js";
const btnEnviar = document.getElementById("btnEnviar");
const form = document.getElementById("fmContact");

let validator = new Validate();

const objectValid = {
    nameObject: false,
    lastNameObject: false,
    mailObject: false,
    teleObject: false,
    ocupObject: false,
    msnObject: false
};


form.addEventListener('change', function(event){
    const inputId = event.target.id;
    console.log(inputId);
    const inputValue = event.target.value;
    console.log(inputValue);
    const inputClass = event.target.classList;
    console.log(inputClass);


    const validClass = () =>{
        inputClass.add("is-valid");
        inputClass.remove("is-invalid");
    }
    const invalidClass = () =>{
        inputClass.add("is-invalid");
        inputClass.remove("is-valid");
    }

    switch(inputId){
        case "name":
            objectValid.nameObject = validator.validNames(inputValue);
            objectValid.nameObject ? validClass() : invalidClass(); //ternario
            console.log(Object.values(objectValid));
            break;
        case "lastName":
            objectValid.lastNameObject = validator.validNames(inputValue);
            objectValid.lastNameObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case "mail":
            objectValid.mailObject = validator.validMail(inputValue);
            objectValid.mailObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case "telephone":
            objectValid.teleObject = validator.validTele(inputValue);    
            objectValid.teleObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case "fm_contact":
            objectValid.msnObject = validator.validMsn(inputValue);
            objectValid.msnObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break;
        case "ocup":
            objectValid.ocupObject = validator.validOcu(inputValue);    
            objectValid.ocupObject ? validClass() : invalidClass();
            console.log(Object.values(objectValid));
            break; 
        }
});

btnEnviar.addEventListener('click', (e) =>{
    e.preventDefault();
    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('lastName').value;
    const correo = document.getElementById('mail').value;
    const telefono = document.getElementById('telephone').value;
    const ocupacion = document.getElementById('ocup').value;
    const mensaje = document.getElementById('fm_contact').value;
    

    if(validator.validForm(objectValid) === -1) {
        const ocu = document.getElementById("ocupacion").value;
        if(ocu === "estudiante"){
            addStudent(nombre, apellido, correo, telefono, ocupacion, mensaje);
            }else{
                addProfesor(nombre, apellido, correo, telefono, ocupacion, mensaje);
            }
        }else{
            modalAlert("Error");
        }
    });

    export{form};



