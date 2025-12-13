const footerResponsivo = document.getElementById('footerResponsivo');
const socialMediaAntigo = document.getElementById('redesAntiga')

// Esta função roda quando o tamanho da tela muda
window.addEventListener('resize', () => {
  // Essa variavel pega o tamanho da tela atualizado
  let tamanhoTela = window.innerWidth;
  
  console.log(footerResponsivo.classList.toString());
  /* Esta condicional verifica se o tamanho da tel da variavel tamanhoTela é menor que o desejado para então adicionar ou remover uma classe */
  if (tamanhoTela < 500) {
    // Se for menor que o tamanho escolhido ele remove a classe que está com display:none (esconder)
    footerResponsivo.classList.remove('toggleFooterResponsivo');
    redesAntiga.classList.add('toggleFooterResponsivo');
  } else {
    // Se não for menor que o tamanho escolhido ele adiciona a classe com display: none
    footerResponsivo.classList.add('toggleFooterResponsivo');
    redesAntiga.classList.add('toggleFooterResponsivo');
  }
  /* Ou seja, esse código diz que se o tamanho da tela for menor que X, ele irá mostrar o footer responsivo, e se for maior ele remove. */
})

gsap.from(".menu #btn-mobile", {
  opacity: 0,
  y: 20,
  duration: 1,
  stagger: 0.1
});

gsap.from(".container", {
  scrollTrigger: ".container",
  opacity: 0,
  y: 50,
  duration: 1,
  delay:0.9
});



gsap.from(".texto", {
  scrollTrigger: ".texto",
  opacity: 0,
  y: 20,
  stagger: 0.2,
  duration: 0.8,
  delay:2
});

gsap.from(".container .container-images-banner3", {
  scrollTrigger: ".banner_3",
  duration: 0.9,
  scale: 0.9,
  y: 20,
  opacity: 0,
  stagger: 0.12,
  ease: "back.out(1.2)",
  delay:3
});

gsap.from(".imagem", {
  scrollTrigger: ".imagem",
  clipPath: "inset(0 0 100% 0)",
  duration: 1.3,
  delay:2
});


const gira = document.querySelector(".fundo");

gsap.to(gira, {
  rotation:360,
  repeat:-1,
  duration:5,
  ease:"none"
})


//menu hamburguer

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
  const menu = document.getElementById('menu-mobile');
  menu.classList.toggle('ativo');
}

btnMobile.addEventListener('click', toggleMenu);




