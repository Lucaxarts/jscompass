// var users=[
//   {tittle:"lucas"},
//   {userName:"francis"},
//   {tittle:"musa"},
//   {tittle:"favor"}
// ]
  var user;
// for(var i = 0; i <= users.length; i++){
//   if(users[i].userName==="favor"){
//       user=users[i];
//   }
// }
//console.log(user);
users.find(function(user){
  if(user.tittle === "lucas"){
    return user;
  }
})
//console.log(user);













//here we use the filter array helper to return comments of matching post id's
var posts=[{id:4,content:"hello my gees",tittle:'new post'},
{id:4,content:"hello my gees",tittle:'new post'},
]
var comments=[
  {postid:4,commentContent:"we dey alright"},
  {commentContent:"no shaking my nigga "},
  {postid:4,commentContent:"no wam"}
]
function commentIdentifier(comments,post){
  return comments.filter(function(comment){
    return comment.postid===post.id;
  }) 
}
var printTHis=commentIdentifier(comments,post);
//console.log(printTHis);
function postForComments(post,comments){
  return posts.find((post)=>{
    return post.id===comments.postid;
  })
};
console.log(postForComments(comments,posts))
























