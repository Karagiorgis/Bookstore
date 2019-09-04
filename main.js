 var app = new Vue({
   el: "#app",
   data: {
     books: [],
     filteredBooks: [],
     search: ''

   },
   created: function () {

     this.getData();

   },

   methods: {

     getData: async function () {

       var data =
         await fetch("https://api.myjson.com/bins/zyv02", {
           method: 'GET',
         })
         .then(response => response.json())
         .then(json => json)
         .catch(err => console.error(err))

       for (var i = 0; i < data.books.length; i++) {
         app.books.push(data.books[i])
       }


     }

   },

   computed: {
     filteredList: function() {
       return this.books.filter((book) => {
         return book.title.toLowerCase().match(this.search.toLowerCase())
       })
     }
   }

 })
