var Triangle = {
  kind: function() {
    var first = this.firstSide;
    var second = this.secondSide;
    var third = this.thirdSide;
    if (first === second && second === third) {
      return "Equilateral";
    } else if ((first === second && second !== third) || (second === third && third !== first) || (first === third && third !== second))  {
      return "Isosceles";
    } else if (((first !== second) && (first !== third) && (second !== third)) && ((first + second > third) || (first + third > second) || (second + third > first))) {
      return "Scalene";
    } 
  },
  invalid: function() {
    var first = this.firstSide;
    var second = this.secondSide;
    var third = this.thirdSide;
    if ((first > second + third) || (second > first + third) || (third > first + second)) {
      return true;
    } else {
      return false;
    }
  }
};


$(document).ready(function() {
  $("#new-triangle").submit(function(event) {
  event.preventDefault();
    var first = parseInt($("#first-side").val());
    var second = parseInt($("#second-side").val());
    var third = parseInt($("#third-side").val());
    
    var newTriangle = Object.create(Triangle);
    newTriangle.firstSide = first;
    newTriangle.secondSide = second;
    newTriangle.thirdSide = third;


    if (newTriangle.invalid() === true) {
        alert("Those are invalid triangle parameters. Try again.")
    } else if (newTriangle.kind() === "Equilateral") {
    $("ul#eqTriangle").append("<li><span class='equal-param'>" + newTriangle.firstSide + ", " + newTriangle.secondSide + ", " + newTriangle.thirdSide + "</span></li>");
    } else if (newTriangle.kind() === "Isosceles") {
    $("ul#isTriangle").append("<li><span class='isos-param'>" + newTriangle.firstSide + ", " + newTriangle.secondSide + ", " + newTriangle.thirdSide + "</span></li>");
    } else if (newTriangle.kind() === "Scalene") {
    $("ul#scTriangle").append("<li><span class='scal-param'>" + newTriangle.firstSide + ", " + newTriangle.secondSide + ", " + newTriangle.thirdSide + "</span></li>");
    } 

    this.reset();

  });
});
