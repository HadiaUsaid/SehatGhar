let bars=document.querySelector('#bars')
let links = document.querySelector('.links');

bars.addEventListener('click', ()=>{
    if (links.style.display=="block") {
        links.style.display="none"
        bars.className="fa fa-bars"
    }
    else{
        links.style.display="block"
        bars.className="fa fa-close"
    }
})

