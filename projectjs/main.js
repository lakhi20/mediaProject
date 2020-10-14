var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var x = document.getElementsByClassName("slides");

  if (n > x.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = x.length
  }

  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
}


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//search and dropdown//



var clickedGenre=0;
filterSelection("All");

function filterSelection(c) {
  clickedGenre++;
  console.log(clickedGenre);
  if(clickedGenre>1){
    document.getElementById("genreText").innerHTML=capitalizeFirstLetter(c);
  }else{
    document.getElementById("genreText").innerHTML=capitalizeFirstLetter('Genre');
  }
  var x, i;
  x = document.getElementsByClassName("media");
  if (c == "All") c = "";

  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

//search box;


//function searchname(){
//console.log("method called...");
//var input=document.getElementById("filterInput");
//console.log(input);


function searchname() {
  var  i;
  var movieTitle;

   var inputStr = document.getElementById("filterInput").value.trim().toLowerCase();
  console.log(inputStr);
  movieTitle = document.getElementsByClassName("title");
  for (i = 0; i < movieTitle.length; i++) {
    var compareMovieTitles = movieTitle[i].innerHTML.toLowerCase();
    console.log(compareMovieTitles.indexOf(inputStr));
    console.log(movieTitle[i].closest('div.media'));
    if (compareMovieTitles.indexOf(inputStr) === -1) {
      //movieTitle[i].closest('div.media').style.display = "none";
      RemoveClass(movieTitle[i].closest('div.media'),"show");

    } else {
      // movieTitle[i].closest('div.media').style.display = "block";
      AddClass(movieTitle[i].closest('div.media'),"show");
    }
  }
}


