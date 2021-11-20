

let dogVote = document.querySelector('#doggo-votes');
let catVote = document.querySelector('#catto-votes');
let fishVote = document.querySelector('#fish-votes');





//counter variables

let dogVoteCount = localStorage.getItem('dogVoteCount');

if (dogVoteCount === null){
    dogVoteCount = 0;
}

dogVote.textContent = dogVoteCount;
//let dogVoteCount = 0; //dog


let catVoteCount = localStorage.getItem('catVoteCount');

if (catVoteCount === null){
    catVoteCount = 0;
}

catVote.textContent = catVoteCount;

//let catVoteCount = 0; //cat


let fishVoteCount = localStorage.getItem('fishVoteCount');

if (fishVoteCount === null){
    fishVoteCount = 0;
}

fishVote.textContent = fishVoteCount;


// 















//dog-button = dog
//cat-button = cat
//fish-button = fish

let dogButton = document.querySelector('.dog-button');


let catButton = document.querySelector('.cat-button');


let fishButton = document.querySelector('.fish-button');





dogButton.addEventListener('click', function(){
    dogVoteCount = parseInt(dogVoteCount) + 1
    //console.log(dogVoteCount);
    dogVote.textContent = dogVote;
    localStorage.setItem('dogVoteCount', dogVoteCount);


})

catButton.addEventListener('click', function(){
    catVoteCount = parseInt(catVoteCount) + 1
    //console.log(catVotes);
    catVote.textContent = catVote;
    localStorage.setItem('catVoteCount', catVoteCount);


})

fishButton.addEventListener('click', function (){
    fishVoteCount = parseInt(fishVoteCount) + 1
    fishVote.textContent = fishVote;
    localStorage.setItem('fishVoteCount', fishVoteCount);
    
})