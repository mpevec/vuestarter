"use strict";

// ES6 
var hello = function hello(name) {
  return "Hello ".concat(name);
};

new Vue({
  el: '#app',
  data: {
    inputValue: hello('you, Vue user!')
  }
});
//# sourceMappingURL=main.js.map
