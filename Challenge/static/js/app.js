// import the data from data.js
const tableData = data;


// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

// Next, loop through each object in the data
// and append a row and cells for each value in the row
data.forEach((dataRow) => {

    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    });
   
});

};


// This function will replace your handleClick function

function handleChange() {

    // Keep track of all filters
    var filterSet = [];

    // Save the element, value, and id of the filter that was changed
    let date = d3.select('#datetime').property('value');
    let city = d3.select('#city').property('value');
    let state = d3.select('#state').property('value');
    let country = d3.select('#country').property('value');
    let shape = d3.select('#shape').property('value');


  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
    if (date){
    
        filterSet.push({ k: 'datetime', v: date });

    };

    if (city){

        filterSet.push({ k: 'city', v: city });

    };

    if (state){

        filterSet.push({ k: 'state', v: state });

    };

    if (country){

        filterSet.push({ k: 'country', v: country });

    };

    if (shape){

        filterSet.push({ k: 'shape', v: shape });

    };


  // Call function to apply all filters and rebuild the table
  filterTable(filterSet);
}

function filterTable(filterSet) {

    // Set the filteredData to the tableData
    let filteredData = tableData
  
    // Loop through all of the filters and keep any data that
    // matches the filter values
    for(let i = 0; i < filterSet.length; i++){
        let k = filterSet[i].k;
        let v = filterSet[i].v;

    filteredData = filteredData.filter(row => row[k] === v);        
};
  
  
    // Finally, rebuild the table using the filtered Data
buildTable(filteredData);
  
};
  
  // Attach an event to listen for changes to each filter
  // Hint: You'll need to select the event and what it is listening for within each set of parenthesis
  d3.selectAll('#filter-btn').on('click', handleChange);  
  // Build the table when the page loads
  buildTable(tableData);
