
// ADD PRODUCT TO TABLE
document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("productForm").addEventListener("submit", function(e){

        e.preventDefault();

        // get all inputs and select
        let fields = this.querySelectorAll("input, select");

        let row = "<tr>";

        fields.forEach(function(field){
            row += "<td>" + field.value + "</td>";
        });

        row += "</tr>";

        // add row to table
        document.querySelector(".producttable table").innerHTML += row;

        // close popup
        closePopup();

        // clear form
        this.reset();

    });

});


// popup functions (ADD if not already in dashboard.js)
function openPopup(){
    document.getElementById("productPopup").style.display = "flex";
}

function closePopup(){
    document.getElementById("productPopup").style.display = "none";
}

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!loggedInUser) {
    alert("Please login first!");
    window.location.href = "login.html";
  } else {
    document.getElementById("welcomeMessage").innerText = `Hello, ${loggedInUser.email}!`;
  }
  function logout() {
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    window.location.href = "login.html";
  }

  let logoutBtn = document.querySelector("header button");
logoutBtn.addEventListener("click", logout);