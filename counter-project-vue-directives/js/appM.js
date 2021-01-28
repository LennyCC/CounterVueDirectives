app.directive('blick-no-action', {
  beforeMount(el, binding, vnode) {
      document.addEventListener("mousemove", () => {
          if (el.style.borderColor = "#ffff0000") {
              clearTimeout(3000)
              setTimeout(() => {
                  el.style.borderColor = "yellow"
                  el.style.borderWidth = "3px"
              }, binding.value * 1000)
          }
      }, false)
  }
})