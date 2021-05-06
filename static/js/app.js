// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");
// First, clear out any existing data
d3.select('tbody').html("");

function buildTable(data) {
    tbody.html("");
// Next, loop through each object in the data and append a row and cells for each value in the row
    data.array.forEach((dataRow) => {
        // Append a row to the table body
        let row = d3.select('tbody').append("tr");
        // Loop through each field in the dataRow and add each value as a table cell
        Object.values('dataRow').forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });    
        
    });
}