


    function sendMail(contactForm) {

        animateRegisterButton(contactForm);

        return false;  // To block from loading a new page
    }


    /**
     * 
     */

    let rot = null;

    function animateRegisterButton(contactForm){

        animateButtonBeforeSend('inset', '#ffffff', '10px', '80px', '50%', true);

        setTimeout(function(){

            sendConsultationsRequest(contactForm);

        }, 1000);

    }


    function animateButtonBeforeSend(brdStyle, bgColor, brdWidth, btnWidth, brdRadius, send){

        $("#submit").css("border-style", `${brdStyle}`).animate({

            backgroundColor: `${bgColor}`,
            borderWidth: `${brdWidth}`,
            width: `${btnWidth}`,
            borderRadius: `${brdRadius}`
            
        }, 300, function(){

            if(send){
                rotatingButton();
            }

        });

    }


    function rotatingButton(){

        let deg = 1;

        rot = setInterval(function(){

            deg += 3;

            document.getElementById("submit").style.transform = `rotate(${deg}deg)`;

        });
        
    }


    function sendConsultationsRequest(contactForm){

        emailjs.send("gmail", "aleksandre", {

            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "project_request": contactForm.lastname.value

        })
        .then(

            function(response) {

                animateButtonAfterSend(response);

            },
            function(error) {

                console.log("FAILED", error);

            }

        );

    }



    function animateButtonAfterSend(response){

        if(response.status === 200 && response.text === 'OK'){

            clearInterval(rot);

            document.getElementById("submit").style.transform = `rotate(0deg)`;

            buttonPopUp();

        }
        

    }





    function getMessage(start){

        let msg1 = 'I have recived your email and I will contact you during 24 hours!';
        let msg2 = 'If you wan to have free consultation and more information than please fill the from below and i will reach you within 24 hours';

        let col1 = '#15b200';
        let col2 = '#797979';

        let txt = '';
        let color = '';

        (start ? txt = msg1 : txt = msg2);
        (start ? color = col1 : color = col2);

        $("#reg_text span").fadeOut(function(){

            $(this).text(txt).css('color', color).fadeIn(function(){

                if(start){

                    setTimeout(function(){

                        getMessage(false);

                    }, 3000);

                }

            });
            
        });

    }





    let popUpInt = null;

    function buttonPopUp(){

        let el = document.getElementById("done");

        let w = 1;

        popUpInt = setInterval(function(){

            w += w / 2;

            if(w >= 100){

                w -= w / 2;

                if(w < 70){

                    clearInterval(popUpInt);

                    getMessage(true);

                    setTimeout(function(){

                        el.style.width = '1px';

                        animateButtonBeforeSend('solid', '#04d9d9', '1px', '100%', '10px', false);

                        resetPlaceHolders();

                    }, 3000);
                }
                
            }

            el.style.width = `${w}px`;

        },30);

    }


    function resetPlaceHolders(){

        document.getElementById("name").value = "";
        document.getElementById("lastname").value = '';
        document.getElementById("email").value = '';

    }



