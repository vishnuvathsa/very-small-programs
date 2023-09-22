let select = document.querySelectorAll('.currency')
let btn = document.getElementById('but')
let input = document.querySelector('.in1')
fetch('https://api.frankfurter.app/currencies')
    .then(res => res.json())
    .then(res => displaydropdown(res))


function displaydropdown(res) {
    let curr = Object.entries(res)
    for (let i = 0; i < curr.length; i++) {
        let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML += opt
        select[1].innerHTML += opt
    }
}
btn.addEventListener('click', () => {
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputval = input.value
    if (curr1 == curr2) {
        alert("Choose different currencies")
    } else {
        convert(curr1, curr2, inputval)
    }
});

function convert(curr1, curr2, inputval) {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputval}&from=${curr1}&to=${curr2}`)
        .then(resp => resp.json())
        .then((data) => {
            document.querySelector('.result').value = Object.values(data.rates)[0]
        });
}