var commentsApp = new Vue({
  el: '#comments',
  data: {
    comment: [ ],

  },

    fetchComments(){// Fetch all teams, for the form
    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentsApp.comment = json})
    .catch( err => {
      console.log('TEAM LIST ERROR:');
      console.log(err);
    })
  }
})
