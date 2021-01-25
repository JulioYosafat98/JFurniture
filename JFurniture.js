let scrollpos = window.scrollY
const header = document.querySelector(".header")
const header_height = header.offsetHeight




window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY

  if (scrollpos >= header_height) { 
      header.style.backgroundColor='red' 
    }
  else {
       header.style.backgroundColor='wheat'
}

  console.log(scrollpos)
})
