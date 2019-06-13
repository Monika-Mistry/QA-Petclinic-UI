

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
    if (result.id === undefined) {
        if (result[0] !== undefined) {
            for (let c in result) {
                //output to table
                let output;
                let node = document.createElement("div");
                let textnode = document.createTextNode(output);
                node.setAttribute("id", "return" + c);
                node.appendChild(textnode);
                document.getElementById("results").appendChild(node);
            }
        } else {
            //message output (deleted object)

            let node = document.createElement("div");
            node.setAttribute("id", "return");
            node.appendChild(textnode);
            document.getElementById("results").appendChild(node);
        }
    } else {
        //output for 1 result
        let output;
        let textnode = document.createTextNode(output);
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