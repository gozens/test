
const posB = document.querySelector('.pos-but')
function plc() {
    h = innerHeight
    console.log(h);
    posB.style.transform = 'translate(0,'+(h-70)+'px)'
}
plc()
const ajouters = document.querySelector('.but1')
const par = document.querySelector('.div1')
let i = 0
ajouters.onclick = ()=>{
    const t = setInterval(() => {
        ++i
        i % 5 ==0 ? clearInterval(t) : 0
        const e = document.createElement('div')
        e.className = "div"
        let el = document.createTextNode(i)
        e.appendChild(el)    
        const avant = document.querySelector('.div')
        par.insertBefore(e,avant)
        
        
    }, 200);
}

const ajouter = document.querySelector('.but0')
ajouter.onclick = ()=>{
    const el = document.querySelector('.div')
    const e = document.createElement('div')
    e.className = 'div'
    e.innerHTML = ++i
    par.insertBefore(e,el)

}
const sup = document.querySelector('.but2')
sup.onclick= ()=>{
    try {
        const el = document.querySelector('.div')
        par.removeChild(el)
        i--
        
    } catch (error) {
        
    }

}
const sups = document.querySelector('.but3')
sups.onclick= ()=>{
    try{
        let j= i = 0
        const el = document.querySelectorAll('.div')
        const t = setInterval(() => {
            try {
                par.removeChild(el.item(j))
            } 
            catch (error) {
                clearInterval(t)
            }
            j++
            j == el.length ? clearInterval(t):0 
        }, 200);
    }
    catch{
        clearInterval(t)
    }
    

}
