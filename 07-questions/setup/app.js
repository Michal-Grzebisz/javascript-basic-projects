// //using selectors inside the element
// // traversing the dom

// // const btns = document.querySelectorAll('.question-btn');

// // btns.forEach(item => {
// //     item.addEventListener('click', function(e){
// //         const questions = e.currentTarget.parentElement.parentElement
// //         questions.classList.toggle('show-text')
// //     })
// // })

// const questions = document.querySelectorAll('.question')

// questions.forEach(item => {
//     const btn = item.querySelector('.question-btn')

//     btn.addEventListener('click', function(){
//         questions.forEach((question) => {
//             if(question !== item) {
//                 question.classList.remove('show-text')
//             }
//         })


//         item.classList.toggle('show-text')
//     })
// })

const questionBtn = document.querySelectorAll('.question-btn');
const text = document.querySelector('.question-text')



questionBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        text.classList.remove('question-text')
        text.classList.add('show-text question-text')
    })
})





























