function onOdooLoaded(fun){
    let screenWasLoaded = {
        _value: false,
        fun,
        get value() {
          return this._value;
        },
        set value(value) {
          this._value = value;
          setTimeout(()=>{
              this.fun();
          },100)
        }
    }
    let loadingChecker = setInterval(()=>{
        if(!screenWasLoaded.value){
            let body = document.querySelector('body');
            if(body){
                let bodyClasses = body.classList;
                if(!bodyClasses.contains("oe_wait")){
                    screenWasLoaded.value = true;
                }
            }
        }else{
            clearInterval(loadingChecker);
        }
    },200)
}


function runOnApp(expected,value,fun){
    window.onpopstate = function() { 
        let current_app = value();
        if(current_app==expected){
            onOdooLoaded(fun);
        }
    }
}