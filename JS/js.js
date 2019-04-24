(function() {
    'use strict';
    //welcomePageImg slide in
    $(".welcomePageImg-1").addClass('slide-right');
    setInterval(function() {
        $(".welcomePageImg-3").addClass('slide-right');
    }, 500);
    setInterval(function() {
        $(".welcomePageImg-5").addClass('slide-right');
    }, 1000);
    setInterval(function() {
        $(".welcomePageImg-4").addClass('slide-left');
    }, 1000);
    $(".welcomePageImg-6").addClass('slide-left');
    $(".welcomePageImg-2").addClass('slide-down');
    $(".tourStamp").addClass('show');

    //samuiImg slide in
    $('.samuiImgRight').addClass('slide-left');
    $('.samuiImgLeft').addClass('slide-right');
    $('.samuiTextRight').addClass('slide-left');
    $('.samuiTextLeft').addClass('slide-right');

    // Navbar float
    var navbarFloat = function() {
        if ($("#mainNavbar").offset().top > 80) {
            $("#mainNavbar").addClass("navbarFloat");
        } else {
            $("#mainNavbar").removeClass("navbarFloat");
        }
    };
    // Float now if page is not at top
    navbarFloat();
    // Float the navbar when page is scrolled
    $(window).scroll(navbarFloat);


    //Home
    //Like icon
    $('.likeIcon').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('likeIconLiked');
    })
    //Show section card when scroll
    $(window).scroll(function(e) {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        //console.log(scrollPos)
        $('.brandHide').each(function() {
            if ((scrollPos + windowHeight / 0.6) >= $(this).offset().top) {
                $(this).addClass('brandShow');
            }
        });
    });

    //Image exchange
    var img = "";

    function exchange() {
        if ($('.imgExchange').hasClass('exchangeImg')) {
            setTimeout(function() {
                $('.imgExchange').attr('src', img);
                $('.imgExchange').removeClass('exchangeImg');
                exchange();
            }, 3000)
        } else {
            setTimeout(function() {
                $('.imgExchange').addClass('exchangeImg');
                img = $('.imgExchange').attr('src');
                $('.imgExchange').attr('src', $('.imgExchange').data("brandimg"));
                exchange();
            }, 3000)
        }
    }

    exchange();

    //GO to top
    $('.arrowUp').click(function(e) {
        console.log(e)
        $('html,body').animate({ scrollTop: '0' }, 1000);
    });


    //Delet cart item
    function confirmDelet(del) {
        let con = confirm("確定要刪除?");
        if (con == true) {
            if (del.nodeName === 'I') {
                $(del).parent().parent().parent().parent().parent().remove();
            } else if (del.nodeName === 'DIV') {
                $(del).parent().parent().parent().parent().remove();
            }

        } else {}
    }
    $('.delet').click(function(e) {
        console.log(e.target.nodeName);
        confirmDelet(e.target);
    });

})()

window.addEventListener('load', function() {        
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);


//Account verification
document.querySelector('#register').addEventListener('click', signUp, false);

function signUp(e) {
    e.preventDefault();
    let eml = document.querySelector('#rgEmail').value;
    let psw = document.querySelector('#rgPsw').value;
    let account = {
        email: eml,
        password: psw
    };
    console.log(account)
    let xhr = new XMLHttpRequest();
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    let data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload = function() {
        alert(JSON.parse(xhr.response).message);
        if (JSON.parse(xhr.response).message === "帳號註冊成功") {
            window.location.reload();
        } else {}
    }
    console.log(xhr)
}
document.querySelector('#login').addEventListener('click', signIn, false);

function signIn(e) {
    e.preventDefault();
    let eml = document.querySelector('#lgEmail').value;
    let psw = document.querySelector('#lgPsw').value;
    let account = {
        email: eml,
        password: psw
    };
    console.log(account)
    let xhr = new XMLHttpRequest();
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    let data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload = function() {
        alert(JSON.parse(xhr.response).message);
        if (JSON.parse(xhr.response).message === "登入成功") {
            window.location.reload();
        } else {}
    }
    console.log(xhr)
}