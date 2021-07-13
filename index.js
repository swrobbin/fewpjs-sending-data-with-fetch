// Add your code here
const body = document.querySelector("body")

function submitData(userName, userEmail){
    const configurationObject = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
          })
      }; 
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function(response) {
        return response.json();
      })
      .then(data => {
        const newId = data.id;
        const p = document.createElement('p');
        const newContent = document.createTextNode(newId);
        p.appendChild(newContent);
        document.body.appendChild(p);
      })
      .catch(function(error){
        const err = error.message;
        const para = document.createElement('p');
        const newErrMessage = document.createTextNode(error.message);
        para.appendChild(newErrMessage);
        document.body.appendChild(para);

    })
}
    

// Use a second then() to access this newly converted object. 
//From this object, find the new id and append this value to the DOM.


// When writing the callback function for your catch(), expect 
// to receive an object on error with a property, message, 
// containing info about what went wrong. Write code to append 
// this message to the DOM when catch() is called.