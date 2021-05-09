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
thurdsaySpecial = document.getElementById('thurdsaySpecial'),
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
thurdsaySpecial.addEventListener('click', function(){
    if(thurdsaySpecial.style.display==='none'){
        thurdsaySpecial.style.display='block'
    }else{
        thurdsaySpecial.style.display='none'
    }
})








btn.addEventListener('click', function(){
    if(div.style.display==='none'){
        div.style.display='block';
    }else{
        div.style.display='none';
    }
})