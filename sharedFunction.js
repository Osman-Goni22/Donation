function getInputValue(id){
    let value=document.getElementById(id).value;
    value=parseFloat(value);
    if(isNaN(value)){
        return('Invalid Donation Amount');
    }

    else if(value<0){
        return('Invalid Donation Amount');

        
    }
  else{
    
    return value;
  }
}


function getInnerText(id){
    let value=document.getElementById(id).innerText;
    value=parseFloat(value);
    return value;
}