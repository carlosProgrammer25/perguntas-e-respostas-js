//select all retorna um node list
var elementos = document.querySelectorAll('input[type=radio]');


//percorrera todos os inputs
for( let i = 0; i < elementos.length;  i++){

    //quando ocorrer uma mudança no input radio, o navegador passa um objeto de evento
    //Objeto de evento, porque possui propriedades e métodos que permitem manipular o evento e o elemento que o disparou
    elementos[i].addEventListener('change', (obj)=>{

        //target elemento dom atingido
        //value propriedade do objto dom, que faz referencia ao atributo value da tag html
        let marcado = obj.target.value;

        // marcado = objeto clicado
        if(marcado == 'correta'){

            //elemento pai do elemento clicado
            let parentNode = obj.target.parentNode;

            //aplicando estilo no pai do elemento clicado
            parentNode.style.backgroundColor = 'green';

            //pai do pai do elemento clicado
            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            //desativando inputs tipo radio
            for (let n = 0; n < els.length; n++){
                els[n].disabled = true;
            };
        }else{
            //RESPOSTA ERRADA

            //aplicando estilo no bloco do elemento clicado
            let parentNode = obj.target.parentNode;
            parentNode.style.backgroundColor = 'red';

            //desativando inputs tipo radio
            let els = parentNode.parentNode.querySelectorAll('[type=radio]');
            for (let n = 0; n < els.length; n++){
                els[n].disabled = true;
            };

            //informando a opcao correta
            //retorna o elemento com atributo value="correta" dentro do pai do pai do radio clicado
            let correta = parentNode.parentNode.querySelector('[value=correta]');
            correta.parentNode.style.backgroundColor = 'green';
        };
    });
};

//pege o elemento com id limparTudo quando ocorrer um click
document.getElementById('limparTudo').addEventListener('click', ()=>{

    //pegando todos elementos radio
    let radios = document.querySelectorAll('input[type=radio]');

    //percorrer input
    for(let i = 0; i < radios.length; i++){
        //desmarcando input
        radios[i].checked = false;
    };

    //remover cores das respostas
    //pega todas as elementos com class resposta
    let respostas = document.querySelectorAll('.resposta');
    for (let i = 0; i < respostas.length; i++) {
    //aplica em todos elementos cor de fundo braco
    respostas[i].style.backgroundColor = 'white';
    };
});


/*
Este projeto foi desenvolvido com JavaScript puro,
utilizando apenas recursos nativos da linguagem e da API do DOM,
sem dependência de frameworks ou bibliotecas externas.
*/
