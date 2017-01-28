$(function() {
    // $("#all-burger",) "#devoured-burger", "#post-burger"
    $("#post-burger").on("submit", function(e) {
        e.preventDefault();
        console.log($(this).serialize());
        $.post("/", $(this).serialize(), function(res) {
            window.location.replace('/');
        });
    });
});

// onclick event to submit burgers
