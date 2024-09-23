


const container= document.getElementById('container');

function historyMaker(amount,name){
   const li= document.createElement('p');
   li.classList.add('shadow', 'lg:h-20', 'lg:w-1/2','mx-auto','mt-10','p-4','text-lg','font-semibold','bg-gray-300');
      li.innerHTML=`<li class=" list-none"> <span>${amount} is donated  ${name} </span></li>
      <p> ${new Date() }</p>


    `
    container.appendChild(li);
}


