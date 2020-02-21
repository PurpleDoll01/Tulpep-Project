
let socket = null;
const app = new Vue({
    el: '#app',
  
    data () {
      return {
        name: 'Bitcoin',
        allData: []
      }
    },

    created: function () {
      socket = io();
       
    },

    beforeMount () {
      socket.on('data', function(data) {
        app.allData.push(data.characters);
      }) 
    },
  })