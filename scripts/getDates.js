const d = new Date();
document.getElementById("currentyear").innerHTML = d.getFullYear();

let lastdatetimemodified = document.lastModified;
document.getElementById("lastModified").innerHTML = lastdatetimemodified;