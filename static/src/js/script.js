let guestIsSelected = false;
let popupIsOpened = false;
let alertWasLoaded = false;
runOnApp(
    'pos',
    ()=>{
        let current_app = window.location.href.split("/")[3];
        return current_app;
    },
    ()=>{
        console.log("screen was loaded!")
        setInterval(() => {
            controlButtonNumber = document.querySelector('.control-button-number');
            let paymentButton = document.querySelector('.pay');
            if(!guestIsSelected){
                if(paymentButton){
                    paymentButton.disabled = true;
                }
                if(controlButtonNumber){
                    controlButtonNumber.style.display="none";
                }
            }else if(guestIsSelected){
                if(paymentButton){
                    paymentButton.disabled = false;
                }
                if(controlButtonNumber){
                    controlButtonNumber.style.display="inline-block";
                }
            }
        }, 200);

        setInterval(() => {
            let popupField = document.querySelector('.popup-input.value.active');
            if(popupField){
                guestIsSelected = true;
            }
        }, 200);

        setInterval(()=>{
            let backButton = document.querySelector('.button.back');
            if(backButton){
                backButton.addEventListener('click',()=>{
                    guestIsSelected = true;
                })
            }
        },200)

        setInterval(()=>{
            if(document.querySelector('.button.next.highlight'))
            document.querySelector('.button.next.highlight').addEventListener('click',()=>{
                guestIsSelected = false;
                alertWasLoaded = false;
            })
        },200)

        setInterval(()=>{
            if(document.querySelector('.pay-circle')){
                if(!alertWasLoaded){
                    document.querySelector('.pay-circle').addEventListener('click',()=>{
                        if(document.querySelector('.pay').disabled){
                            window.alert("Please choose a guest first!")
                        }
                    })
                    alertWasLoaded = true;
                }
            }
        },200)

        setInterval(() => {
            if(document.querySelector('.button.confirm')){
                console.log('poped up')
                document.querySelectorAll('.button.confirm').forEach((element)=>{
                    element.onclick=()=>{
                        console.log("clicked")
                    }
                })
            }
            
        }, 200);
    }
    
);