let mondayButt = document.getElementById('Monday'),
tuesdayButt = document.getElementById('Tuesday'),
wednesdayButt = document.getElementById('Wednesday'),
thursdayButt = document.getElementById('Thursday'),
fridayButt = document.getElementById('Friday'),
saturdayButt = document.getElementById('Saturday'),
sundayButt = document.getElementById('Sunday'),
mondaySpecial = document.getElementById('mondaySpecial'),
tuesdaysSpecial = document.getElementById('tuesdaysSpecial'),
wednesdaySpecial = document.getElementById('wednesdaySpecial'),
thursdaySpecial = document.getElementById('thursdaySpecial'),
fridaySpecial = document.getElementById('fridaySpecial'),
saturdaySpecial = document.getElementById('saturdaySpecial'),
sundaySpecial = document.getElementById('sundaySpecial')


mondayButt.addEventListener('click', function(){
    if(mondaySpecial.style.display==='none'){
        mondaySpecial.style.display='block'
    }else{
        mondaySpecial.style.display='none';
    }
});

tuesdayButt.addEventListener('click', function(){
    if(tuesdaysSpecial.style.display==='none'){
        tuesdaysSpecial.style.display='block'
    }else{
        tuesdaysSpecial.style.display='none'
    }
});

wednesdayButt.addEventListener('click', function(){
    if(wednesdaySpecial.style.display==='none'){
        wednesdaySpecial.style.display='block'
    }else{
        wednesdaySpecial.style.display='none'
    }
});



fridayButt.addEventListener('click', function(){
    if(fridaySpecial.style.display==='none'){
        fridaySpecial.style.display='block'
    }else{
        fridaySpecial.style.display='none'
    }
})
saturdayButt.addEventListener('click', function(){
    if(saturdaySpecial.style.display='none'){
        saturdaySpecial.style.display='block'
    }else{
        saturdaySpecial.style.display='none'
    }
})
sundayButt.addEventListener('click', function(){
    if(sundaySpecial.style.display==='none'){
sundaySpecial.style.display='block'
    }else{
        sundaySpecial.style.display='none'
    }
})




thursdaySpecial.addEventListener('click', function(){
    if(thursdaySpecial.style.display==='none'){
        thursdaySpecial.style.display='block'
    }else{
        thursdaySpecial.style.display='none'
    }
});



// btn.addEventListener('click', function(){
//     if(div.style.display==='none'){
//         div.style.display='block';
//     }else{
//         div.style.display='none';
//     }
// })