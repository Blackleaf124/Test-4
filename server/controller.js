const database = []

//Not completely sure, but it holds all our functions that do the work to get the data that we ask for in our front end and server .js files.
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // chooses random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["You will find onion chips under your pillow tonight.", "Disney Land girl will want to go out with Hunter again.", "You will lose to a duel with an evil clone of yourself that knows fire magic.", "You will gain the powers of a humming bird and fight crime.", "Austin will rise up as a super villian and you will be forced to stop him with the power of love.", "You will be aware of your own breathing for the next 3 minutes.", "The next dog you pet will smell really bad."];

        // chooses random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
    submitPerson: (req, res) => {
        console.log('heyo')
        console.log(req.body);
        console.log('asdf')
        const name = req.body.name
        const power = req.body.power

        const newObj = {
            name: name,
            power: power
        }

        database.push(newObj)

        res.status(200).send(database)
    }
}