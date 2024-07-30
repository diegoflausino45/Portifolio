    //Seleção de Elementos
    const inicio = document.getElementById('inicio')
    

    inicio.addEventListener('click', function(){
        const perfil = document.getElementById('cabecalho')
        perfil.scrollIntoView({ behavior: 'smooth'})
    })
    
    AOS.init();
    
    
