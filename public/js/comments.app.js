var commentsApp = new Vue({
  el: '#comments',
  data: {
    comment: [ ],

  },

  methods: {
    handleCommentForm(e) {

      // TODO: Check validity in a better way
      if (this.commentSpan <= 0) {
        console.error('Cannot submit, invalid values');
        return;
      }

      const s = JSON.stringify(this.commentForm);

      console.log(s);

      // POST to remote server
      fetch('api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
      })
      .then( response => response.json() )
      .then( json => {this.comment.push(json)})
      .catch( err => {
        console.error('COMMENT POST ERROR:');
        console.error(err);
      })

      // Reset workForm
      this.commentForm = this.getEmptyCommentForm();
    },

    getEmptyCommentForm() {
      return {
        comment_id: null,
        comment_comment: null,
      }
    },
  },
  created () {

    // Do data fetch
    const url = new URL(window.location.href);
    const commentId = url.searchParams.get('commentId');
    console.log('Comment: '+ commentId);
    this.comment.id = commentId;

    if (!commentId) {
      //TODO: Error? 404?
      //e.g., window.location = '404.html';
    }

    // Populate workForm with default values
    this.commentForm = this.getEmptyCommentForm();


    // Fetch all teams, for the form
    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentsApp.comment = json})
    .catch( err => {
      console.log('TEAM LIST ERROR:');
      console.log(err);
    })
  }
})
