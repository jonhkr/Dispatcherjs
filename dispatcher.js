;(function(context){
  "use strict";

  var Dispatcher = {
    handlers: {},
    attachHandler: function(pageid, handler) {
      if (typeof this.handlers[pageid] === 'undefined') {
        this.handlers[pageid] = [handler];
      } else {
        this.handlers[pageid].push(handler);
      }
    },
    dispatch: function() {
      var body = document.getElementsByTagName('body')[0]
        , pageid = body.getAttribute('data-pageid');
      if (typeof this.handlers[pageid] != 'undefined') {
        for (var i in this.handlers[pageid]) {
          this.handlers[pageid][i].call(document);
        }
      }
    }
  }

  context.Dispatcher = Dispatcher;
})(window);