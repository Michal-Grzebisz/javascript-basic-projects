// const value = document.querySelector("#value");
// const btns = document.querySelectorAll(".btn");

// let count = 0;

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       count--;
//     } else if (styles.contains("increase")) {
//       count++;
//     } else {
//       count = 0;
//     }

//     if (count > 0) {
//       value.style.color = "green";
//     }
//     if (count < 0) {
//       value.style.color = "red";
//     }
//     if (count === 0) {
//       value.style.color = "#222";
//     }
//     value.textContent = count;
//   });
// });

const btns = document.querySelectorAll('.btn')
const value = document.getElementById('value')

let counter = 0

btns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    if (e.currentTarget.classList.contains('increase')) {
      counter ++
    } else if (e.currentTarget.classList.contains('decrease')){
      counter --
    } else if (e.currentTarget.classList.contains('reset')) {
      counter = 0
    }

    if (counter > 0) {
      value.style.color = 'green'
    } else if (counter < 0) {
      value.style.color = 'red'
    } else {
      value.style.color = 'black'
    }

    value.textContent = counter
  })
})






























