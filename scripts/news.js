// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();
function get(s)
  {
    return document.getElementById(s).value;
  }
  function create(s)
  {
    return document.createElement(s);
  }
var q=JSON.parse(localStorage.getItem("data"));
console.log(q)
var q1=create("div");
    q1.setAttribute("class","news");
    var   q2=create("img");
    q2.src=q.urlToImage;
    var   q5=create("div");
    var    q3=create("h3");
    q3.innerText=q.title;
    var    q4=create("p");
    q4.innerText=q.description;
    q5.append(q3,q4);
    q1.append(q2,q5);
    document.getElementById("detailed_news").append(q1);