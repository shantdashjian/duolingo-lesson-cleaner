function removeDistractingImages() {
  const elements = Array.from(document.getElementsByTagName('img'))
    .filter(element => element.classList.contains('_3rnxr') || element.classList.contains('_2rgPQ'))
  
  elements.forEach(element => element.remove())
}

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      removeDistractingImages()
    }
  })
})

const config = { 
  childList: true, 
  subtree: true 
}

observer.observe(document.body, config)

removeDistractingImages()