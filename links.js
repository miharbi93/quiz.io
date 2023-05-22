let data = ["syllabus.html", "p1.html", "p2.html", "style.html", "email.html", "system.html", "process.html"];

function myTable() {
  let startInput = document.querySelector("#start");
  let endInput = document.querySelector("#end");
  let start = parseInt(startInput.value);
  let end = parseInt(endInput.value);
  let table = document.getElementById("linkTable");
  let rangeMessage = document.getElementById("rangeMessage");
  let num = end - start + 1;

  table.innerHTML = "";

  if (start < 1 || end > data.length || start > end) {
    rangeMessage.textContent = "Invalid range, valid range: 1-" + data.length;
  } else {
    rangeMessage.textContent = "Valid Range: 1-" + data.length;
    for (var i = start - 1; i <= end - 1; i++) {
      var row = table.insertRow();
      var cell = row.insertCell();
      var link = document.createElement("a");
      link.href = data[i];
      link.textContent = data[i];
      cell.appendChild(link);
    }
  }
}
