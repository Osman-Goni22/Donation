document.getElementById('historyButton').addEventListener('click', function(){
  const historyButton = document.getElementById('historyButton');
  historyButton.classList.add('bg-green-500');

  const donateButton = document.getElementById('donateButton');
  donateButton.classList.remove('bg-green-500');
  const hideDonateSection= document.getElementById('donate-section');
  hideDonateSection.classList.add('hidden');
  document.getElementById('container').classList.remove('hidden');
})




document.getElementById('donateButton').addEventListener('click', function(){
  const historyButton = document.getElementById('historyButton');
  historyButton.classList.remove('bg-green-500');

  const donateButton = document.getElementById('donateButton');
  donateButton.classList.add('bg-green-500');
  const hideDonateSection= document.getElementById('donate-section');
  hideDonateSection.classList.remove('hidden');
  document.getElementById('container').classList.add('hidden');
})



document.getElementById('noakhaliDonationButton').addEventListener('click', function(){
    const fundAmount =getInnerText('donated-amount-noahkhali');
    const donatedAmount= getInputValue('donated-amount');

    const FinalAmount = fundAmount+donatedAmount;
    if(typeof donatedAmount==='number'){
        let initialAmount = document.getElementById('initial-amount').innerText;
        initialAmount=parseFloat(initialAmount);
        
        const remaining=initialAmount-donatedAmount;
        document.getElementById('initial-amount').innerText=remaining;
        document.getElementById('donated-amount-noahkhali').innerText=FinalAmount;

        my_modal_1.showModal();

        const name= document.getElementById('name').innerText;

        historyMaker(donatedAmount,name);

    }

    else{
        alert(donatedAmount);
    }
    
});

document.getElementById('feni').addEventListener('click', function(){
    const fundAmount =getInnerText('feniFund');
    const donatedAmount= getInputValue('donating');

    const FinalAmount = fundAmount+donatedAmount;
    if(typeof donatedAmount=='number'){
        let initialAmount = document.getElementById('initial-amount').innerText;
        initialAmount=parseFloat(initialAmount);
        
        const remaining=initialAmount-donatedAmount;
        document.getElementById('initial-amount').innerText=remaining;
        document.getElementById('feniFund').innerText=FinalAmount;

        my_modal_1.showModal();

        const name= document.getElementById('name-2').innerText;

        historyMaker(donatedAmount,name);

    }

    else{
        alert(donatedAmount);
    }

});


document.getElementById('movement').addEventListener('click', function(){
    const fundAmount =getInnerText('donated-amount-quota-movement');
    const donatedAmount= getInputValue('movementDonating');

    const FinalAmount = fundAmount+donatedAmount;
    if(typeof donatedAmount=='number'){
        let initialAmount = document.getElementById('initial-amount').innerText;
        initialAmount=parseFloat(initialAmount);
        
        const remaining=initialAmount-donatedAmount;
        document.getElementById('initial-amount').innerText=remaining;
        document.getElementById('donated-amount-quota-movement').innerText=FinalAmount;

        my_modal_1.showModal();

        const name= document.getElementById('name-3').innerText;

        historyMaker(donatedAmount,name);

    }

    else{
        alert(donatedAmount);
    }

});








