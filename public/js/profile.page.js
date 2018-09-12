var profilePage = new Vue({
  el: '#profile',
  data: {
    tasks:{}


},
computed:{
 age:function(){
return moment(this.dob.date).diff(moment(),'years')
}
},
methods: {
  fetchTasks (){
  fetch('https://randomuser.me/api')
  .then( response => response.json())
  .then(json =>{
  profilePage.tasks=json.results;
  })

  .catch(err => {
  console.log('Task Fetch Error:');
  console.log(err);
  });
  }
},

created(){
this.fetchTasks();
}







})
