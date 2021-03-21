/*=========================================================================================
    File Name: content-sidebar.js
    Description: Invoices list datables configurations
    ----------------------------------------------------------------------------------------
    Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function() {
    /***********************************
    *        js of small Slider        *
    ************************************/

    var sm_options = {
        start: [1000,3500],
        behaviour: 'drag',
        connect: true,
        tooltips: [wNumb({
            decimals: 0
        }), wNumb({
            decimals: 0
        })],
        range: {
            'min': 100,
            'max': 5000
        }
    };
    var smallSlider = document.getElementById('small-slider');
    noUiSlider.create(smallSlider, sm_options);

    var nodes = [
        document.getElementById('lower-value'), // 1000
        document.getElementById('upper-value')  // 3500
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    smallSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
        var value = values[handle];
        nodes[handle].innerHTML = '$'+ Math.round(value);
    });


    /*************************************
    *        Sticky Sidebar length       *
    **************************************/

    // treeview for shop sidebar
    $(".treeview").treeview({
        animated: "fast",
        collapsed: true,
        unique: true,
        persist: "cookie"
    });

    // Filter
    // Categries
    $("#catInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#categories *").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // Brand
    $("#brandInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#brands *").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});