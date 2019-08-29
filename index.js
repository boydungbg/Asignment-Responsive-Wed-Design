

function submitButtonStyle(_this) {
  _this.style.backgroundColor = "E8B119";
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.getElementById('button-right-click-top').addEventListener('click', () => {
  document.getElementById('down-iconn').classList.toggle('transform-360');
  console.log('loz');
})

document.getElementById("defaultOpen").click();s
function ChangecatList() {
  var catList = document.getElementById("validationCustom03");
  var actList = document.getElementById("validationCustom04");
  var selCat = catList.options[catList.selectedIndex].value;
  while (actList.options.length) {
    actList.remove(0);
  }
  var cats = catAndActs[selCat];
  if (cats) {
    var i;
    for (i = 0; i < cats.length; i++) {
      var cat = new Option(cats[i], i);
      actList.options.add(cat);
    }
  }
} 