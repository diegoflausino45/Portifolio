    //Seleção de Elementos
    const navProjetos = document.getElementById('nav-projetos')
    const navFormacao = document.getElementById('nav-formacao')
    const navContatos = document.getElementById('nav-contatos')
    const inicio = document.getElementById('inicio')
    
    navFormacao.addEventListener('click', function() {
        const tituloFormacao = document.getElementById('formacao')
        if (tituloFormacao) {
            tituloFormacao.scrollIntoView({ behavior: 'smooth' })
        }
    })
    
    navContatos.addEventListener('click', function() {
        const tituloContatos = document.getElementById('contatos')
        if (tituloContatos) {
            tituloContatos.scrollIntoView({ behavior: 'smooth' })
        }
    })
    
    navProjetos.addEventListener('click', function(){
        const tituloProjeto = document.getElementById("projetos")
        if (tituloProjeto) {
            tituloProjeto.scrollIntoView({ behavior: 'smooth' })
        }
    })

    inicio.addEventListener('click', function(){
        const perfil = document.getElementById('cabecalho')
        perfil.scrollIntoView({ behavior: 'smooth'})
    })
    
    AOS.init();
    
    
