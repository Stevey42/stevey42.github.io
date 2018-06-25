var app = new Vue({
  el: '#app',
  data: {
    seen: true
  },
  methods:{
    onClick:function(){
      this.seen = !this.seen;
    }
  }
  
})
