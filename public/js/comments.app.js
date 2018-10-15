var commentsApp = new Vue({
  el: '#commentMain',
  data: {
  comment:[{
  id : 0,
  comment: ''
}
],
  commentForm:{}
  },

  methods:{
  handleCommentPost(e){
  e.preventDefault();

  const s = JSON.stringify(this.commentForm);
  console.log(s);

  //Post to remote server
  fetch('api/comment.php',{
  method: "POST",
  headers: {
      "Content-Type": "application/json; charset=utf-8"
},
  body:s
})

  .then( json => {this.comment.push(json)})
  .catch( err => {
    console.error('COMMENT POST ERROR:');
    console.error(err);
})

  this.commentForm = this.getEmptyCommentForm();
},

  getEmptyCommentForm(){
  return{
    comment:null
}
},

  fetchComments (){
  fetch('api/comment.php')
  .then( response => response.json())
  .then(json =>{
    commentsApp.comment=json;})
  .catch(err =>{
  console.log('Comment Fetch Error:');
  console.log(err);
  });
  },

  },

  created(){
  this.fetchComments();

},

  })
