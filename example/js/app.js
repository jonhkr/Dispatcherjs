
Dispatcher.attachHandler('home', App.Home);
Dispatcher.attachHandler('contact', App.Contact);

$(function(){
  Dispatcher.dispatch();
});