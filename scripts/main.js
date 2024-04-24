let home = window.location.origin;

let links = document.querySelectorAll(".side-nav li");
let ahrefs = ["/", "/pages/clear.html", "/pages/clearadd.html", "/pages/edit.html", "/pages/add.html", "/pages/delete.html", "/pages/search.html", "/pages/admin/settings.html", "/pages/admin/users.html", "/pages/admin/connect.html"]

for(let i=0; i<ahrefs.length; i++)
{
    links[i].addEventListener("click", () => {
        window.location.href = home+ahrefs[i];
    })
}