// Função que aplica o estilo à opção selecionada e remove a selecionada anteriormente
function selecionar(link) {
  var opções = document.querySelectorAll('#links a');
  opções.forEach(function(opção) {
    opção.classList.remove("selecionado");
  });
  link.classList.add("selecionado");

  // Faz o menu desaparecer assim que uma opção for selecionada no modo responsivo
  var x = document.getElementById("nav");
  x.classList.remove("responsivo");
}

// Função que mostra ou oculta o menu responsivo
function menuResponsivo() {
  var x = document.getElementById("nav");
  if (x.classList.contains("responsivo")) {
      x.classList.remove("responsivo");
  } else {
      x.classList.add("responsivo");
  }
}

  
  // Detecta a rolagem para aplicar a animação da barra de habilidades
  window.onscroll = function() {
    efeitoHabilidade();
  };
  
  // Função que aplica a animação da barra de habilidade
  function efeitoHabilidade() {
    var habilidade = document.getElementById("habilidades");
    var distancia_habilidade = window.innerHeight - habilidade.getBoundingClientRect().top;
    if (distancia_habilidade >= 300) {
      document.getElementById("html").classList.add("barra-progreso1");
      document.getElementById("js").classList.add("barra-progreso2");
      document.getElementById("bd").classList.add("barra-progreso3");
      document.getElementById("ps").classList.add("barra-progreso4");
    }
  }
  
  function enviarFormulario(event) {
    event.preventDefault();
    
  
    
    // Obtém os valores dos campos
    var name = document.getElementsByName('nome')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var message = document.getElementsByName('mensagem')[0].value;

  }
    