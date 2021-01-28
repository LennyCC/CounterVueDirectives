const app = Vue.createApp({
    data() {
        return {
            counter : 0
        }
    },

    methods : {
        updateCounter(num) {
            this.counter += num
        },
    },
    computed: {
        //showText() {
           // let text = this.counter>0?
           //return text
        //}
        isPositive(){
            return this.counter>0
        },
        isNegative(){
            return this.counter<0
        }
    }       
})

app.directive('highlight', {
    beforeMount(el, binding, vnode){
        //console.dir no puede tener etiquetas simplemente el parámetro a definir/investigar la estructura real de un objeto
        console.dir(el)
        console.log(binding)
        console.log(vnode)
        el.style.background = binding.value
    }
})
app.directive('hide-after', {
    beforeMount(el, binding, vnode){
        console.log("hide-after: ", binding)
        setTimeout(()=>{
            el.style.display = 'none'
        },binding.value*1000)
    }
})
app.directive('blink-if-no-action',{
    beforeMount(el, binding, vnode){
        document.addEventListener("mousemove", () => {
            if (el.style.borderColor = "#ffff0000") {
        //console.log("blink-if-no-action: ", binding)
        clearTimeout(3000)
        setTimeout(()=>{
            el.style.borderColor = "orange"
            el.style.borderWidth = "5px"
            //el.style.display = 'brightness'
        },binding.value*1000)
    }
    }   , false)
}

})
app.mount('#app')
