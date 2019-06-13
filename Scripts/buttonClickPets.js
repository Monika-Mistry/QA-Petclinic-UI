$.getScript("APIController.js", makeRequest(method, url, body) {
    makeRequest(method, url, body);
});

const addPet = () => {
    //add owner object properties from fields in HTML
    const birthDate = Number(document.getElementById("birthDate").value);
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const type = { type: type, id: id, name: name };
    const owner = { address: address, city: city, firstName: firstName, id: id, lastName: lastName, pets: pets, telephone: telephone };
    const visits = { date: date, description: description, id: id, pet: pet };
    const newPet = {birthDate: birthDate, id: id, name: name, owner: owner, type: type, visits: visits };

    let url = "http://localhost:9966/petclinic/api/pets";
    let httpMethod = "POST";
    makeRequest(httpMethod, url, JSON.stringify(newPet));

}

const getPets = () => {
    let url = "http://localhost:9966/petclinic/api/pets";
    let httpMethod = "GET";
    makeRequest(httpMethod, url);
}

const getPet = () => {
    //owner id
    let id = document
    let url = `http://localhost:9966/petclinic/api/pets/{petid}`;
    let httpMethod = "GET";
    makeRequest(httpMethod, url);
}

const getPetTypes = () => {
    //owner id
    let id = document
    let url = `http://localhost:9966/petclinic/api/pets/pettypes`;
    let httpMethod = "GET";
    makeRequest(httpMethod, url);
}



const deletePet = () => {
    //owner id
    let id = document
    let url = `http://localhost:9966/petclinic/api/pets/{petid}`;
    let httpMethod = "DELETE";
    makeRequest(httpMethod, url);
}

const updatePet = () => {
    //owner id
    let id = document
    //add owner object properties from fields in HTML
    const pets = {

    };
    let url = `http://localhost:9966/petclinic/api/pets/{petid}`;
    let httpMethod = "DELETE";
    makeRequest(httpMethod, url, JSON.stringify(pets));
}