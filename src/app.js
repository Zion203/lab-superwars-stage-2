const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for(let i=1;i<=20;i++){
        if (i<=10){
            detailedPlayers.push({name:players[i-1],strength:getRandomStrength(),image:`./images/super-${i}.png`,type:'hero'})
        }else{
            detailedPlayers.push({name:players[i-1],strength:getRandomStrength(),image:`./images/super-${i}.png`,type:'villain'})
        }
       
    }

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    return Math.floor(Math.random()*101)

}

const buildPlayers = (players, type) => {
    let fragment = ''
    for(let i=0;i<20;i++){
       if(type=="hero"&& players[i].type=="hero"){
        
        fragment=fragment+`<div class="player"><img src="${players[i].image}"><div class="name">${players[i].name}</div><div class="strength">${players[i].strength}</div></div>`
       }else if (type=="villain" && players[i].type=="villain"){
        fragment=fragment+`<div class="player"><img src="${players[i].image}"><div class="name">${players[i].name}</div><div class="strength">${players[i].strength}</div></div>`

       }
    }

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

        

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}