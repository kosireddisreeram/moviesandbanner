var images=["https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1542204637-e67bc7d41e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
]

localStorage.setItem("images",JSON.stringify(images));
var images=JSON.parse(localStorage.getItem("images"));
// console.log(images);
var container=document.getElementById("slideshow");

let i=0;
setInterval(function(){
    if(i==images.length){
        i=0;
    }
  let image=images[i];
  container.innerHTML=null
  let img=document.createElement("img")
  img.src=image;
  img.setAttribute("id","image");
  container.append(img)
  i++;
},1000);


//  movie object
var allmovies=[];
function movie(name,release,poster,imdbrating){
  this.name=name,
  this.release=release,
  this.poster=poster,
  this.imdbrating=imdbrating;
}
var movie1=new movie("JUDY","1stApril","https://images.unsplash.com/photo-1646647465222-a8f8c5222b84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80","6");

var movie2=new movie("CAPPY","1stMay","https://images.unsplash.com/photo-1591620944710-8d0a96764afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60","8");

var movie3=new movie("REX","1stJune","https://images.unsplash.com/photo-1638553906065-df3db4b0b815?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60","5");
var movie4=new movie("ODEON","1stJuly","https://images.unsplash.com/photo-1620803523785-ab58b7fe381f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80","9");
var movie5=new movie("MOVEMENT","1stAugust","https://images.unsplash.com/photo-1588772665497-2ef131c8d1a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60","5");
var movie6=new movie("MADMAX","1stSeptember","https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllcyUyMHBvc3RlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60","4");
var movie7=new movie("TAXI","1stOctober","https://images.unsplash.com/photo-1646629013904-86fd1fd1aa08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80","5");
var movie8=new movie("GEMINIMENE","1stNovember","https://images.unsplash.com/photo-1646649421172-b98ed2147d63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80","4");
var movie9=new movie("GATOS","1stDecember","https://images.unsplash.com/photo-1646648439437-20b1a0f1b489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80","6");

allmovies.push(movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8,movie9);
localStorage.setItem("movies",JSON.stringify(allmovies));
var allm=JSON.parse(localStorage.getItem("movies"))|| [];
// console.log(allm)
// console.log(allmovies);
displaydata(allm);
function displaydata(allm){
  document.querySelector("#movies").innerHTML='';
allm.map(function(elem){
  var poster=document.createElement("img");
  poster.setAttribute("src",elem.poster);
  poster.setAttribute("id","poster")
  var div=document.createElement("div");
  var name=document.createElement("p");
  name.innerText="MOVIE:-"+elem.name;
  var release=document.createElement("p");
  release.innerText="RELEASE:-"+elem.release;
 
  var rating=document.createElement("p");
  rating.innerText="IMDB:-"+elem.imdbrating;
  // rating.setAttribute("id","rating");
  div.append(poster,name,release,rating);
  document.querySelector("#movies").append(div);
})
}
function sortitems(){
  var sorting=document.getElementById("rating").value;
  console.log(sorting)
  if(sorting=='h2l'){
    allm.sort(function(a,b){
      return Number(b.imdbrating)-Number(a.imdbrating);
    })
  }
  if(sorting=='l2h'){
    allm.sort(function(a,b){
      return Number(a.imdbrating)-Number(b.imdbrating)
    })
  }
  displaydata(allm)
}
