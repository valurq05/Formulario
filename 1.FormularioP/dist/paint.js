import{form} from "./main.js";
const cardsEstudiantes = document.querySelector("#cardsEstudiantes");
const cardsProfesor = document.querySelector("#cardsProfesor");

let flagSend = 0;

const addStudent = (name, lastName, mail, tele, ocup, msn) =>{
    let person = {
        pname: name,
        plastName: lastName,
        pmail: mail,
        ptele: tele,
        pOcupacion: ocup,
        pmsn: msn
    }

    let text = `¿Está segur@ ${person.pname} ${person.plastName} 
    de enviar la petición?`
    modalAlert(text, "aceptar", person);

}

const addProfesor = (name, lastName, mail, tele, ocup, msn) =>{
    let person = {
        pname: name,
        plastName: lastName,
        pmail: mail,
        ptele: tele,
        pOcupacion: ocup,
        pmsn: msn
    }

    let text = `¿Está segur@ ${person.pname} ${person.plastName} 
    de enviar la petición?`
    modalAlert(text, "aceptar", person);

}

function modalAlert(cadena, tipo, persona){

    const alerta = document.createElement("div");
    const texto = document.createElement("p");
    const btnCerrar = document.createElement("input");

    alerta.setAttribute("id", "alerta")
    alerta.setAttribute("class", "alerta");
    texto.setAttribute("class", "textAlerta");
    texto.innerHTML = `<strong>${cadena}</strong>`
    btnCerrar.setAttribute("type", "button");
    btnCerrar.setAttribute("class", "btnAlerta");
    btnCerrar.setAttribute("value", "Cerrar");
    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);
    
    if (tipo === "aceptar") {
        const btnEnviar = document.createElement("input");
        btnEnviar.setAttribute("type", "button");
        btnEnviar.setAttribute("class", "btnAlerta");
        btnEnviar.setAttribute("value", "Enviar");
        alerta.appendChild(btnEnviar);
        document.body.appendChild(alerta);
        btnEnviar.onclick = function(){
        paintCard(persona,"");
        flagSend = 1;
        document.getElementById("alerta").remove();
        }
    
    }else{
        document.body.appendChild(alerta);
    }

    btnCerrar.onclick = function(){
        document.getElementById("alerta").remove();
    }

}

    const paintCard = (datos, tipo) => {
        const ocupt = document.getElementById("ocup").value;
        console.log(ocupt);
        tipo = ocupt.toUpperCase();
        const fragmento = document.createDocumentFragment();
        const temEstudiante = document.getElementById('templateEstudiante').content;
        const temProfesor = document.getElementById('templateProfesor').content;

        if(tipo == "ESTUDIANTE"){
            form.reset()
            let temTemplate = temEstudiante.cloneNode(true);
            temTemplate.querySelector('.title-card').innerHTML = `DATOS DEL PQR: Estudiante <hr>`;
            temTemplate.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
            temTemplate.querySelector('.text-mail').innerHTML = `Correo electrónico: ${datos.pmail}`;
            temTemplate.querySelector('.text-telefono').innerHTML = `Teléfono: ${datos.ptele}`;
            temTemplate.querySelector('.text-ocupacion').innerHTML = `Ocupación: ${datos.pOcupacion}`;
            temTemplate.querySelector('.text-msn').innerHTML = `Mensaje: ${datos.pmsn}`;

            fragmento.appendChild(temTemplate);
            cardsEstudiantes.appendChild(fragmento);
          
        }else if(tipo == "PROFESOR"){
            form.reset();
            let temTemplate = temProfesor.cloneNode(true);
            temTemplate.querySelector('.title-card').innerHTML = `DATOS DEL PQR: Profesor <hr>`;
            temTemplate.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
            temTemplate.querySelector('.text-mail').innerHTML = `Correo electrónico: ${datos.pmail}`;
            temTemplate.querySelector('.text-telefono').innerHTML = `Teléfono: ${datos.ptele}`;
            temTemplate.querySelector('.text-ocupacion').innerHTML = `Ocupación: ${datos.pOcupacion}`;
            temTemplate.querySelector('.text-msn').innerHTML = `Mensaje: ${datos.pmsn}`;

            fragmento.appendChild(temTemplate);
            cardsProfesor.appendChild(fragmento);
           
        }
    }


export{addStudent, addProfesor, modalAlert}



