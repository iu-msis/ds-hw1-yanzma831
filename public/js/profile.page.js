var profilePage = new Vue({
  el: '#profile',
  data: {


tasks:[{

}
]

},

methods:{
  pretty_date: function(d){
    return moment(d).format('l')
},

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
},

computed:{
years_left:function(){
return moment(this.dob.age).diff(moment(),'years')
}

},


})
