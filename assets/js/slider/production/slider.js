!function(t){var e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=5)}([function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));const n=new WeakMap,a=new WeakMap;class s{constructor(){n.set(this,["family.jpg","food.jpg","yoga.jpg"]),a.set(this,[["What you eat is what you will look!","- Diana Voronina - Akhvlediani"],["A happy family is but an earlier heaven","–George Bernard Shaw"],["Paradise is not a place, it’s a state of consciousness","–Sri Chinmoy"]])}get imgName(){return n.get(this)}get imageTexts(){return a.get(this)}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));const n=new(i(0).a);new WeakMap,new WeakMap,new WeakMap;class a{constructor(){this.anInSize=null,this.imgManDivId="",this.justSetBgImage=!1,this.imgName=function(t){return n.imgName[t]}}get setBackgroundImageToTheDiv(){let t=document.getElementsByClassName("slideshow_bg_img");for(let e=0;e<t.length;e++){if("dianaSlider-s"===t[e].id){let i=this.imageFullPath(this.imgName(1));document.getElementById(t[e].id).style.backgroundImage="url('"+i+"')"}else if("dianaSlider-f"===t[e].id){let i=this.imageFullPath(this.imgName(0));document.getElementById(t[e].id).style.backgroundImage="url('"+i+"')"}else if("lastImage"===t[e].id){let i=this.imageFullPath(this.imgName(2));document.getElementById(t[e].id).style.backgroundImage="url('"+i+"')"}t[e].classList.add("slideshow_bg_img")}return!0}imageFullPath(t){return window.location.href+`assets/js/slider/slider_images/${"iPro"!=this.screenResolution?this.screenResolution:"lg"}/`+t}get screenResolution(){let t=window.screen.width,e=window.screen.height;return t<576?"sm":t<992?"md":1024===t&&1366===e?"iPro":"lg"}getNaturalDimension(t){let e,i=t;return e=new Image,e.src=this.imageFullPath(i),e.onload=function(){sessionStorage.setItem("imageNaturalWidth",e.naturalWidth)},!0}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));class n{getMessage(t){let e=document.createElement("div");return e.textContent=String(t),e.className="dianaSlider_alert",document.body.insertBefore(e,document.body.firstChild)}}},function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(0),a=i(1);const s=new n.a,r=new a.a;class o{constructor(){this.imageText=function(t,e){return s.imageTexts[t][e]},this.startAnimateText=null,this.finishAnimateText=null,this.textAuthor=null,this.left=-150,this.right=130}textAnimation(...t){for(let e=0;e<t.length;e++)if(isNaN(t[e]))if("start"===t[e])this.startImageTextAnimation;else{if("finish"!==t[e])return!1;this.finishImageTextAnimation}else{let i=document.getElementById("text-f"),n=document.getElementById("author-f");i.innerHTML="",n.innerHTML="",i.innerHTML=""+this.imageText(t[e],0),n.innerHTML=""+this.imageText(t[e],1)}}get startImageTextAnimation(){this.startAnimateText=setInterval(()=>{this.left.toFixed(0)>=0?this.left+=.01:this.left+=2,this.right<=(r.screenResolution,25)?this.right-=.01:this.right-=.9,document.getElementById("text-f").style.transform=`translateX(${this.left}%)`,document.getElementById("author-f").style.transform=`translateX(${this.right}%)`})}get finishImageTextAnimation(){this.finishAnimateText=setInterval(()=>{this.left.toFixed(0)>=300?(clearInterval(this.finishAnimateText),clearInterval(this.startAnimateText),this.left=-150,this.right=130):(this.left+=2,this.right-=2)})}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ImageAnimation}));var _image_manager__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_message__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_animation_text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3);const imgAniImageManager=new _image_manager__WEBPACK_IMPORTED_MODULE_0__.a,imgAniMessage=new _message__WEBPACK_IMPORTED_MODULE_1__.a,imgAniTextAnimation=new _animation_text__WEBPACK_IMPORTED_MODULE_2__.a,_imageStartingNaturLWidth=new WeakMap,_functionHasCalled=new WeakMap;class ImageAnimation{constructor(){this.anInSize=null,this.fade=null,this.animationStepCounter=0,this.naturalW=0,this.called=!0,this.callAnimationAgain=!0,this.saveSteps=[],this.clickedOnButton=!1,this.textAnimationHasCalled=!0,this.animationHasStarted=!0,this.move=1,this.opacity=1,this.scaledUpWidth=0,this.wrapperID=2,this.settingEvenListenerToButtons}imageAnimation(t,e){this.animateImageInSize(t,e),this.animationHasStarted&&imgAniTextAnimation.textAnimation(0,"start"),this.animationHasStarted=!1}animateImageInSize(t,e){this.scaledUpWidth=0,"iPro"===imgAniImageManager.screenResolution?this.naturalW=10*Number(e)/100+Number(e):this.naturalW=e,_imageStartingNaturLWidth.set(this,"iPro"!=imgAniImageManager.screenResolution?e:this.naturalW),_functionHasCalled.set(this,!0),this.animationsIntervalsSaver({int:"this.anInSize",val:this.naturalW,divId:t}),this.anInSize=setInterval(()=>{this.scaledUpWidth=this.naturalW++,this.updatingSavedIntervalsValue("this.anInSize",this.scaledUpWidth),document.getElementById(t).style.backgroundSize=this.scaledUpWidth+"px",7===Math.round(this.calculateImageIncreasedDemision(this.scaledUpWidth))&&_functionHasCalled.get(this)&&(0===this.animationStepCounter&&this.animationFadeInOut(t),_functionHasCalled.set(this,!1))},15)}animationFadeInOut(t){this.opacity=1,this.animationStepCounter++,(this.animationStepCounter>3||this.animationStepCounter<0)&&(this.animationStepCounter=1),this.animationsIntervalsSaver({int:"this.fade",val:this.opacity,divId:t}),this.fade=setInterval(()=>{if(this.opacity-=.003,this.updatingSavedIntervalsValue("this.fade",this.opacity),this.textAnimation(this.animationStepCounter,this.opacity.toFixed(1),this.textAnimationHasCalled),document.getElementById(t).style.opacity=""+this.opacity,3===this.animationStepCounter&&this.callAnimationAgain&&(this.called=!0,this.imageAnimation(this.getSliderWrappersID,sessionStorage.getItem("imageNaturalWidth")),this.callAnimationAgain=!1,this.clickedOnButton=!1),this.called&&1===this.animationStepCounter)this.backgroundMoving(this.getSliderWrappersID),this.called=!1;else{if(!(this.opacity.toFixed(1)<0))return!1;this.textAnimationHasCalled=!0,this.transitionController(this.animationStepCounter,"")}},15)}backgroundMoving(t){this.move=1,this.increasingImageSizeBasedOnScreenResolution(imgAniImageManager.screenResolution,t);let e=document.getElementById(t),i=!0;this.animationsIntervalsSaver({int:"this.bgMove",val:this.move,divId:t}),this.bgMove=setInterval(()=>{this.move-=.1,this.updatingSavedIntervalsValue("this.bgMove",this.move),e.style.backgroundPosition=`${this.move}px ${this.move}px`,this.move.toFixed(0)<=-150&&!0===i&&(this.animationFadeInOut(t),i=!1)})}calculateImageIncreasedDemision(t){return(t-_imageStartingNaturLWidth.get(this))/_imageStartingNaturLWidth.get(this)*100}get getSliderWrappersID(){let t=document.getElementsByClassName("slideshow_bg_img"),e="";this.wrapperID<0&&(this.wrapperID=2);for(let i in t)Number(i)===Number(this.wrapperID)&&(e=t[i].id);return this.wrapperID-=1,e}transitionController(t,e){if(1===t)this.activeCurrentSlideButton(""===e?"second_btn":e),this.stopRunningIntervals("this.fade","this.anInSize"),this.removeAnimationStepsFromArray("this.fade","this.anInSize"),this.styleResetter(t);else if(2===t)this.activeCurrentSlideButton(""===e?"third_btn":e),this.stopRunningIntervals("this.bgMove","this.fade"),this.removeAnimationStepsFromArray("this.fade","this.bgMove"),this.styleResetter(t),this.animationFadeInOut(this.getSliderWrappersID);else{if(3!==t)return!1;this.activeCurrentSlideButton(""===e?"first_btn":e),this.stopRunningIntervals("this.bgMove","this.fade"),this.removeAnimationStepsFromArray("this.fade","this.bgMove"),this.styleResetter(t),this.animationFadeInOut("dianaSlider-s")}}styleResetter(t){let e=document.getElementById("dianaSlider-s"),i=document.getElementById("dianaSlider-f"),n=document.getElementById("lastImage");if(1===t)e.style.opacity="1",e.style.zIndex="5",e.style.backgroundSize=sessionStorage.getItem("imageNaturalWidth")+"px";else if(2===t)i.style.backgroundPosition="0px 0px",i.style.opacity="1",i.style.zIndex="5",this.callAnimationAgain=!0;else{if(3!==t)return!1;e.style.zIndex="10",i.style.zIndex="10",n.style.opacity="1"}}textAnimation(t,e,i){1===t&&e<=.3&&i?(imgAniTextAnimation.textAnimation("finish",1,"start"),this.textAnimationHasCalled=!1):2===t&&e<=.3&&i?(imgAniTextAnimation.textAnimation("finish",2,"start"),this.textAnimationHasCalled=!1):3===t&&e<=.3&&i&&(imgAniTextAnimation.textAnimation("finish",0,"start"),this.textAnimationHasCalled=!1)}increasingImageSizeBasedOnScreenResolution(t,e){let i=document.getElementById(e);i.style.backgroundSize="md"===t?"135%":"sm"===t?"220%":"iPro"===t?"240%":"120%"}animationsIntervalsSaver(t){this.saveSteps.push(t)}updatingSavedIntervalsValue(t,e){for(let i in this.saveSteps)this.saveSteps[i].int===t&&(this.saveSteps[i].val=e)}removeAnimationStepsFromArray(...t){for(let e of t)for(let t=0;t<this.saveSteps.length;t++)this.saveSteps[t]===e&&this.saveSteps.splice(t,1)}stopRunningIntervals(...intervals){for(let int of intervals)clearInterval(eval(int))}activeCurrentSlideButton(t){this.removeSlidersActiveButton,document.getElementById(t).classList.add("active_btn")}get removeSlidersActiveButton(){let t=document.getElementsByClassName("slide_changer_button");for(let e=0;e<t.length;e++)t[e].classList.remove("active_btn")}get settingEvenListenerToButtons(){let t=document.getElementsByClassName("slide_changer_button");for(let e=0;e<t.length;e++)document.getElementById(t[e].id).addEventListener("click",i=>{if(this.checkWhichIsActiveButton(i.toElement.classList))return i.preventDefault(),!1;this.findButtonsOrderNumber(t[e].id)!=this.animationStepCounter&&this.saveSteps.length>1&&this.sliderSwitcherByButtons(this.findButtonsOrderNumber(t[e].id),t[e].id),i.preventDefault()})}findButtonsOrderNumber(t){let e=document.getElementsByClassName("slide_changer_button"),i=0;for(let n=0;n<e.length;n++)e[n].id===t&&(i=n+1);return i}checkWhichIsActiveButton(t){for(let e of t)return"active_btn"===e}stopAllIntervals(){for(let i in this.saveSteps)clearInterval(eval(this.saveSteps[i].int))}sliderSwitcherByButtons(t,e){}}},function(t,e,i){"use strict";i.r(e),i.d(e,"AnimationIndex",(function(){return c}));var n=i(2),a=i(0);const s=new n.a,r=new a.a;var o=i(1),l=i(4);const m=new class{constructor(){this.imagesNamesInConfig=!1}get checkImageNamesInConfig(){if(r.imgName.length>1)return this.imagesNamesInConfig=!0;1===r.imgName.length?s.getMessage("Animation must have at least two images"):s.getMessage("Please set image's names in config.js")}},h=new o.a,u=(new a.a,new l.a);class d{constructor(){if(this.imgOrderInConfig=1,this.divId="dianaSlider-s",null===sessionStorage.getItem("imageNaturalWidth")&&("sm"===h.screenResolution||"md"===h.screenResolution?sessionStorage.setItem("imageNaturalWidth",625):sessionStorage.setItem("imageNaturalWidth",1800)),m.checkImageNamesInConfig){let t=h.imgName(this.imgOrderInConfig);h.setBackgroundImageToTheDiv&&h.getNaturalDimension(t)&&u.imageAnimation(u.getSliderWrappersID,sessionStorage.getItem("imageNaturalWidth"))}}}var g=i(3);class c{constructor(){new d,new g.a}}new c}]);