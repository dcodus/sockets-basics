//Our front end JavaScript
var socket = io();

//This will log on the browser console
socket.on("connect", ()=>{
    console.log("Connected to socket.io server");
});


//Listen to the emit. First argument is the emit name, second argument is the callback with our data.
socket.on("message", (data)=>{
    console.log(data);
});

//In this section we will handle submission of new messages

//Use jQuery to select our form;
var $form = $("#message-form");

$form.on("submit", (event)=>{
    //Use preventDefault() to prevent the form from refreshing the page
    event.preventDefault();

    //If an element is to be used more that once, store it in a variable to avoid traversing the dome multiple times.
    var $message = $form.find("input[name=message]");

    socket.emit("message", {
        //Use the .find() to find an input field by attributes
        //Notice how we are selecting the input field that has an attribute name that is set to message. We then use the val() method to extract the value of that input field.
        text: $message.val()
    });

    //Clear the input field after sending the message.
    $message.val("");


});