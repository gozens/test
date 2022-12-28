const barre = document.querySelector('.barre')

function barref(temps,color){
    let j= 0
    let veri = false
    barre.style.width = 0+'px'
    barre.style.borderRadius = 10+'px'
    barre.style.backgroundColor = color
    const t = setInterval(() => {
        ++j
        barre.style.width = j+'%'
        barre.innerHTML = j+' %'
        if(j == 100) {
            clearInterval(t)
            const t1 = setInterval(() => {
                --j
                if(j == 99){
                    barre.style.width = 0+'px'
                    clearInterval(t1)
                }
            }, 1000);
        }
    }, temps);

}


const posB = document.querySelector('.pos-but')
function plc() {
    h = innerHeight
    posB.style.transform = 'translate(0,'+(h-100)+'px)'
}
plc()
const ajouters = document.querySelector('.but1')
const par = document.querySelector('.div1')
let i = 0
ajouters.onclick = ()=>{
    barref(5,'rgb(15, 199, 76)')
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
    barref(1, 'rgba(15, 110, 199, 0.808)')
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
        barref(1,'rgba(219, 19, 46, 0.808)')
    } catch (error) {
        
    }

}
const sups = document.querySelector('.but3')
sups.onclick= ()=>{
    try{
        let j= i = 0
        const el = document.querySelectorAll('.div')
        el.length != 0 ? barref(el.length,'#000') :0
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

