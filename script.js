const close1 = document.querySelector(".close");
close1.style.display = 'none';
const menu1 = document.querySelector(".hamberg")
const menu2 = document.querySelector(".menu")
menu1.addEventListener('click',()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        setTimeout(() => {
            menu2.style.display = 'inline';
        }, 300);
        
        close1.style.display = 'none';
    }
    else{
        menu2.style.display = 'none';
        setTimeout(() => {
            close1.style.display = 'inline';
        }, 300);
        
    }
})
document.get