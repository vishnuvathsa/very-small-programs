let color = document.getElementById('color')
let backclr = document.getElementById('wrap')
let button = document.getElementById('btn')
let clrarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

button.addEventListener('click', change)

function change() {
    let str = '#'
    for (let i = 0; i < 6; i++) {
        let randomclr = Math.floor(Math.random() * 16)
        str = str + clrarr[randomclr]
    }
    console.log(str)
    color.innerHTML = str
    backclr.style.backgroundColor = str

}