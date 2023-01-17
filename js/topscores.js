let scoreList = [];
let topTeamsList = document.getElementById("topTeamsList");

setUptable()
updateLocalStore()
sortTable()

function topScores1() {
    scoreList.push({ topScoreTeamName, topScoreTeamScore });
    addToLocalStorage(scoreList);
    createRowAndCell()
}

function topScores2() {
    scoreList.push({ topScoreTeamName, topScoreTeamScore });
    addToLocalStorage(scoreList);
    createRowAndCell()
}
function updateLocalStore(){
    scoreList = JSON.parse(localStorage.getItem('topTeamList'));
    localStorage.setItem('topTeamList', JSON.stringify(scoreList));
}
function addToLocalStorage(scoreList) {
    localStorage.setItem("topTeamList", JSON.stringify(scoreList));
}

function createRowAndCell() {
    tableContent = document.querySelector(".table tbody");
    let newRow = tableContent.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = topScoreTeamName;
    cell2.innerHTML = topScoreTeamScore;
}

function setUptable() {
    // retrieve the Data from local storage
    if (localStorage.getItem('topTeamList')) {
      tableList = JSON.parse(localStorage.getItem('topTeamList'));
    }
    // emptyTable()
    if (localStorage.getItem('topTeamList')) {
      tableList.forEach(function (elem) {
        tableContent = document.querySelector(".table tbody");
        let newRow = tableContent.insertRow(-1);
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        cell1.innerHTML = elem.topScoreTeamName;
        cell2.innerHTML = elem.topScoreTeamScore;  
    })
  }
}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.querySelector(".table tbody");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        //check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }