

    /**
     * This is the function which is being initiated on submit 
     * @param {Recives html form element} contactForm 
     */
    function sendMail(contactForm) {

        animateRegisterButton(contactForm);

        return false;  // To block from loading a new page
    }



     /**
     * This function animates submit button as soon as it was clicked and
     * sets timeout one second and then calls function which sends free consultation's request
     * @param {Recives html form element} contactForm 
     */

    let rot = null;

    function animateRegisterButton(contactForm){

        animateButtonBeforeSend('inset', '#f6f6f6', '10px', '80px', '50%', true);

        setTimeout(function(){

            sendConsultationsRequest(contactForm);

        }, 1000);

    }


    /**
     * This function animates submit button's style to became circle
     * and then calls function for rotation of button
     * @param {Button border Style} brdStyle 
     * @param {Button background-color} bgColor 
     * @param {Button border width} brdWidth 
     * @param {Button width} btnWidth 
     * @param {button border radius} brdRadius 
     * @param {When this is true it calls rotatingButton()} send 
     */

    function animateButtonBeforeSend(brdStyle, bgColor, brdWidth, btnWidth, brdRadius, send){

        $("#submit").css("border-style", `${brdStyle}`).animate({

            backgroundColor: `${bgColor}`,
            borderWidth: `${brdWidth}`,
            width: `${btnWidth}`,
            borderRadius: `${brdRadius}`
            
        }, 300, function(){

            if(send){
                rotatingButton();
                document.getElementById("submit").value = '';
            }

        });

    }


    /**
     * This function spins already circled  button 
     */

    function rotatingButton(){

        let deg = 1;

        rot = setInterval(function(){

            deg += 3;

            document.getElementById("submit").style.transform = `rotate(${deg}deg)`;

        });
        
    }


    /**
     * This function sends email by emailJS and
     * if or then response is positive it calles function to animate
     * subbmit button back to it's original style.
     * 
     * If there is error it console logs error
     * @param {Recives html form element} contactForm 
     */

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



    /**
     * This function checks if email has been sent.
     * If so it stops rotating of the circled button, 
     * sets rotation's degree to 0 and calles function for checked icon
     * @param {Recives response from emailJS} response 
     */

    function animateButtonAfterSend(response){

        if(response.status === 200 && response.text === 'OK'){

            clearInterval(rot);

            document.getElementById("submit").style.transform = `rotate(0deg)`;

            buttonPopUp();

        }
        

    }



    /**
     * When email sends this function replace welcoming text with message and
     * chnages text color to green.
     * Message says that email has been recived.
     * Finally it takes 3 seconds timeout and then calls itself with false parameter to return back previouses text and text color  
     * @param {If this is true submit button becames circle } start 
     */

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



    /**
     * This function animates check icons's pop up process.
     * When check icon's animation is finished it stops interval,
     * returns back the original text and text color,
     * takes 3 seconds of timeout,
     * sets 1px with to icon,
     * animates circled button back to the original style 
     * and sets input tag's value to nothing
     */

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

                        resetValues();

                    }, 3000);
                }
                
            }

            el.style.width = `${w}px`;

        },30);

    }


    /**
     * This function sets input tags values to nothing
     */

    function resetValues(){

        document.getElementById("name").value = "";
        document.getElementById("lastname").value = '';
        document.getElementById("email").value = '';
        document.getElementById("submit").value = 'Register';

    }



