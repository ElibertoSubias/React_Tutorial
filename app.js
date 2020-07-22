const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    //Pasar cantidad a la API
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //Llamado a Ajax
    const xhr = new XMLHttpRequest();

    //Abrir la conexion
    xhr.open('GET',api,true);

    //On load
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.status));
        }
    }

    //opcional (on error)
    xhr.onerror = (error) => reject (error);

    // send
    xhr.send()

});

descargarUsuarios(3).
    then(
        miembros => console.log(miembros),
        error => console.error(
            new Error('Hubo un error' + error)
        )
    )