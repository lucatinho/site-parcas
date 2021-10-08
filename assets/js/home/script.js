// envento do bloco 2 - carrossel

const scrollWheel = event => {
        if (event.deltaY < 0) {
            event.target.scrollBy(300, 0)
        } else {
            event.target.scrollBy(-300, 0)
        }
    }
    // mudar valores quando adicionar mais imagens
let qtdImagem = 28;
let qtdFixaImagem = 4;
let num1 = qtdImagem - qtdFixaImagem;
let scrollValue = num1 * 300;

let count = 0

setInterval(function() {

    count += 300
    if (count > scrollValue) count = 0
    document.querySelector(".items").scrollTo(count, 0)

    var trocapreenchimento = scrollValue /3;

    if (trocapreenchimento > count) {
        document.getElementById("preencimento1").setAttribute('d', 'M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z')
        document.getElementById("preencimento2").setAttribute('d', '')
        document.getElementById("preencimento3").setAttribute('d', '')

    } else if (trocapreenchimento * 2 > count) {
        document.getElementById("preencimento1").setAttribute('d', '')
        document.getElementById("preencimento2").setAttribute('d', 'M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z')
        document.getElementById("preencimento3").setAttribute('d', '')
    } else {
        document.getElementById("preencimento1").setAttribute('d', '')
        document.getElementById("preencimento2").setAttribute('d', '')
        document.getElementById("preencimento3").setAttribute('d', 'M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z')
    }
    // console.log('moveu', count)
}, 3000)

function esquerda() {
    count -= 300
    if (count < 0) count = scrollValue
    document.querySelector(".items").scrollTo(count, 0)
    if (scrollValue / 2 > count) {
        document.getElementById("preencimento1").setAttribute('d', 'M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z')
        document.getElementById("preencimento2").setAttribute('d', '')
        document.getElementById("preencimento3").setAttribute('d', '')

    } else if (scrollValue / 2 < count) {
        document.getElementById("preencimento1").setAttribute('d', '')
        document.getElementById("preencimento2").setAttribute('d', '')
        document.getElementById("preencimento3").setAttribute('d', 'M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z')
    } else {
        document.getElementById("preencimento1").setAttribute('d', '')
        document.getElementById("preencimento2").setAttribute('d', 'M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z')
        document.getElementById("preencimento3").setAttribute('d', '')
    }
    // console.log('moveu', count)
}

function direita() {
    count += 300
    if (count > scrollValue) count = 0
    document.querySelector(".items").scrollTo(count, 0)
    if (scrollValue / 2 > count) {
        document.getElementById("preencimento1").setAttribute('d', 'M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z')
        document.getElementById("preencimento2").setAttribute('d', '')
        document.getElementById("preencimento3").setAttribute('d', '')

    } else if (scrollValue / 2 < count) {
        document.getElementById("preencimento1").setAttribute('d', '')
        document.getElementById("preencimento2").setAttribute('d', '')
        document.getElementById("preencimento3").setAttribute('d', 'M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z')
    } else {
        document.getElementById("preencimento1").setAttribute('d', '')
        document.getElementById("preencimento2").setAttribute('d', 'M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z')
        document.getElementById("preencimento3").setAttribute('d', '')
    }
    // console.log('moveu', count)
}


// funciona com o scroll do mouse 

// document.querySelector(".items").addEventListener("wheel", event => {
//     if (event.deltaY > 0) {
//         event.target.scrollBy(300, 0)
//     } else {
//         event.target.scrollBy(-300, 0)
//     }
// })

// ! envento do bloco 2 - carrossel

// trocar depoimento
var depoimentoContador = 0;
const depoimentos = [
    { nome: 'Paulo | QA Unicórnio', depoimento: 'Para mim o curso é uma incrível experiência, tanto pessoal quanto profissional. Me proporciona uma ampla visão de mundo, desde a essência da abundância de propósito ao real significado de tecnologia e sua amplitude, com visão de futuro. Vejo nesse curso a oportunidade de transformar minha vida significativamente para melhor, assim como a da minha família.', cargo: 'DEV, Aluno - Bootcamp', img: 'Paulo-emmanuel.png' },
    { nome: 'Iury H. | QA Unicórnio', depoimento: 'A {Parças} tem dado uma chance real de viver do que eu sonho, uma chance real de mudar uma perspectiva de vida, de me dedicar a cada aula com cuidado, pesquisando em outras fontes também. Aquela energia, aquela vontade de crescer, isso tem sido muito legal.', cargo: 'DEV, Aluno - Bootcamp', img: 'lury.png' },
    { nome: 'Pedro | QA Unicórnio', depoimento: 'Para mim tem sido uma experiência única de aprendizado e carreira. Quando descobri minha paixão pela programação fiquei desorientado com a quantidade de tecnologias que tinha que aprender para conseguir algo na área e nesse contexto a {Parças} chegou como uma luz para mim. Está me fazendo aprender todo o necessário para conseguir algo para vida.', cargo: 'DEV, Aluno - Bootcamp', img: 'pedro.png' },
    { nome: 'Alexandre Soares | QA Unicórnio', depoimento: 'Aqui conheci o termo abundancia de propósito e jamais poderia imagina que isto nos levaria além. Me sinto grato pela oportunidade que me foi dada e não apenas isso, mas a oportunidade de sonhar e realizar esse mesmo sonho. Tem sido uma experiência única de aprendizagem e de autoconhecimento.', cargo: 'DEV, Aluno - Bootcamp', img: 'Alexandre-Soares.png' },
    { nome: 'Glória Furlan | QA Unicórnio', depoimento: 'A equipe é incrível pois não têm só a preocupação se estamos aprendendo e conseguindo fazer os exercícios, mas também se estamos passando por algum problema pois isso pode influenciar no aprendizado. Sempre tentam ajudar de alguma forma mesmo se for apenas com uma simples conversa e na maioria das vezes é essencial', cargo: 'DEV, Aluno - Bootcamp', img: 'Gloria-furlan.png' },
    { nome: 'Eliza Augusta | QA Unicórnio', depoimento: 'Gostaria de agradecer à equipe que seleciona os materiais que serão estudados. Ótimo material, sem dúvida. Eles estão diretamente relacionados com o que eu desejo trabalhar e seguir para vida inteira', cargo: 'DEV, Aluno - Bootcamp', img: 'Eliza-Augusta.png' }
]

function direita_depoimento() {
    depoimentoContador++;
    if (depoimentoContador == depoimentos.length) {
        depoimentoContador = 0;
    }
    // console.log(depoimentoContador)
    // const urlImg = 'assets/img/home/depoimentos/' + depoimentos[depoimentoContador].img;
    // console.log(urlImg)
    document.getElementById("depoimentofoto").setAttribute('src', 'assets/img/home/depoimentos/' + depoimentos[depoimentoContador].img)
    document.getElementById("depoimentotexto").innerHTML = depoimentos[depoimentoContador].depoimento;
    document.getElementById("depoimentonome").innerHTML = depoimentos[depoimentoContador].nome;
    document.getElementById("depoimentocargo").innerHTML = depoimentos[depoimentoContador].cargo;

    caixa.style.animation = "";
    setTimeout(() => caixa.style.animation = "deslizar 1s linear", );
}

function esquerda_depoimento() {
    depoimentoContador--;
    if (depoimentoContador < 0) {
        depoimentoContador = depoimentos.length - 1;
    }
    // console.log(depoimentoContador)
    document.getElementById("depoimentofoto").setAttribute('src', 'assets/img/home/depoimentos/' + depoimentos[depoimentoContador].img)
    document.getElementById("depoimentotexto").innerHTML = depoimentos[depoimentoContador].depoimento;
    document.getElementById("depoimentonome").innerHTML = depoimentos[depoimentoContador].nome;
    document.getElementById("depoimentocargo").innerHTML = depoimentos[depoimentoContador].cargo;

    caixa.style.animation = "";
    setTimeout(() => caixa.style.animation = "deslizar 2s linear", );
}
// animação depoimento
const caixa = document.querySelector("#animacao-depoimento");

//! trocar depoimento

// pegar posts blog
function loadPosts() {
    fetch('http://parcasfoundation.com.br/wp-json/wp/v2/posts?per_page=3', { mode: 'cors', credentials: 'include' })
        .then(function(resultado) {
            return resultado.json();
        })
        .then(function(json) {
            console.log("resultado: " + json)
        })
        .catch(function(erro) {
            console.log("erro: " + erro)
        })
}
//! pegar posts blog