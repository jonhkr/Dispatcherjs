
Module('App.Contact', function(Contact) {
  Contact.fn.initialize = function() {

    $('#contact_form').on('submit', function(e) {
      if (!$.trim($("#contact_message").val())) {
        e.preventDefault();
        $('#error_message').html('Contact message can\'t be empty.');
      }
    });

  }
});