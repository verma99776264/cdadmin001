let home = window.location.origin;

let links = document.querySelectorAll(".side-nav li");
let ahrefs = ["/", "/pages/clear.html", "/pages/clearadd.html", "/pages/edit.html", "/pages/add.html", "/pages/delete.html", "/pages/search.html", "/pages/admin/settings.html", "/pages/admin/users.html", "/pages/admin/connect.html"]

let logoutBtn = document.querySelector("#logoutBtn");
let userArrow = document.querySelector("#userArrow");
let visibleloBtn = 0;

for(let i=0; i<ahrefs.length; i++)
{
    links[i].addEventListener("click", () => {
        window.location.href = home+ahrefs[i];
    })
}

logoutBtn.addEventListener("click", () => {
    console.log("Hello World")
})


userArrow.addEventListener("click", () => {
    if(visibleloBtn == 0){
        logoutBtn.style.display = "block"
        visibleloBtn = 1;
    }
    else {
        logoutBtn.style.display = "none"
        visibleloBtn = 0;
    }
})