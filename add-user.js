let buttonGenerate = document.querySelector("#generate");
let divPeople = document.querySelector("#people");

buttonGenerate.addEventListener('click',event =>{
    fetch('https://randomuser.me/api/')
    .then(function(result){
        return result.json()
    }).then(function(person){
        console.log(person.results[0])
        
        divPeople.innerHTML += `
        <div id="person">
            <h2>${person.results[0].name.first + " " + person.results[0].name.last}</h2> </br>
            <img src="${person.results[0].picture.large}"></img></br>
            <h3>${person.results[0].email}</h3>
        </div>
        `
    }) 
})