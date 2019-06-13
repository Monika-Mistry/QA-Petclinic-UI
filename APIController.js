

function makeRequest(reqType, url, body) {
    let req = new XMLHttpRequest();
    req.onload = function () {
        const el = document.getElementById('results');
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
        promises(req);
    }
    req.open(reqType, url);
    req.send(body);
}

function promises(req) {
    const createPromise = new Promise(
        function (res, rej) {
            if (req.status === 200) {
                let result = JSON.parse(req.responseText);
                res(result);
            } else {
                const reason = new Error(req.status);
                rej(reason);
            }
        }
    )
    createPromise
        .then(result => resolved(result))
        .catch(error => rejected(error))
}

function resolved(result) {
    //create table tags
    let node = document.createElement("tbody");
    node.setAttribute("id", "treturn");
    document.getElementById("results").appendChild(node);

    for (let i = 0; i < result.length; i++) {
        //output to table
        let tr = "<tr>";
        let petstring = "";
        for (let j = 0; j < result.pets.length; j++) {
            petsting += result.pets[j].name + ", ";
        }
        tr += "<td>" + result[i].id + "</td><td>$" + result[i].firstName + "</td><td>$" + result[i].lastName + "</td><td>$" + result[i].address + "</td><td>$" + result[i].city + "</td><td>$" + result[i].telephone + "</td><td>$" + petstring + "</td></tr>";
        tbody.innerHTML += tr;
    }

}

function rejected(reason) {
    alert("An Error occured. Please check input.\n" + reason);
    console.log(reason);
}