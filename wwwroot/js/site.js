// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
console.log(`Hello World`)
const data = [
    {
        "pc_number": "PC13440",
        "ip_address": "10.10.10.10",
        "user_name": "roger"
    }
]
const cortex_table = document.getElementById("cortex_table");
const cortex_table_body = cortex_table.getElementsByTagName("tbody")[0];

data.forEach((element, index) => {
    console.log(`index: ${index}, value: ${element.pc_number}`);
    for (let prop in element) {
        let row = cortex_table_body.insertRow(index);
        let cell = row.insertCell();
        cell.innerHTML = prop
        cell = row.insertCell();
        cell.innerHTML = element[prop]
    }
});