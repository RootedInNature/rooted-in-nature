let plantButton = document.getElementById('navbar-plants');
let plantDropdown = document.getElementById('plant-dropdown');
let plantDropdownItems = document.querySelectorAll('.p-item');

console.log('script works');
plantButton.addEventListener('click',()=>{
    plantDropdown.classList.toggle('plant-dropdown-hidden');
    plantDropdownItems.forEach((item)=>{
        item.classList.toggle('plant-dropdown-item-hidden');
        item.classList.toggle('plant-dropdown-item');
    })

});

/***************************** D3 NAVBAR ***********************************/ 
let svg = d3.select('#navbar-svg');
let svgWidth = svg.attr('width');
let svgHeight = parseInt(svg.attr('height'));

// Rectangles design
let rectCount = 20; // Amount of rectangles used
let rectHeight = svgHeight/rectCount; // Rectangle heights
let rectWidths = [10,18,30,60,50,70,90,65,55,30,15,5,2,4,7,20,40,20,10,15]
for(let i = 0;i<rectCount;i++){
    svg.append('rect')
        .attr('x','0')
        .attr('y',i*rectHeight+"")
        .attr('width',rectWidths[i]+"vw")
        .attr('height',rectHeight+'')
        .attr('fill', '');
}



