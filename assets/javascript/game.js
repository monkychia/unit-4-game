$(document).ready(function() {  
    var target = 0;
    var wins = 0;
    var losses = 0;
    var score = 0;
    var targetNum = 0;
    var gem1 = 0;
    var gem2 = 0;
    var gem3 = 0;
    var gem4 = 0;
    var sum = 0;
    var winCounter = 0;
    var losseCounter = 0;

    function initialize() {
        $(".score").html('0');
        targetNum = randomNum(19, 120);
        gem1 = randomNum(1, 12);
        gem2 = randomNum(1, 12);
        gem3 = randomNum(1, 12);
        gem4 = randomNum(1, 12);
        $(".target").html(targetNum);
        $(".gem1").val(gem1);
        $(".gem2").val(gem2);
        $(".gem3").val(gem3);
        $(".gem4").val(gem4);
        sum = 0;
    }

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    initialize();

    $(".wins").html('Wins: ' + winCounter);
    $(".losses").html('Losses: ' + losseCounter);

    $("button").on("click", function() {
        $('body').css('background-image','url(assets/images/washi.png)');
        sum += Number($(this).val());
        $(".score").html(sum);

        if (winCounter > 0 || losseCounter > 0) {
            $(".msg").empty();
        }

        if (sum === targetNum) {
            $('body').css('background-image','url(assets/images/confetti2.gif)');
            winCounter++;
            $(".wins").html("Wins: " + winCounter);
            $(".wins").prepend("<div class='msg'>" + "You won!!" + "</div>");
            initialize();
        }
        if (sum > targetNum) {
            losseCounter++;
            $(".losses").html("Losses: " + losseCounter);
            $(".wins").prepend("<div class='msg'>" + "You lost!!" + "</div>");
            initialize();
        }
    })
})
