function myFunction() {
    var element = document.getElementById("mySelect");
    var selectedValue = element.options[element.selectedIndex].value;
    console.log(selectedValue);

    var ulList = document.querySelectorAll("ul");
    ulList.forEach(element => {
      element.style.display = "none";
    });
   document.getElementById(selectedValue).style.display = "block";

}