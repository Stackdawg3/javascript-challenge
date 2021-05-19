// from data.js
var tableData = data;
//console.log(tableData);

// getting a reference to the table body
var tbody = d3.select('tbody');

// looping through each UFO siting
tableData.forEach(function(UFO) {
    console.log(UFO);

    // adding row to table
    var row = tbody.append('tr'); 

    // adding values from each UFO siting to table
    Object.entries(UFO).forEach(function([key, value]){
        // console.log(key,value);
        
        // creating cells for added data
        var cell  = row.append('td');
        cell.text(value);
    });
});


var button = d3.select('#filter-btn');
var form = d3.select('.form-group');

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    d3.event.preventDefault();

    d3.selectAll('tr').remove()

    var input = d3.select('#datetime');
    var input_value = input.property('value');
    
    // console.log(input_value);
    // console.log(tableData);

    var filteredData = tableData.filter(ufo => ufo.datetime === input_value);
    console.log(filteredData);

    // adding filtered data to table
    filteredData.forEach(function(fd) {
        console.log(fd);

        var new_row =  tbody.append('tr');
    
        Object.entries(fd).forEach(function([key, value]){
            console.log(key,value);
            var cell  = new_row.append('td');
            cell.text(value);
        });
    });
};