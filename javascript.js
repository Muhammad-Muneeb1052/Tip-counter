var tip = '';
var addAmount = document.getElementById('amount');
var guest = document.getElementById('guest');
var quality = document.getElementById('quality');
var tip_count = document.getElementById('tip_count');
function tipCount(){
    tip = ((addAmount.value * quality.value)/(guest.value)).toFixed(2);
    document.getElementById('tip_count').innerHTML ='$' + tip;

    showTipAmount();
    if(addAmount.value == '' || guest.value == ''){
        document.getElementById('tip_count').innerHTML = 'Tip 0$ each';  
        showTipAmount();
      
    }
    addAmount.value = '';
    guest.value = '';
    quality.value = '';
    tip_count.value = ''; 
}

function showTipAmount(){
    var x = tip_count;
    x.className = 'show';
    setTimeout(function(){
        x.className = x.className.replace('show','');
    },3000)
}