// Style the individual blog post backgrounds and be able to change background
var changeBackground = document.querySelector(".change-background");
var background = document.querySelector('.blog-background');


var backgroundClasses = ['blog','blog1','blog2','blog3'];
var prevbckInt = 0;
var bckInt = 1; // This will choose the background

changeBackground.addEventListener('click', function(){
    background.classList.remove(backgroundClasses[prevbckInt]);
    background.classList.add(backgroundClasses[bckInt]);
    prevbckInt++;
    prevbckInt%=4;
    bckInt++;
    bckInt%=4;
    console.log(bckInt);
    console.log(prevbckInt);
    

    
});

// -------------------- NOT WORKING -----------------------------------------

// Style the individual blog post backgrounds and be able to change background
var changePlantBackground = document.querySelector(".plant-post-change-background");
var plantBackground = document.querySelector(".plant-background");

var plantBackgroundClasses = ['plant', 'plant1', 'plant2', 'plant3'];
var prevPlantBckInt = 0;
var plantBckInt = 1; // This will choose the background

changePlantBackground.addEventListener('click', function () {
    // Remove previous background class index from the above array
    plantBackground.classList.remove(plantBackgroundClasses[prevPlantBckInt]);
    // Add the next background in the array
    plantBackground.classList.add(plantBackgroundClasses[plantBckInt]);
    // Increment the index, modulo 4 so it goes to the first value in
    prevPlantBckInt++;
    prevPlantBckInt %= 4;
    plantBckInt++;
    plantBckInt %= 4;
    console.log(plantBckInt);
    console.log(prevPlantBckInt);
});