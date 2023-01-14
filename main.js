let Faqbox=document.querySelectorAll(".question--container");

    Faqbox.forEach(item=>item.onclick=()=>{
        item.classList.toggle('aktiv');
        item.lastElementChild.classList.toggle('rotate');
        item.nextElementSibling.classList.toggle('actived');
        setTimeout(function() {
            item.nextElementSibling.classList.toggle('active');
            }, 10);
 
})


let circles=document.querySelectorAll(".nav-circle");

    circles.forEach((circle,index)=>circle.onclick=()=>{
        circles.forEach((item)=>{
            item.classList.remove("current")
  
        })
        let carouselItem = document.querySelectorAll('.review--card')[index];
        if(index!=circles.length-1){
            carouselItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
        }else{
            carouselItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }
        circle.classList.add('current');
    })