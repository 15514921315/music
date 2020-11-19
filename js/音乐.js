

$(function () {
    var a = 1;
    var s1 = '2020-06-29';
    s1 = new Date(s1.replace(/-/g, "/"));
    s2 = new Date();
    var days = s2.getTime() - s1.getTime();
    var number_of_days = parseInt(days / (1000 * 60 * 60 * 24));
    document.getElementById('days').innerHTML = number_of_days;


    $(".w").click(function () {
        if (a == 1) {
            $(this).parents(".body").addClass("back");
            a = 2;
        }
        else {
            $(this).parents(".body").removeClass("back");
            a = 1;
        }

    });
    // $(document).keyup(function (e) {
    //     if (!e) {
    //         var e = window.event;
    //     }
    //     if(a=1){
    //         if (e.keyCode == 32) {
    //             var p = document.getElementById("music1");
    //             // console.log(p);
    //             if(p!==null){
    //             if (p.paused) {
    //                 p.play();
    //                 // console.log(123);
    //             } else {
    //                 p.pause();
    //             }
    //             }
    //      }
    //     }

    // });

    $(".search").click(function () {

        $(this).select();

    })
})



