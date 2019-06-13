// $.getScript("APIController.js", makeRequest(method, url, body) {
//     makeRequest(method, url, body);
// });

const getAllOwners = () => {
    let url ="http://localhost:9966/petclinic/api/owners";
    let httpMethod = "GET";
    makeRequest(httpMethod, url);
}

const getOwnerByLastName = () => {
    // lastName field from site
    let lastName = document.getElementById();
    let url =`http://localhost:9966/petclinic/api/owners/*/lastname/{lastName}`;
    let httpMethod = "GET";
    makeRequest(httpMethod, url);
}

const getOwnerById = () => {
    //owner id
    let id = document
    let url =`http://localhost:9966/petclinic/api/owners/{id}`;
    let httpMethod = "GET";
    makeRequest(httpMethod, url);
}

const addNewOwner = () => {
    //add owner object properties from fields in HTML
    const owner = {

    };
    let url = "http://localhost:9966/petclinic/api/owners";
    let httpMethod = "POST";
    makeRequest(httpMethod, url, JSON.stringify(owner));
}

const deleteOwner = () => {
    //owner id
    let id = document
    let url =`http://localhost:9966/petclinic/api/owners/{id}`;
    let httpMethod = "DELETE";
    makeRequest(httpMethod, url);
}

const updateOwner = () => {
    //owner id
    let id = document
    //add owner object properties from fields in HTML
    const owner = {

    };
    let url =`http://localhost:9966/petclinic/api/owners/{id}`;
    let httpMethod = "DELETE";
    makeRequest(httpMethod, url, JSON.stringify(owner));
}