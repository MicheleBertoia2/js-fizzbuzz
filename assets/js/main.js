const container = document.querySelector('.container');

for(let i = 1; i <= 100; i++){
  const box = document.createElement('div');
  box.classList.add('box');
  box.innerHTML = i;
  container.appendChild(box);

  if(!(i % 3) && !(i % 5)){
    box.classList.add('fizz')
    box.classList.add('buzz')
    box.innerHTML = 'FIZZBUZZ!';    
  }else if (!(i % 5)){
    box.classList.add('buzz')
    box.innerHTML = 'BUZZ';  
  }else if (!(i % 3)){
    box.classList.add('fizz')
    box.innerHTML = 'FIZZ';  
  }
}