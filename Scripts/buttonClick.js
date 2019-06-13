const getAllOwnerButtonclick = () => {
    let url ="http://localhost:9966/petclinic/api/owners";
    let httpMethod = "GET";
    makeRequest(httpMethod, url);
}