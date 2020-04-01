//Create an object to mimic our server and or database
const post =[
  {title: "Post One", body: "This is post one"},
  {title: "Post Two", body: "This is post two"},
  {title: "Post Three", body: "This is post three"}
]



function createPost (post){
  setTimeout(function(){
    post.push(post)
  },2000)
  
}

function createPost (post, callback){
  setTimeout(function(){
    post.push(post)
  },2000)
  
}

function getPost (){
  setTimeout(function(){
    let output = "";
    post.forEach((post)=>{
      output += `<li>${post.title}</li>`
    })
    //Straigt to body
    document.body.innerHTML = output;
  }, 1000)
}

//Call createPost so that new post are added to the created
createPost({body: "Post Four", body: "This is post four"});

getPost(); //May not display Post Four due to delay


//Asychroneous with callback function
// function createPost(post, callback){
//   setTimeout(function(){
//     post.push(post);
//     callback();
//   },2000);
  
// }

// function getPost (){
//   setTimeout(function(){
//     let output = "";
//     post.forEach((post)=>{
//       output += `<li>${post.title}</li>`
//     })
//     //Straigt to body
//     document.body.innerHTML = output;
//   }, 1000)
// }

// //Call createPost so that new post are added to the created
// createPost({title: "Post Four", body: "This is post four"}, getPost);









