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
        //create table tags
        let node = document.createElement("tbody");
        node.setAttribute("id", "tbody");
        document.getElementById("results").appendChild(node);
        let tr = "<tr>";
        tr += "<td>|-- ID --|</td><td>|---- First Name ----|</td><td>|---- Last Name ----|</td><td>|---------- Address ----------|</td><td>|------ City ------|</td><td>|---- Telephone Number ----|</td><td>|-------- Pets --------|</td></tr>";
        // tbody.innerHTML += tr;
        if (result[0] !== undefined) {
            for (let i = 0; i < result.length; i++) {
                //output to table
                let petstring = "";
                for (let j = 0; j < result[i].pets.length; j++) {
                    petstring += result[i].pets[j].name + ", ";
                }
                tr += "<td>" + result[i].id + "   </td><td>" + result[i].firstName + "   </td><td>" + result[i].lastName + "   </td><td>" + result[i].address + "   </td><td>" + result[i].city + "   </td><td>" + result[i].telephone + "   </td><td>" + petstring + "   </td></tr>";
                // tbody.innerHTML += tr;
            }
            tbody.innerHTML += tr;
        } else {
            let petstring = "";
            for (let j = 0; j < result.pets.length; j++) {
                petstring += result.pets[j].name + ", ";
            }
            tr += "<td>" + result[i].id + "</td><td>$" + result[i].firstName + "</td><td>$" + result[i].lastName + "</td><td>$" + result[i].address + "</td><td>$" + result[i].city + "</td><td>$" + result[i].telephone + "</td><td>$" + petstring + "</td></tr>";
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

function testClick(){
    let type = "GET";
    let url = "http://localhost:9966/petclinic/api/owners";
    makeRequest(type, url)
}