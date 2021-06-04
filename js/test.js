

$(document).ready(function(){
$(".box").click(function(){
$('.q2').css("display","block");
$('.q1').css("display","none");
$('.box').css("display","none");
$('.box2').css("display","block");
$('.box_prev').css("display","block");
});

$(".box_prev").click(function(){
$('.q1').css("display","block");
$('.q2').css("display","none");
  $('.box_prev').css("display","none");
  $('.box2').css("display","none");
  $('.box').css("display","block");
});

$(".box2").click(function(){
$('.q2').css("display","none");
$('.q3').css("display","block");
$('.box2').css("display","none");
$('.box_prev').css("display","none");
$('.box_prev2').css("display","block");
$('.box_prev3').css("display","none");
$('.buttons').css("display","block");
});
$(".box_prev2").click(function(){
$('.q2').css("display","block");
$('.q3').css("display","none");
$('.box2').css("display","block");
$('.box_prev2').css("display","none");
$('.box_prev3').css("display","block");
$('.results').css("display","block");
$('.buttons').css("display","none");
});
$(".box_prev3").click(function(){
$('.q1').css("display","block");
$('.q2').css("display","none");
$('.box').css("display","block");
$('.box2').css("display","none");
$('.box_prev').css("display","none");
$('.box_prev3').css("display","none");

});
$(".buttons").click(function(){
$('.again').css("display","block");
$('.box_prev2').css("display","none");
});
$(".test").click(function(){
$('.q1').css("display","block");
$('.box').css("display","block");
$('.test').css("display","none");
});
});




function hideNoDHTML()
{
  document.getElementById('nodhtml').style.display = 'none';
  showQuestions();
}

function showQuestions()
{
  document.getElementById('questions').style.display = 'block';
  document.getElementById('results').style.display = 'none';
}

function showResults()
{

    var i = 0;
    if(document.getElementById('choice11').checked == true)
    {
        i++;
    }
    if(document.getElementById('choice21').checked == true)
    {
        i++;
    }
    if(document.getElementById('choice31').checked == true)
    {
        i++;
    }

    document.getElementById('questions').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    document.getElementById('results').innerHTML = '<h2 class="h2_p">РЕЗУЛЬТАТЫ ТЕСТА <br><br> </h2>\n';
    if(i == 0)
    {
        document.getElementById('results').innerHTML += '<p> Вам подходит:<br><br>АУТОФОБИЯ </p>\n';
    }
    if(i == 1)
    {
        document.getElementById('results').innerHTML += '<p> Вам подходит:<br><br>АГОРАФОБИЯ </p>\n';
    }
    if(i == 2)
    {
        document.getElementById('results').innerHTML += '<p> Вам подходит:<br><br>КЛАУСТРОФОБИЯ </p>\n';
    }
    if(i == 3)
    {
        document.getElementById('results').innerHTML += '<p>Совсем дурачек да</p>\n<p>Оценка 5</p>';
    }
};
