function validar() {

    // Variables
    let nameUser = new String();
    let emailUser = new String();
    let passUser = new String();

    nameUser = document.getElementById('userName').value;
    emailUser = document.getElementById('userEmail').value;
    passUser = document.getElementById('userPass').value;

    if(nameUser.length == 0) {

        console.log("NO HA ESCRITO NADA");

    } else {

        console.log("Ha escrito el siguiente nombre:", nameUser);
    }

    if(emailUser.length == 0) {

        console.log("NO HA ESCRITO NADA");

    } else {

        console.log("Ha escrito el siguiente email:", emailUser);
    }

    if(passUser.length == 0) {

        console.log("NO HA ESCRITO NADA");

    } else {

        console.log("Ha escrito el siguiente clave:", passUser);
    }
}