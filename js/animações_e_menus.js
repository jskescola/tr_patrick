/*abertura e fechamento Menu Mobile*/

const $menuOpen = document.querySelector('.menuMobileMain')
const $menuMobile = document.querySelector('.menuMobileIcon');
const $menuMobileShut = document.querySelector('.menuMobileShut');


$menuMobile.addEventListener('click', function(){
    $menuOpen.classList.add('menu-open')
})

$menuMobileShut.addEventListener('click', function(){
    $menuOpen.classList.remove('menu-open')
})

/*sub menu mobile*/

  $( ".subMenuMobile" ).click(function() {
    $( ".menuItem" ).toggle( "slow" );
  });

/*Efeito máquina de escrever*/

var div = document.getElementById('log');
var textos = [' prestatividade.', ' praticidade.',' qualidade.'];


function escrever(str, done) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
      if (!char.length) {
          clearInterval(typer);
          return setTimeout(done, 500); // só para esperar um bocadinho
      }
      var next = char.pop();
      div.innerHTML += next;
  }, 100);
}

function limpar(done) {
  var char = div.innerHTML;
  var nr = char.length;
  var typer = setInterval(function() {
      if (nr-- == 100) {
          clearInterval(typer);
          return done();
      }
      div.innerHTML = char.slice(0, nr);
  }, 50);
}

function rodape(conteudos, el) {
  var atual = -1;
function prox(cb){
  if (atual < conteudos.length - 1) atual++;
  else atual = 0;
  var str = conteudos[atual];
  escrever(str, function(){
    limpar(prox);
  });
}
prox(prox);
}
rodape(textos);