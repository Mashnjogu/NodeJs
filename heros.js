const {countries} = require('./countries')

function avengers(){
    return {
        captainAmerica: "Steve Rogers",
        ironMain: "Tony Stark",
        spiderMan: "Peter Parker",
        thor: "Thor",
        batman: "Bruce Wayne",
        superMan: "Clerk Kent",
        countries: countries()
    }
}

//export
module.exports = {avengers}
