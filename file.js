const {avengers} = require('./heros')

const hello = ()=>{ 
    return {
        team: "ManUtd",
    player: "Ronaldo",
    heros: avengers()
    }
}

function hi(){
    return {
        food: "Ugali"
    }
}


//exporting
module.exports = {hello, hi}