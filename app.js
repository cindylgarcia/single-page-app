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
// Coding Challenges 

function leapyear(year) {
   return year % 4==0 || (year % 4 == 0 && year % 100!=0)
}

function SeriesResistance(arr) {
   let vm = arr.reduce((total, amount) => total + amount); 
   if (vm <=1) {
   return vm + " ohms"; 
    
}

}

const rangeOfNum = (a,b) => Array.from({length:b-a-1}, (_,i) => i + a +1);

function rangeOfNum(start, end) {
   let newArray = [];
   for (let x = start + 1; x < end; x++) {
      newArray.push(x)
   }
      return Arr;
}