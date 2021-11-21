
// onload set votes



// gets items from local storage for 'dogVotes'
let dogVotesTd = document.querySelector("#doggo-votes")
let dogVotes = localStorage.getItem('dogVotes');
if (dogVotes === null) {
    dogVotes = 0;
} else {
    dogVotes = parseInt(dogVotes)
}  

document.querySelector("#doggo-votes").textContent = dogVotes;




// gets items from local storage for 'catVotes'
let catVotesTd = document.querySelector("#catto-votes")
let catVotes = localStorage.getItem('catVotes');
if (catVotes === null) {
    catVotes = 0;
} else {
    catVotes = parseInt(catVotes)
}  
document.querySelector("#catto-votes").textContent = catVotes;




// gets items from local storage for 'fishVotes'
let fishVotesTd = document.querySelector("#fish-votes")
let fishVotes = localStorage.getItem('fishVotes');
if (fishVotes === null) {
    fishVotes = 0;
} else {
    fishVotes = parseInt(fishVotes)
}  
document.querySelector("#fish-votes").textContent = fishVotes;


///////
// ties in total vote column
let totalVotesTd = document.querySelector("#total-votes");

// selectors for each individual animal div 
let dogDiv = document.querySelector("#doggo");
let catDiv = document.querySelector("#catto");
let fishDiv = document.querySelector("#fish");





///////

// creating and append our dog vote button
let dogVoteBtn = document.createElement('button');
dogVoteBtn.textContent = "+ Vote for Doggo";
dogDiv.append(dogVoteBtn);


// add event listener to our dog vote button, and update #doggo-votes with each click.
// setItem in localStorage to keeep track of our dogVotes
// also update "total-votes" with each click 
dogVoteBtn.addEventListener('click', function(){
    dogVotes = dogVotes + 1;
    document.querySelector("#doggo-votes").textContent = dogVotes;
//sets the item in local storage, then we retrieve it AT TOP OF this PAGE using getItem. 
    localStorage.setItem('dogVotes', dogVotes);

// adds to total vote column by adding all three together
    totalVotesTd.textContent = dogVotes + catVotes + fishVotes;
})


// create dog vote MINUS button
let SubdogVoteBtn = document.createElement("button")
SubdogVoteBtn.textContent = "- Vote for Doggo"
dogDiv.append(SubdogVoteBtn)

SubdogVoteBtn.addEventListener('click', function(e) {
        dogVotes = dogVotes - 1;
        dogVotesTd.textContent = dogVotes;
        localStorage.setItem('dogVotes', dogVotes);
        
        totalVotesTd.textContent = dogVotes + catVotes + fishVotes

       
});



//


// create and append our cat vote button
let catVoteBtn = document.createElement('button');
catVoteBtn.textContent = "+ Vote for Catto";
catDiv.append(catVoteBtn);

// add event listener to our cat vote button, and update #catto-votes with each click.
catVoteBtn.addEventListener('click', function(){
    catVotes = catVotes + 1;
    document.querySelector("#catto-votes").textContent = catVotes;
    
//sets the item in local storage, then we retrieve it AT TOP OF PAGE using getItem. 
    localStorage.setItem('catVotes', catVotes);


// adds to total vote column by adding all three together
    totalVotesTd.textContent = dogVotes + catVotes + fishVotes;

})


// create cat vote MINUS button
let SubCatVoteBtn = document.createElement("button")
SubCatVoteBtn.textContent = "- Vote for Catto"
catDiv.append(SubCatVoteBtn)

SubCatVoteBtn.addEventListener('click', function(e) {
        catVotes = catVotes - 1;
        catVotesTd.textContent = catVotes;
        localStorage.setItem('catVotes', catVotes);
// makes sure total vote count is also subtracted from
        totalVotesTd.textContent = dogVotes + catVotes + fishVotes;

});     



//


// create and append our fish vote button
let fishVoteBtn = document.createElement('button');
fishVoteBtn.textContent = "+ Vote for Fish";
fishDiv.append(fishVoteBtn);

fishVoteBtn.addEventListener('click', function(){
    fishVotes = fishVotes + 1;
    document.querySelector("#fish-votes").textContent = fishVotes;
    //sets the item in local storage, then we retrieve it AT TOP OF PAGE using getItem. 
    localStorage.setItem('fishVotes', fishVotes);
    
// adds to total vote column by adding all three together
    totalVotesTd.textContent = dogVotes + catVotes + fishVotes;

})


// create fish vote MINUS button
let SubFishVoteBtn = document.createElement("button")
SubFishVoteBtn.textContent = "- Vote for Fish"
fishDiv.append(SubFishVoteBtn)

SubFishVoteBtn.addEventListener('click', function(e) {
        fishVotes = fishVotes - 1;
        fishVotesTd.textContent = fishVotes;
        localStorage.setItem('fishVotes', fishVotes);
// makes sure total vote count is also subtracted from
        totalVotesTd.textContent = dogVotes + catVotes + fishVotes;

});










  