    document.addEventListener("DOMContentLoaded", function(){
        //Seleção de Elementos
        const menu = document.getElementById("menu")
        const navProjetos = document.getElementById('nav-projetos')
        const navFormacao = document.getElementById('nav-formacao')
        const navContatos = document.getElementById('nav-contatos')
        const inicio = document.getElementById('inicio')
        const DarkMode = document.getElementById('fotoPerfil')
        const mudarTexto = document.querySelectorAll(".mudarTexto")
        const imgProjeto = document.querySelectorAll(".img-projeto")
        const mudarBorda = document.querySelectorAll(".mudarBorda")
        const botao = document.querySelectorAll(".botao")
        const mudarIcon = document.querySelectorAll(".mudarIcon")

        DarkMode.addEventListener('click', function(){
            const body = document.getElementById('body')
            if(body.classList.contains("lightMode")){
                body.classList.remove("lightMode")
                body.classList.add("darkMode")

                menu.classList.remove("text-gray-500")
                menu.classList.add("text-gray-200")

                mudarTexto.forEach(element => {
                    element.classList.remove("text-black");
                    element.classList.add("text-white");
                })

                imgProjeto.forEach(element => {
                    element.classList.remove("sombra");
                    element.classList.add("sombra1");
                })

                mudarBorda.forEach(element => {
                    element.classList.remove("border-black");
                    element.classList.add("border-white");
                })

                botao.forEach(element => {
                    element.classList.remove("btn")
                    element.classList.add("btn1")
                })
                mudarIcon.forEach(element => {
                    element.classList.remove("border-black", "hover:bg-black", "hover:text-white")
                    element.classList.add("border-white", "hover:bg-white", "hover:text-black")
                })
            }else{
                body.classList.remove("darkMode")
                body.classList.add("lightMode")

                menu.classList.remove("text-gray-200")
                menu.classList.add("text-gray-500")

                mudarTexto.forEach(element => {
                    element.classList.remove("text-white");
                    element.classList.add("text-dark");
                })

                imgProjeto.forEach(element => {
                    element.classList.remove("sombra1");
                    element.classList.add("sombra");
                })
                mudarBorda.forEach(element => {
                    element.classList.remove("border-white");
                    element.classList.add("border-black");
                })

                botao.forEach(element => {
                    element.classList.remove("btn1")
                    element.classList.add("btn")
                })
                mudarIcon.forEach(element => {
                    element.classList.remove("border-white", "hover:bg-white", "hover:text-black")
                    element.classList.add("border-black", "hover:bg-black", "hover:text-white")
                })
            }
        })
        
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
        

    })
    
    AOS.init();
    
    
