const rates = document.getElementById("rate-parent");
const btn = document.getElementById("btn");
const selected = document.getElementById("selected");

if (rates != null) {
    rates.addEventListener('click', (e)=>{
        var num = e.target.textContent
        localStorage.setItem('num', e.target.textContent );
        // num = e.target.textContent;
        btn.href = "./rated.html";
        console.log(num)
        console.log(typeof(e.target.textContent))
    });
}


// implementation for rated.html
if (selected != null) {
    window.addEventListener('load', ()=>{
        let num = localStorage.getItem('num')
        selected.textContent = 'You selected ' + num + ' out of 5'
    })
}

