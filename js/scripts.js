var Contact = { 
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

$(document).ready(function(){
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputFirstName = $("input#new-first-name").val();
    var inputLastName = $("input#new-last-name").val();
    var inputAddress = $("input#new-address").val();
    var newContact = Object.create(Contact);
    newContact.firstName = inputFirstName;
    newContact.lastName = inputLastName;
    newContact.address = inputAddress;

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    this.reset();

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.fullName());
    $(".first").text(newContact.firstName);
    $(".last").text(newContact.lastName);
    $(".address").text(newContact.address);
    });
  });

});
