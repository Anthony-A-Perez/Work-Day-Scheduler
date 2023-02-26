
// jQuery feature dayjs furnishes current day, month and date.
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));




function timeTracker() {

  // loop over time blocks
  $(".time-block").each(function () {
    var now = dayjs().format('H');
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
    // To check the time and add the classes for background indicators
    if (blockTime < now) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    else if (blockTime == now) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");

    }
  })
}

timeTracker();
//User clicks and the input provided is committed to local storage

var saveButton9 = document.getElementById('btn-9');
var textArea9 = document.getElementById('text-9');
const hr9Input = localStorage.getItem('input9');
textArea9.innerHTML = hr9Input;
saveButton9.addEventListener('click', function () {
  localStorage.setItem('input9', textArea9.value);
});

var saveButton10 = document.getElementById('btn-10');
var textArea10 = document.getElementById('text-10');
const hr10Input = localStorage.getItem('input10');
textArea10.innerHTML = hr10Input;
saveButton10.addEventListener('click', function () {
  localStorage.setItem('input10', textArea10.value);
});

var saveButton11 = document.getElementById('btn-11');
var textArea11 = document.getElementById('text-11');
const hr11Input = localStorage.getItem('input11');
textArea11.innerHTML = hr11Input;
saveButton11.addEventListener('click', function () {
  localStorage.setItem('input11', textArea11.value);
});

var saveButton12 = document.getElementById('btn-12');
var textArea12 = document.getElementById('text-12');
const hr12Input = localStorage.getItem('input12');
textArea12.innerHTML = hr12Input;
saveButton12.addEventListener('click', function () {
  localStorage.setItem('input12', textArea12.value);
});

var saveButton1 = document.getElementById('btn-1');
var textArea1 = document.getElementById('text-1');
const hr1Input = localStorage.getItem('input1');
textArea1.innerHTML = hr9Input;
saveButton1.addEventListener('click', function () {
  localStorage.setItem('input1', textArea1.value);
});

var saveButton2 = document.getElementById('btn-2');
var textArea2 = document.getElementById('text-2');
const hr2Input = localStorage.getItem('input2');
textArea2.innerHTML = hr2Input;
saveButton2.addEventListener('click', function () {
  localStorage.setItem('input2', textArea2.value);
});

var saveButton3 = document.getElementById('btn-3');
var textArea3 = document.getElementById('text-3');
const hr3Input = localStorage.getItem('input3');
textArea3.innerHTML = hr3Input;
saveButton3.addEventListener('click', function () {
  localStorage.setItem('input3', textArea3.value);
});

var saveButton4 = document.getElementById('btn-4');
var textArea4 = document.getElementById('text-4');
const hr4Input = localStorage.getItem('input4');
textArea4.innerHTML = hr4Input;
saveButton4.addEventListener('click', function () {
  localStorage.setItem('input4', textArea4.value);
});

var saveButton5 = document.getElementById('btn-5');
var textArea5 = document.getElementById('text-5');
const hr5Input = localStorage.getItem('input5');
textArea5.innerHTML = hr5Input;
saveButton5.addEventListener('click', function () {
  localStorage.setItem('input5', textArea5.value);
});

