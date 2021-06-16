// envento do bloco 2 - carrossel

const scrollWheel = event => {
        if (event.deltaY < 0) {
            event.target.scrollBy(300, 0)
        } else {
            event.target.scrollBy(-300, 0)
        }
    }
    // mudar valores quando adicionar mais imagens
let qtdImagem = 8;
let qtdFixaImagem = 4;
let num1 = qtdImagem - qtdFixaImagem;
let scrollValue = num1 * 300;

let count = 0

setInterval(function() {

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
    { nome: 'Miguel Alves Da Silva', depoimento: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore dolore magna', cargo: 'DEV, Aluno - Bootcamp', img: 'timothy-barlin-2BJwlRZaR5M-uns@2x.png' },
    { nome: 'teste', depoimento: 'Eros eu leo sagittis cursus sapien mus bibendum hac rhoncus consequat imperdiet tortor cras malesuada vestibulum condimentum, proin justo nulla commodo convallis nec lectus gravida sed', cargo: 'teste', img: 'matheus-ferrero-W7b3eDUb_2I-un@2x.png' },
    { nome: 'teste2', depoimento: 'Maximus montes nunc sed curae eros himenaeos taciti, donec ipsum fames lacinia eget maecenas, viverra dis eu aliquet sagittis ad. Luctus ultricies viverra ut tempor porta ridiculus varius velit sollicitudin ex molestie', cargo: 'teste2', img: 'christian-buehner-LCi_eKHpErw-@2x.png' }
]

function direita_depoimento() {
    depoimentoContador++;
    if (depoimentoContador == depoimentos.length) {
        depoimentoContador = 0;
    }
    console.log(depoimentoContador)
        // const urlImg = 'assets/img/home/depoimentos/' + depoimentos[depoimentoContador].img;
        // console.log(urlImg)
    document.getElementById("depoimentofoto").setAttribute('src', 'assets/img/home/depoimentos/' + depoimentos[depoimentoContador].img)
    document.getElementById("depoimentotexto").innerHTML = depoimentos[depoimentoContador].depoimento;
    document.getElementById("depoimentonome").innerHTML = depoimentos[depoimentoContador].nome;
    document.getElementById("depoimentocargo").innerHTML = depoimentos[depoimentoContador].cargo;
}

function esquerda_depoimento() {
    depoimentoContador--;
    if (depoimentoContador < 0) {
        depoimentoContador = depoimentos.length - 1;
    }
    console.log(depoimentoContador)
    document.getElementById("depoimentofoto").setAttribute('src', 'assets/img/home/depoimentos/' + depoimentos[depoimentoContador].img)
    document.getElementById("depoimentotexto").innerHTML = depoimentos[depoimentoContador].depoimento;
    document.getElementById("depoimentonome").innerHTML = depoimentos[depoimentoContador].nome;
    document.getElementById("depoimentocargo").innerHTML = depoimentos[depoimentoContador].cargo;
}
//! trocar depoimento