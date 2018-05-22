'use strict';
//event handlers for buttons
$(function () {
    //function for adding new burgers
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };

        //send POST request on click
        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("New Burger Added!!");
                location.reload();
            }
        );
    });

    //function for devouring burgers
    $(".devoured").on("click", function (event) {
        let id = $(this).data("id");
        let nowDevoured = $(this).data("devoured");
        let burgerNowDevoured = {
            devoured: 1
        };

        //send PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerNowDevoured
        }).then(
            function () {
                console.log("burger now eaten", nowDevoured);
                location.reload();
            }
        );
    });

    //no code below this line
});