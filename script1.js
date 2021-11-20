
// onload set votes



// gets items from local storage for 'dogVotes'
let dogVotes = localStorage.getItem('dogVotes');
if (dogVotes === null) {
    dogVotes = 0;
} else {
    dogVotes = parseInt(dogVotes)
}  
document.querySelector("#doggo-votes").textContent = dogVotes;




// gets items from local storage for 'catVotes'
let catVotes = localStorage.getItem('catVotes');
if (catVotes === null) {
    catVotes = 0;
} else {
    catVotes = parseInt(catVotes)
}  
document.querySelector("#catto-votes").textContent = catVotes;




// gets items from local storage for 'fishVotes'
let fishVotes = localStorage.getItem('fishVotes');
if (fishVotes === null) {
    fishVotes = 0;
} else {
    fishVotes = parseInt(fishVotes)
}  
document.querySelector("#fish-votes").textContent = fishVotes;


///////



// selectors for each individual animal div 
let dogDiv = document.querySelector("#doggo");
let catDiv = document.querySelector("#catto");
let fishDiv = document.querySelector("#fish");




///////

// creating and append our dog vote button
let dogVoteBtn = document.createElement('button');
dogVoteBtn.textContent = "Vote for Doggo";
dogDiv.append(dogVoteBtn);


// add event listener to our dog vote button, and update #doggo-votes with each click.
// setItem in localStorage to keeep track of our dogVotes
// also update "total-votes" with each click 
dogVoteBtn.addEventListener('click', function(){
    dogVotes = dogVotes + 1;
    document.querySelector("#doggo-votes").textContent = dogVotes;
    //sets the item in local storage, then we retrieve it AT TOP OF this PAGE using getItem. 
    localStorage.setItem('dogVotes', dogVotes);

    
})

///////

// create and append our cat vote button
let catVoteBtn = document.createElement('button');
catVoteBtn.textContent = "Vote for Catto";
catDiv.append(catVoteBtn);


// add event listener to our cat vote button, and update #catto-votes with each click.
catVoteBtn.addEventListener('click', function(){
    catVotes = catVotes + 1;
    document.querySelector("#catto-votes").textContent = catVotes;
    //sets the item in local storage, then we retrieve it AT TOP OF PAGE using getItem. 
    localStorage.setItem('catVotes', catVotes);

    
})


///////

// create and append our fish vote button
let fishVoteBtn = document.createElement('button');
fishVoteBtn.textContent = "Vote for Fish";
fishDiv.append(fishVoteBtn);

fishVoteBtn.addEventListener('click', function(){
    fishVotes = fishVotes + 1;
    document.querySelector("#fish-votes").textContent = fishVotes;
    //sets the item in local storage, then we retrieve it AT TOP OF PAGE using getItem. 
    localStorage.setItem('fishVotes', fishVotes);
    
})

