
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let code = "#";
  for (let i = 0; i < 6; i++) {
    code += hex[Math.floor(Math.random() * 16)];
  }
  return code;
};

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) return;

  let color = e.target.textContent.trim().toLowerCase();

  document.body.style.backgroundColor =
    color === "random" ? randomColor() : color;
});
