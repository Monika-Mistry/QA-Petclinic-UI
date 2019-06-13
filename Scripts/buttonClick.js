// $.getScript("APIController.js", makeRequest(method, url, body) {
//     makeRequest(method, url, body);
// });

const getAllOwners = () => {
    let url = "http://localhost:9966/petclinic/api/owners";
    let httpMethod = "GET";
    makeRequest(httpMethod, url);
}

const getOwnerByLastName = () => {
    // lastName field from site
    let lastName = document.getElementById();
    let url = `http://localhost:9966/petclinic/api/owners/*/lastname/{lastName}`;
    let httpMethod = "GET";
    makeRequest(httpMethod, url);
}

const getOwnerById = () => {
    //owner id
    let id = document.getElementById("ownerId");
    let url = `http://localhost:9966/petclinic/api/owners/{id}`;
    let httpMethod = "GET";
    makeRequest(httpMethod, url);
}

const addNewOwner = () => {
    //add owner object properties from fields in HTML
    const address = Number(document.getElementById("address").value);
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

const deleteOwner = () => {
    //owner id
    let id = document.getElementById("ownerId");
    let url = `http://localhost:9966/petclinic/api/owners/{id}`;
    let httpMethod = "DELETE";
    makeRequest(httpMethod, url);
}

const updateOwner = () => {
    let id = document.getElementById("ownerId");
    //owner id
    const address = Number(document.getElementById("address").value);
    const city = document.getElementById("city").value;
    const firstName = document.getElementById("firstName").value;
    const id = document.getElementById("ownerId").value;
    const lastName = document.getElementById("lastName").value;
    const telephone = document.getElementById("telephone").value;
    //add owner object properties from fields in HTML
    const owner = { address: address, city: city, firstName: firstName, id: id, lastName: lastName, pets: pets, telephone: telephone };
    let url = `http://localhost:9966/petclinic/api/owners/{id}`;
    let httpMethod = "DELETE";
    makeRequest(httpMethod, url, JSON.stringify(owner));
}