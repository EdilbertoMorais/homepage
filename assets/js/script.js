let scrollTop = document.querySelector(".scrollTop");

window.onscroll = () => {
  /**
     * Se a rolagem vertical for maior que 200 pixels, o botão de scroll-top (scrollTop) é exibido (display: "block"), tornando-o visível ao adicionar a classe visible e removendo a classe hidden.

    Caso contrário, a classe hidden é adicionada (iniciando o fade-out) e a classe visible é removida, preparando o botão para desaparecer.
     *  */
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollTop.style.display = "block";
    scrollTop.classList.add("visible");
    scrollTop.classList.remove("hidden");
  } else {
    scrollTop.classList.add("hidden");
    scrollTop.classList.remove("visible");

    // Define uma função para ocultar completamente após o fade-out(desaparecer esmaecidamente)
    setTimeout(() => {
      if (!scrollTop.classList.contains("visible")) {
        scrollTop.style.display = "none";
      }
    }, 2000); // Tempo de transição
  }
};

/*
 *Ao clicar no botão, a página rola suavemente até o topo (top: 0) usando o comportamento de rolagem suave (behavior: "smooth").
 */
scrollTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
