const barre = document.querySelector('.barre')

// h= innerHeight
// w = innerWidth
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
                    barre.innerHTML = ''
                }
            }, 1000);
        }
    }, temps);

}


const posB = document.querySelector('.pos-but')
function plc() {
    h = innerHeight
    posB.style.transform = 'translate(0,'+(h-150)+'px)'
}
plc()
const ajouters = document.querySelector('.but1')
const par = document.querySelector('.div1')
let i = 0
ajouters.onclick = ()=>{
    barref(5,'rgb(15, 199, 76)')
    const t = setInterval(() => {
        i++
        i % 5 ==0 ? clearInterval(t) : 0
        const e = document.createElement('div')
        e.className = "div"
        let el = document.createTextNode(i)
        e.appendChild(el)    
        const avant = document.querySelector('.div')
        par.insertBefore(e,avant)
//         try {
            
// let div = document.querySelectorAll('.div')
//             div[i].style.transform = 'translate('+x+'px,'+y+'px) rotate('+z+'deg)'
//         } catch (error) {
            
//         }
        
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
        el.length >= 50 ? barref(el.length+30,'#000') :0
        el.length >= 20 ? barref(el.length+10,'#000') :0
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

const def = document.querySelectorAll('.def')

function lc(i,y) {
    // def.item(i).style.display = 'block'
    def.item(i).style.transform = 'translate(200%,'+y+'px) rotate(-60deg)'
    def.item(i).style.transition = 'all 4s'
}
function an(i,y) {
    // def.item(i).style.opacity = '0'
    def.item(i).style.transition = '0s'
    // def.item(i).style.transform = 'translate(-55px,'+(y)+'px)'
    def.item(i).style.transform = 'translate(-60px,'+y+'px) rotate(-90deg)'
    
}
let j = 0
const an1 = setInterval(() => {
    j == 0 ? lc(j,20) : lc(j,-20)
    setTimeout(() => {
        j == 0 ? an(j,20) : an(j,-30)
        j++
        j == def.length ? j = 0:0
    }, 2500);
}, 5000);

// const anm = document.querySelector('.anm')
// setInterval(() => {
    
// }, 2000);
