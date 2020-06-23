var select = document.querySelector('select')
select.addEventListener('click', function(){
	var option = document.getElementById('select')
var value = option.options[option.selectedIndex].value

sortTable(value)

})

window.addEventListener('load', sortLeaders())

function sortTable(dir) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("leaderboard");
  switching = true;
  // Set the sorting direction to ascending:
  /* Make a loop that will continue until
  no switching has been done: */
 while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 0; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[3];
      y = rows[i + 1].getElementsByTagName("TD")[3];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function search() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchBox");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}



function sortLeaders() {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("leaderboard");
  switching = true;
  var max = 0
  var mid = 0
  var min = 0
  var row = []
  // Set the sorting direction to ascending:
  /* Make a loop that will continue until
  no switching has been done: */
 
    rows = table.rows;
            /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 0; i < (rows.length); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[3];
      row[i] = Number(x.innerHTML)
      max = Math.max(...row)

      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      
    if (Number(x.innerHTML) == max) {
      // If so, mark as a switch and break the loop:
      rows[i].style.background='red'
      const index = row.indexOf(max)
      if (index > -1){
      	row.splice(index, 1)
      	mid = Math.max(...row)
      }
        
      }
        if (Number(x.innerHTML) == mid) {
          // If so, mark as a switch and break the loop:
          rows[i].style.background='green'
          const index = row.indexOf(mid)
      if (index > -1){
      	row.splice(index, 1)
      	min = Math.max(...row)
      }

        }
        if (Number(x.innerHTML) == min) {
          // If so, mark as a switch and break the loop:
         
          rows[i].style.background='pink'
     

          
        }
      }
  
  
}   

