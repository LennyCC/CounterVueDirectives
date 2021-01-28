app.directive('blink-if-no-action', {
  beforeMount(el, binding, vnode) {
      let timeOut = setTimeout(function() {
          el.style.backgroundColor = 'yellow';
          el.style.color = 'blue'
      }, binding.value * 1000)

      document.body.addEventListener('mousemove', highlightButtons)

      function highlightButtons() {
          clearTimeout(timeOut)
          timeOut = setTimeout(function() {
              el.style.backgroundColor = 'yellow';
              el.style.color = 'blue';
          }, binding.value * 1000)
      }
  }

})