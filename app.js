var app = new Vue({
    el: '#app',
    data: {
       message: 'My first VueJS Task'
    }
 })

  var app2 = new Vue ({
    el: '#app-2',
    data: {
      Message: "you loaded this page " + new Date().toLocaleString()
    }
 })

 var app4 = new Vue ({
    el: '#app-4',
    data: {
    todos: [
       {text: 'Learn vue.js'},
       {text: 'learn Javascript'},
       {text: 'Build something awesome'}
    ]
 }
})

var app5 = new Vue ({
   el: '#app-5',
   data: {
      MEssage: 'hello vue js!'
   },
   methods: {
      reverseMEssage: function () {
         this.MEssage = this.MEssage.split('').reverse().join('')
      }
         
      }
   
})