// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.





// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?


var now = dayjs().format('H');

function timeTracker() {
  //get current number of hours.
  

  // loop over time blocks
  $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      // To check the time and add the classes for background indicators
      if (blockTime < now) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
      }
      else if (blockTime === now) {
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



//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
// var saveButton9 = document.getElementById('btn-9');
// var textArea9 = document.getElementById('text-9');
// const hr9Input = localStorage.getItem('input9');
// textArea9.innerHTML = hr9Input;
// saveButton9.addEventListener('click', function () {
//   localStorage.setItem('input9', textArea9.value);
// });

// var saveButton10 = document.getElementById('btn-10');
// var textArea10 = document.getElementById('text-10');
// const hr10Input = localStorage.getItem('input10');
// textArea10.innerHTML = hr10Input;
// saveButton10.addEventListener('click', function () {
//   localStorage.setItem('input10', textArea10.value);
// });

// var saveButton11 = document.getElementById('btn-11');
// var textArea11 = document.getElementById('text-11');
// const hr11Input = localStorage.getItem('input11');
// textArea11.innerHTML = hr11Input;
// saveButton11.addEventListener('click', function () {
//   localStorage.setItem('input11', textArea11.value);
// });

// var saveButton12 = document.getElementById('btn-12');
// var textArea12 = document.getElementById('text-12');
// const hr12Input = localStorage.getItem('input12');
// textArea12.innerHTML = hr12Input;
// saveButton12.addEventListener('click', function () {
//   localStorage.setItem('input12', textArea12.value);
// });

// var saveButton1 = document.getElementById('btn-1');
// var textArea1 = document.getElementById('text-1');
// const hr1Input = localStorage.getItem('input1');
// textArea1.innerHTML = hr9Input;
// saveButton1.addEventListener('click', function () {
//   localStorage.setItem('input1', textArea1.value);
// });

// var saveButton2 = document.getElementById('btn-2');
// var textArea2 = document.getElementById('text-2');
// const hr2Input = localStorage.getItem('input2');
// textArea2.innerHTML = hr2Input;
// saveButton2.addEventListener('click', function () {
//   localStorage.setItem('input2', textArea2.value);
// });

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






































// TODO: Add code to display the current date in the header of the page.
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));