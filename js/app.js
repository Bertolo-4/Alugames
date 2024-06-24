    function alterarStatus(id){
        let clicado  = document.getElementById(`game-${id}`); 
        let img = clicado.querySelector('.dashboard__item__img'); 
        let botao = clicado.querySelector('.dashboard__item__button');
      
      
       if(img.classList.contains('dashboard__item__img--rented')){
            img.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = "Alugar"
        }else{
            img.classList.add('dashboard__item__img--rented');
            botao.innerHTML = "Devolver"
            botao.classList.add('dashboard__item__button--return');
        }

      
    }

