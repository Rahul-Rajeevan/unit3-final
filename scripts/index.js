// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

let id;
  function get(s)
  {
    return document.getElementById(s).value;
  }
  function create(s)
  {
    return document.createElement(s);
  }
  // const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${countrycode}`


 document.getElementById("in").addEventListener("click",d('in'));
//  document.getElementById("ch").addEventListener("click",d('ch'))
//  document.getElementById("us").addEventListener("click",d('us'))
//  document.getElementById("uk").addEventListener("click",d('uk'))
//  document.getElementById("nz").addEventListener("click",d('nz'))

  async function a()
  {
    document.getElementById("results").innerHTML=null;
   var z1=get("search_input");
    const url=`https://masai-mock-api.herokuapp.com/news?q=${z1}`
    let res= await fetch(url);
    let data=await res.json();
    // console.log(data.articles)
    data.articles.forEach(function(e){
  var  q1=create("div");
    q1.setAttribute("class","news");
var    q2=create("img");
    q2.src=e.urlToImage;
 var   q5=create("div");
var    q3=create("h3");
    q3.innerText=e.title;
var    q4=create("p");
    q3.addEventListener("click",function()
    {
      local(e);
    })
    q4.innerText=e.description;
    q5.append(q3,q4);
    q1.append(q2,q5);
    document.getElementById("results").append(q1);
    function local(e)
    {
      localStorage.setItem("data",JSON.stringify(e));
      location.assign("./news.html");
    }
    })
  }  
  
  async function d(w)
  {
    document.getElementById("results").innerHTML=null;
   var z1=w;
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${z1}`;
    let res= await fetch(url);
    let data=await res.json();
    // console.log(data.articles)
    data.articles.forEach(function(e){
  var   q1=create("div");
    q1.setAttribute("class","news");
var    q2=create("img");
    q2.src=e.urlToImage;
var    q5=create("div");
 var    q3=create("h3");
    q3.innerText=e.title;
 var    q4=create("p");
    q4.innerText=e.description;
    q5.append(q3,q4);
    q1.append(q2,q5);
    document.getElementById("results").append(q1);

    })
    
  }
