const products = async () => {
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
};

var num = 1,
    price = 7;

$(".fa-plus").on("click", function () {
    var _num = parseInt($("span.number").text()) + 1;
    $("span.number").text(_num);
    updatePrice(_num, price);
});

$(".fa-minus").on("click", function () {

    var _num = parseInt($("span.number").text()) - 1;
    if (_num > -1)
        $("span.number").text(_num);
    updatePrice(_num, price);
});

function updatePrice(num, price) {
    $(".amount").text(num * price);
}

// $('#AboutMeButton').click(function () {
//     $('#container1').show();
//     $('#container2').hide();
//     $('#container2').hide();
// });

// $(document).ready(function () {
//     $('#AboutMe').click(function () {
//             $('#container').toggle();
//         });
//     })

// function myFunction(){
//     var AboutMe = document.getElementById('container1');
//     if (AboutMe.style.display == 'none'){
//         AboutMe.style.display = 'block';
//     } else {
//         AboutMe.style.display = 'none';
//     }
// }

    // ;
    // var AboutMeButton = document.getElementById('AboutMeButton');
    // if (AboutMeButton.active === 'true'){
    //     AboutMeButton.disabled = 'true';
    // } else {
    //     AboutMeButton.active = 'false';
    // }


// $('#AboutMe').on("click", function () {
//     console.log("user has clicked on my profile");
//     $("#container1").hide();
// })