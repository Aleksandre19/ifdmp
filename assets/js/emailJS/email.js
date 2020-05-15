


function sendMail(contactForm) {

    animateRegisterButton();

    // emailjs.send("gmail", "aleksandre", {

    //     "from_name": contactForm.name.value,
    //     "from_email": contactForm.email.value,
    //     "project_request": contactForm.lastname.value

    // })
    // .then(

    //     function(response) {

    //         console.log("SUCCESS", response.status);

    //     },
    //     function(error) {

    //         console.log("FAILED", error);

    //     }

    // );
    return false;  // To block from loading a new page
}


function animateRegisterButton(){

     $("#submit").css("border-style", "inset").animate({

         backgroundColor: '#ffffff',
         borderWidth: '10px',
         width: '80px',
         borderRadius: '50%'
        
     }, 300, function(){

        let deg = 1;

        setInterval(function(){

            deg += 3;

            document.getElementById("submit").style.transform = `rotate(${deg}deg)`;

        })

     });

}