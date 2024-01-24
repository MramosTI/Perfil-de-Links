function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')

  /* ou */
  
  /*if(html.classList.contains('light')) {
    html.classList.remove('light')
  }
  else{
    html.classList.add('light')
  }
*/
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute('src', './imagens/avatar-light.png')
  }
  else{
    img.setAttribute('src', 'assets/avatar.png')
  }
  /*pegar a tag img e depois substituir imagem.
  se tiver light mode, adicionar imagem ligth se tiver sem ligth mode manter a imagem normal */
}