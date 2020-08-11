

var clicked=false;
 function myFunction() {
    if (!clicked) {
      clicked=true;
      document.getElementById("basic-price").innerHTML="<span>&dollar;</span>199.99";
      document.getElementById("prof-price").innerHTML="<span>&dollar;</span>249.99";
      document.getElementById("master-price").innerHTML="<span>&dollar;</span>399.99";
    } else{
      clicked=false;
      document.getElementById("basic-price").innerHTML="<span>&dollar;</span>19.99";
      document.getElementById("prof-price").innerHTML="<span>&dollar;</span>24.99";
      document.getElementById("master-price").innerHTML="<span>&dollar;</span>39.99";
    }
}