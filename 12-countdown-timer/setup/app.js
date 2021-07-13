const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')


let futureDate = new Date(2021, 8, 25, 11, 30, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
let day = futureDate.getDay()
day = weekdays[day]
let month = futureDate.getMonth()
month = months[month]
const date = futureDate.getDate()




giveaway.textContent = `giveaway ends on ${day} ${date} 
${month} ${year} ${hours}:${minutes}`

const futureTime = futureDate.getTime()



const getRemainigTime = () => {
  const today = new Date().getTime()
  const t = futureTime - today
  const oneDay = 24*60*60*1000
  const oneHour = 60*60*1000
  const oneMinute = 60*1000

  let days = Math.floor(t/oneDay)

  console.log(days)

  let hours = Math.floor((t % oneDay)/oneHour)

  console.log(hours)

  let minutes = Math.floor((t % oneHour) / oneMinute)

  console.log(minutes)

  let seconds = Math.floor((t % oneMinute) / 1000)

  console.log(seconds)

  const values = [days,hours,minutes,seconds]

  const format = (item) => {
    if(item < 10){
      return (item = `0${item}`)
    } else {
      return item
    }
  }

  items.forEach((item,index) => {
    item.textContent = format(values[index])
  })

  if (t < 0) {
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">sorry this giveaway has expired</h4>`
  }
}

let countdown = setInterval(getRemainigTime,1000)



getRemainigTime()



