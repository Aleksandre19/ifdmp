# Doctor Diana-Voronina-Akhvlediani's website
Stream One Project: User-Centric Frontend Development - Code Institute 

This is my mother's website about lossing of weight and health. Because the lossing of weight does't only mean to eat less, she use individual approach for discovering of real reasons which caouses of hight weight. The reasons can be sometimes emotional or psychological.

## Demo
A live demo can be found [here](https://aleksandre19.github.io/ucmp/).

## UX

### User stories

The user of this website should understand what is the site about, what are keys of this medhod and way it is special. 

### Strategy
My goal in the design was to catch user's attantion straight in the first look with some pleasant effect and then expanding and showing sequently the key features and specification of the this method.  


### Scope
Firt of all for users of this website i wanted to create some pleasant animation with hight quality images and some really eye caching text animiation to give them understanding: what is website about, what can they get and give a message about author's personality. Then continue sequently expanding and explaining information by smoothly moving from one section to another section. And finally finishing the page with section of free consultation.    

### Structure
To achieve my goals i choosed landing page style. First section is for eye catching animation. Second section i use to expand information about method and how can it be done. Third section i use to show  by whom can it be done. Forth section i use to show author's experience by providing her's videos. Fifth section i used for feedbacks and finally in the end of the page when users probably should have the aroused interest i provided ability to get more information by free consultation's opportunity.    

### Skeleton
[The sketch file on balsamiq](https://github.com/Aleksandre19/files/blob/master/daiana-website/dianas-website-sketch-balsamiq.pdf)

### Surface
On the [Adobe website](https://color.adobe.com/explore) i choosed the following schema:
[Color schema](https://github.com/Aleksandre19/files/blob/master/daiana-website/color-schema.jpg)

After determation of colors i drew design in Adobe Photoshop CC which can be viewed here:
[PSD file](https://github.com/Aleksandre19/files/blob/master/daiana-website/index.psd.zip)

## Technologies
1. HTML
2. CSS
3. Bootstrap (4.4.1)


## Features
This site uses the scrollSpy feature in Bootstrap with an extra JavaScript function added to create a 'smooth scrolling' effect. On the mobile divices the navbar is collapsed and it expands on tablets and desktop devices. The menu's links uses Hover.css effect to move up on hovering. I use Bootstrap's Scrollspy feature to mark menu's link when user is on appropriate section by changing color and making underline. The site uses Bootstrap's Modal to pop up the singup form by clicking on Sign Up button in the first, animation's section. In the first section i use SVG file for WEIGHT & HEALTH's text to sequently animate strokes of this text with CSS3.


### Features Left to Implement
In the future i would like to: add sublinks to video's link to categorise and expand video's section, add blog section, write animation's script in Javsscript/Jquery, take good quality Diana's photo and make adjustment in Photoshop, make to work registration's section, improve video section's look, animate modal's pop up window with Javascript/Jquery. 


### Individual approach's section
In the beginning of this section user finds text which describes point of view of the health and it's connection to the weight. Then comes section’s title with icon which hides on the tablets and mobile devices. After the title comes three steps of finding reason each one by their's own icon. They are: gathering information, separation of pathologies and doing of research. On the mobile devices they are located vertically.  On tablets and desktop devices those steps sections are located side by side.  The style of the steps changes depending on the device where it is viewed. On IPod Pro and desktop devices each steps’s title has background style with it’s own color and also left side in the each step’s container has vertically right forwarded shadow. Section’s background image changes in sizes depending on the device. On the desktop devices with resolution in the width more than 1300px the section’s max-width is 1300px and margins to the left and right are auto. So it becomes centered. 

#Sections

### About Me's Section
This sections starts with title. The title has icon and underline. After the title comes a text with information about Diana. If user looks on the tablets and desktop devices she or he sees Diana’s image. The image to the right side is partly hidden on tablets and it becoming more visible as a device’s width increases and it appears fully visible on the desktop devices.  Background image’s size changes depending on the devices. On mobiles and tablets background-attachment is scroll and on the desktop devices it has background-attachment: fixed; On the desktop devices with resolution in the width more than 1300px the section’s max-width is 1300px and margins to the left and right are auto. So it becomes centered. 


### Video’s section

This section starts with title. The title has icon and underline. The icon shows on the tablets and desktop devices. On the tablets the icons is under the title and on the desktop it is beside to the title.  On the mobile and tablet devices there are two videos. On the desktop devices there are three videos which are horizontally aligned. On the tablets horizontally alignment stays  and it changes to the vertically alignment on the mobile devices. 
There is no background image on the mobile devices. It appears on tablets and has background-attachment: scroll. On the desktop devices the size of the background images changes appropriate to the desktop. Also the background-attachment: scroll changes to background-attachment: fixed;

### Feedbacks section

This section also starts with title of section which has icon and underline.  Icon appears on the tablet devices. On the tablets It is under the title’s underline and it aligns to the left on the desktop devices. On the mobile devices there are three quotes with the  images. The images seats on the top of the quote’s container and crosses theirs border with almost half part of them selfs.  On the tablets and desktop devices the images of the quotes changes the positions and aligning to the left of the quotes. There appears also one vertical line under the middle of the images which starts from the top images and ends with last one.  The number of the quotes increases by one on tablets and desktop devices. This section has background image which size changes accordingly to the devices. On the mobile and tablet devices it has background-attachment : scroll; and it changes to the background- attachment:  fixed; on the desktop devices. 

### Consultation’s section

This section starts with question and one paragraph text.  Then comes registration form with three inputs tags and one submit button. First and second are text type tags and they have required attribute. Third one is for email and if a user doesn’t enter a email it alerts to use email format for this input. The email input tag has required attribute. The form tag has two attributes: action and method. First one has value # and decent one has the value POST. This section has background image which’s size and style changes deppending on devices it was viewed.  On the iPod Pro and desktop devices I use two div tags with CSS property position: absolute and z-index: 1 to set and adjust left and right background images.


### Footer

The footer consists with three columns. The right one is a column for section’s links including the ones which are not in main menu. They are: Individual approach and feedback’s sections. The links changes a colours as same as other links in the footer by hovering over them . The change is done by CC3’s transitions property. Each column on the mobile devices except for the first one have top border which disappears on the tablets and desktops devices.  Second column is for social links and third column is for videos links. To achieve something like a content balance in the footer the social links and the videos links  swaps the places on the tablets and desktop devices. Which is done by bootstrap’s class: d-none and d-md-block. In the very end of the footer there is copyright text.


## Section's summery 

 On the desktop devices with resolution in the width more than 1300px all sections except animation’s section has  max-width: 1300px and margins to the left and right - auto. So it becomes centered.
 
With this consistent layout of the sections i think i achieved my goal which was to catch user's attantion and then distribute sequently theirs attantions over the content.

# Testing

If you try to submit the registration form with an invalid email address, there will be an error noting the invalid email address. Furthermore, the 'required' attribute is added to the 'name, and ‘last name’ fields, so if those fields are not filled in, the form will not submit. If all field are valid, the page will reload. If a user  is interested in registering me, they will have to fill out all fields in order for the form to go through.

All video links will open in a new tab using 'target="_blank”.  All links have been manually tested to ensure that they are pointing to the correct destination.

By clicking on the links in the navbar, the scrollSpy effect will work regardless of whether or not you're viewing the sections in the same order they are listed in the dropdown navbar.

This site was tested all modern browsers (Chrome, Safari, Internet Explorer, FireFox) and on some mobile devices (iPhone 6: Chrome and Safari, iPad, Samsung Galaxy) to ensure compatibility and responsiveness. During the testing phase, I realized that background-attachment: fixed was not compatible with iOS browsers. On Chrome and Safari in iOS, the background photos appeared zoomed-in and blurry. To fix this, the background-attachment: scroll property value was added in a media query. 

  I found also that registration form had you margin problem on mobile and it was fixed by media query in style.css file. 

  In the about me section on the mobile the text’s hight was more than section and was overlapping the section under it. It was fixed also with media query.

  In the Safari browser there was about me link’s problem in top menu. It was breaking. It was fixed by CSS property white-space: nowrap; 
  
   There is SVG file problems which I could’t fixe because I did not have time and knowledge to do it. 

# Deployment 

This site is hosted using GitHub pages, deployed directly from the master branch.
The link can be found [here](https://github.com/Aleksandre19/ucmp)
The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.
To run locally, you can clone this repository directly into the editor of your choice by pasting git clone (https://aleksandre19.github.io/ucmp/)
into your terminal. To cut ties with this GitHub repository, type git remote rm origin into the terminal.
 
# Credits

## Content

All content was written by me with my mother.

## Media

The photos for animation I purchased on https://www.istockphoto.com/se. 

Other photos for different sections was downloaded from https:/www.pexels.com. 

Videos was taken from Diana’s YouTube page.

Feedback images are my and my family’s photos.

# Acknowledgements


The scrollSpy delay JavaScript function was found here [here](https://github.com/Code-Institute-Solutions/StudentExampleProjectGradeFive).

The SVG file's animation i found [here](https://www.youtube.com/watch?v=vJNVramny9k).

I used Hover.css library to make menu links jumping effect on hovering. The link for that is [here](https://ianlunn.github.io/Hover/)  

To active the link in the top menu at appropriate webpage i use this [here](https://getbootstrap.com/docs/4.0/components/scrollspy/)


