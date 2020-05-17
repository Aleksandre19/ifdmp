# Extending functionality of the webpage

In this project I extended functionality of my first milstone project's webpage: 
I added image animation with a appropriate messages on the first page, 
rebuild feedback's page by adding google maps API,
added emailJS on the consultation's page and animated process of registration

The project can be found [here] (https://aleksandre19.github.io/ifdmp/)
## UX
 
Main point of webpage is that user gets stright message about site with nice positive sensation.
That is way i created image animation with messages and nice transitions between them.

In wanted to grab users attantion in the feedback section and that is way I used google maps API to create something defferent and nice feedback section. 

I wanted that registration to be quick and pleasent process. That is way I added emailJS and animated regitration button durring process.

## Features

1) Image animation.
   
   The animation is written in javascript ES6 with Object Oriented Programming style. I use Webpack to convert the code in ES5 because to work in all browsers. the working version locates: **/assets/js/slider/production/slider.js** which is one compresed file and the original codes before Webpack compression are located: **/assets/js/slider/slider_native_script/**.
   
   Animation starts on the page load. First image increases in a size. As soon as it gets 7% more than natural demension it starts fading out and second image starts animation by moving from bottom to the top and from left to the right at the same time. As soon as it moves more than 150px away it starts fading out and last third image starts showing. As soon as second image disappears third image starts fadding out and then it does animation start again. 
   
   There are also messages which appears one by one on a appropriate slide. The message animation start by moving very fast from left to right then slowing down moving speed and finaly after some moment it excelerates and goes out. Then becames second text and so on.
   
   Buttons on the slide doesn't work yet. 
   
2) Feedbacks
   
   The code can be found here: **/assets/js/feedbacks/**
   
   On this page I added google maps API. Then pages loads the avatars of the users drops down on the appropriate locations. By hovering over the avatars user sees feedback's text and after moment there appears also feedback user's full name. If there are many images they combines in the clusters.
   
3) Registration
  
  The code can be found here: **/assets/js/emailJS/**
  
  On this page I installed emailJS. All filed are required. When user fills the form and clicks on the registration button it converts to the circle by animation and spins until email sends. When email sends there appears green checked sign and button starts animation back to the original style. At the same time user gets message that email has sent. 
  

### Features Left to Implement
    
    The buttons in the image animation need to be functional 

## Technologies Used

   Javascript ES6 with Object Oriented Programming style,
   
   Javascript ES5,
   
   Webpack,
   
   Google Maps API,
   
   EmailJS

## Testing

   I used google chrome's inspect to test this project and adjusted all necessary styles.
   
   The registartion button was aligned to the left in Iphon6 and i fixed it.
   
   Second image size of the animation couldn't cover whole area in the Ipad Pro.
   
   I adjusted styles for the feedback section.

## Deployment

   I deployed the project on the GutHub.

### Content
   
   The quotes for first and second sliders i found in internet. 



## The things which need to be done in futire:

   Make animation's button to function
   
   Work on message's design (font style and color)
   
   In the Individual approach section make push effect on the three steps blocks by hovering on them.
   
   Work on quality of the Diana's image.
   
   Style google map and add feedback's adding form.
   
   Work on registration's button. On click there appears rectangle on the spinning circle.
   
   Add payment's functionality.
   
   
