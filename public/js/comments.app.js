var commentsApp = new Vue({
  el: '#comment',
  data: {
  comment:[],
  },

  methods:{

  fetchComments (){
  fetch('api/comment.php')
  .then( response => response.json())
  .then(json =>{commentsApp.comment=json;})

  .catch(err => {
  console.log('Comment Fetch Error:');
  console.log(err);
  });
  },

  },

  created(){
  this.fetchComments();
  },

  })
