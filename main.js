const clickBtn = document.querySelector("#click");
const showNum = document.querySelector("#plus");

clickBtn.addEventListener('click', ()=> {
    showNum.textContent++;
});