$.getScript("APIController.js", makeRequest(method, url, body) {
    makeRequest(method, url, body);
});

const addNewPet = () => {
    //add owner object properties from fields in HTML
    const birthdatte = Number(document.getElementById("address").value);
    const city = document.getElementById("city").value;
    const firstName = document.getElementById("firstName").value;
    const id = document.getElementById("ownerId").value;
    const lastName = document.getElementById("lastName").value;
    const telephone = document.getElementById("telephone").value;
    const owner = { address: address, city: city, firstName: firstName, id: id, lastName: lastName, pets: pets, telephone: telephone };
    let url = "http://localhost:9966/petclinic/api/owners";
    let httpMethod = "POST";
    makeRequest(httpMethod, url, JSON.stringify(owner));
}

const getPets = () => {
    let url ="http://localhost:9966/petclinic/api/pets";
    let httpMethod = "GET";
    makeRequest(httpMethod, url);
}

const getPet = () => {
    //owner id
    let id = document
    let url =`http://localhost:9966/petclinic/api/pets/{petid}`;
    let httpMethod = "GET";
    makeRequest(httpMethod, url);
}

const getPetTypes = () => {
    //owner id
    let id = document
    let url =`http://localhost:9966/petclinic/api/pets/pettypes`;
    let httpMethod = "GET";
    makeRequest(httpMethod, url);
}

const addPet = () => {
    //add owner object properties from fields in HTML
    const Pet = {

    };
    let url = "http://localhost:9966/petsclinic/api/pets";
    let httpMethod = "POST";
    makeRequest(httpMethod, url, JSON.stringify(pets));
}

const deletePet = () => {
    //owner id
    let id = document
    let url =`http://localhost:9966/petclinic/api/pets/{petid}`;
    let httpMethod = "DELETE";
    makeRequest(httpMethod, url);
}

const updatePet = () => {
    //owner id
    let id = document
    //add owner object properties from fields in HTML
    const pets = {

    };
    let url =`http://localhost:9966/petclinic/api/pets/{petid}`;
    let httpMethod = "DELETE";
    makeRequest(httpMethod, url, JSON.stringify(pets));
}