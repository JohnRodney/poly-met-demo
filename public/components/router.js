var router = Router({
  autoHash: true,
  '/user': {
    on: function(){
      console.log('routing to user');
    },
    '/:id': {
      on: function(id){
        console.log(id);
      }
    }
  },
  '/directory': {
    on: function(){
      console.log('routing to directory');
    }
  },
  notFound: function(){
    console.log('not Found');
  }
});

var fakeDB = (function(){
    var temp = [];
    for(var x = 0; x < 300; x++){
      temp[x] = {
        name: "Willy Wonka",
        company: "Chocolate Factory",
      }
    }
    return temp;
  })();
var NAME = 'willy wonka';
