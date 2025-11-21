const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
};
//  console.log(randomColor())
let interval

const startChangeColor = () => {
        document.body.style.backgroundColor = randomColor()
}

const changeColor = () => {
    interval = setInterval( startChangeColor, 1000);
}

const stopChangeColor = () => {
    clearInterval(interval)
}

document.getElementById('start').addEventListener("click", changeColor)
document.getElementById('stop').addEventListener('click', stopChangeColor)