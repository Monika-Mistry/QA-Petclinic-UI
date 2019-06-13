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
    if (result[0] !== undefined || result.id !== undefined) {
        //create table tags and headings
        let node = document.createElement("tbody");
        node.setAttribute("id", "tbody");
        document.getElementById("results").appendChild(node);
        let tr = "<tr>";
        tr += "<td>|- ID -|</td><td>|---- Name ----|</td><td>|-- Birth Date --|</td><td>|-- Type --|</td><td>|--- Owner First Name ---|</td><td>|-- Owner Last Name --|</td><td>|-- Telephone Number --|</td><td>|Number of Visits|</td></tr>";
        if (result[0] !== undefined) {
            for (let i = 0; i < result.length; i++) {
                //output to table
                tr += "<td>" + result[i].id + "   </td><td>" + result[i].name + "   </td><td>" + result[i].birthDate + "   </td><td>" + result[i].type.name + "   </td><td>" + result[i].owner.firstName + "   </td><td>" + result[i].owner.lastName + "   </td><td>" + result[i].owner.telephone + "   </td><td>" + result[i].visits.length + "   </td></tr>";
            }
            tbody.innerHTML += tr;
        } else {
            tr += "<td>" + result[i].id + "   </td><td>" + result[i].name + "   </td><td>" + result[i].birthDate + "   </td><td>" + result[i].type.name + "   </td><td>" + result[i].owner.firstName + "   </td><td>" + result[i].owner.lastName + "   </td><td>" + result[i].owner.telephone + "   </td><td>" + result[i].visits.length + "   </td></tr>";
            tbody.innerHTML += tr;
        }
    } else {
        let textnode = document.createTextNode("Success!");
        let node = document.createElement("div");
        node.setAttribute("id", "return");
        node.appendChild(textnode);
        document.getElementById("results").appendChild(node);
    }
}

function rejected(reason) {
    alert("An Error occured. Please check input.\n" + reason);
    console.log(reason);
}

function testClick() {
    let type = "GET";
    let url = "http://localhost:9966/petclinic/api/pets";
    makeRequest(type, url)
}