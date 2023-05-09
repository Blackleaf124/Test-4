const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const excuseBtn = document.getElementById("excuseButton")
const dataShownHereDiv = document.getElementById("data-shown-here")
const postForm = document.getElementById('post-form')
const postName = document.getElementById('post-name')
const postPower = document.getElementById('post-power')
const deleteForm = document.getElementById('delete-form')
const deleteName = document.getElementById('delete-name')


//Gets the data containing a random compliment from the back end and saves it to the "data" variable. Then creates an alert that displays that compliment.
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data)
    });
}

//Gets the data containing a random fortune from the back end and saves it to the "data" variable. Then creates an alert that displays that fortune.
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data)
    });
}

const getExcuse = () => {
    axios.get("http://localhost:4000/api/excuse/")
        .then(res => {
            const data = res.data;
            alert(data)
    });
}

postForm.addEventListener('submit', (event) => {
    event.preventDefault()

    let myBody = {
        name: postName.value,
        power: postPower.value,
    }

    console.log(myBody)

    axios.post("http://localhost:4000/api/submit-person", myBody)
    .then((response) => {
        const database = response.data
        showDatabase(database)

    })
    .catch(() => {

    })
})

deleteForm.addEventListener('submit', (event) => {
    event.preventDefault()
    axios.delete('http://localhost:4000/api/delete-person?name=' + deleteName.value)
    .then((response) => {
        showDatabase(response.data)
    })
    .catch(() => {
        console.log("Error");
    })
})

const showDatabase = (db) => {
    dataShownHereDiv.innerHTML = ''

    for (let i = 0; i < db.length; i++) {
        let dataP = document.createElement('p')

        dataP.innerHTML = `${db[i].name} has a power of ${db[i].power}`
        
        dataShownHereDiv.appendChild(dataP)
    }
}


//Listens for a click on the respective buttons and then executes the callback function.
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
excuseBtn.addEventListener('click', getExcuse)