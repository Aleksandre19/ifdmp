        var map;
        let me = new Array();

        /**
         * This function load google map in the div element with ID map,
         * sets zoom to it,
         * positions map on Georgia region
         * and then calls setMarkers function
         */

        function initMap() {

            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 7,
                center: {lat: 41.715137, lng: 44.827095}
            });

            setMarkers(map);

            
        }



        // Data for the markers consisting of a name, a LatLng and a zIndex for the
        // order in which these markers should display on top of each other.
        var locations = [
            ['Aleksandre Voroini', 42.270000, 42.698341, 4],
            ['Darejani Shoshikelashvili', 41.715137, 44.827095, 3],
            ['Diana Voronini', 41.618290, 45.921700, 2],
            ['Giorgi Voronini', 41.646229, 41.649158, 1]
        ];


        /**
         *  Defining variables and arrays
         */
        var marker = new Array();

        let lanAndLng = []; 

        let image = new Array();

        let text = new Array();

        let shape;

        let infowindow = new Array();



        /**
         * This function creates avatars as a icons in image array,
         * feedback texts in text array,
         * mouse hover over area in shape object and
         * then calls drop function
         * @param {Googla map object} map 
         */
        function setMarkers(map) {
                
                // Icons
                image = [

                        {
                            url: 'assets/images/feedbacks/avatar/avatar1.png',
                            // This marker is 20 pixels wide by 32 pixels high.
                            size: new google.maps.Size(60, 60),
                            // The origin for this image is (0, 0).
                            origin: new google.maps.Point(0, 0),
                            // The anchor for this image is the base of the flagpole at (0, 32).
                            anchor: new google.maps.Point(0, 70)
                        },
                        {
                            url: 'assets/images/feedbacks/avatar/avatar2.png',
                            // This marker is 20 pixels wide by 32 pixels high.
                            size: new google.maps.Size(60, 60),
                            // The origin for this image is (0, 0).
                            origin: new google.maps.Point(0, 0),
                            // The anchor for this image is the base of the flagpole at (0, 32).
                            anchor: new google.maps.Point(0, 70)
                        },
                        {
                            url: 'assets/images/feedbacks/avatar/avatar3.png',
                            // This marker is 20 pixels wide by 32 pixels high.
                            size: new google.maps.Size(60, 60),
                            // The origin for this image is (0, 0).
                            origin: new google.maps.Point(0, 0),
                            // The anchor for this image is the base of the flagpole at (0, 32).
                            anchor: new google.maps.Point(0, 70)
                        },
                        {
                            url: 'assets/images/feedbacks/avatar/avatar4.png',
                            // This marker is 20 pixels wide by 32 pixels high.
                            size: new google.maps.Size(60, 60),
                            // The origin for this image is (0, 0).
                            origin: new google.maps.Point(0, 0),
                            // The anchor for this image is the base of the flagpole at (0, 32).
                            anchor: new google.maps.Point(0, 70)
                        }
                    
                ];

                // Feedback's texts
                texts = [

                   `<p>
                        <i class="fas fa-quote-left front-quote feedback-quote"></i> Not only losing weight but also understand much more about yourself and step on right and healthy way in communication with yourself.
                            <i class="fas fa-quote-right black-quote feedback-quote"></i>
                    </p>`,

                    ` <p >
                        <i class="fas fa-quote-left front-quote feedback-quote"></i> Eating everything and losing weight is really unimaginable but real case for me. It was stressfree to do it.
                            <i class="fas fa-quote-right black-quote feedback-quote"></i>
                    </p>`,
                    
                    ` <p>
                        <i class="fas fa-quote-left front-quote feedback-quote"></i> She really finds the key which cause the hight weight. Managing relationship around me not only changed my life but also lost my weight.
                            <i class="fas fa-quote-right black-quote feedback-quote"></i>
                    </p>`,

                    ` <p>
                        <i class="fas fa-quote-left front-quote feedback-quote"></i> I could never imagine that the weight losing was possible such way. It is really right and healthy way to do it.
                            <i class="fas fa-quote-right black-quote feedback-quote"></i>
                    </p>`

                ];


                
                // Shapes define the clickable region of the icon. The type defines an HTML
                // <area> element 'poly' which traces out a polygon as a series of X,Y points.
                // The final coordinate closes the poly by connecting to the first coordinate.
                shape = {
                    coords: [1, 1, 1, 60, 60, 60, 60, 1],
                    type: 'poly'
                };


                drop();

        }



        /**
         * This function loops through locations array,
         * combines lat and lng in one lanAndLng array,
         * calls icon's drop down function with timeout and
         * sets content to google map's infowindow object
         */

        function drop() {

                   
            for (var i = 0; i < locations.length; i++) {

                lanAndLng[i] = {lat: locations[i][1], lng: locations[i][2]};

                addMarkerWithTimeout(lanAndLng[i], i * 400, image[i], locations[i][0], locations[i][3], i);

                // Settiing content to the infowindow object
                infowindow[i] =  new google.maps.InfoWindow({

                     content: texts[i]  

               });
                  
            }
                    
        }


         
        /**
         * This function sets timeout,
         * drops icons on it's position by animating them,
         * adds clusters,
         * adds mouseover and mouseout events on the icons and
         * calls google map's infowindow object on appropriate event 
         * 
         * @param {lat and lng} position 
         * @param {Duration of timeout} timeout 
         * @param {Icons} img 
         * @param {Full name} title 
         * @param {z-index} zInd 
         * @param {Incrementer variable} i 
         */
               
        function addMarkerWithTimeout(position, timeout, img, title, zInd, i) {

                window.setTimeout(function() {

                    // Adding icons by animation
                    marker.push(new google.maps.Marker({
                            
                        position: position,
                        map: map,
                        icon: img,
                        shape: shape,
                        animation: google.maps.Animation.DROP,
                        title: title,
                        zIndex: zInd

                    }));



                    // Adding marker's clusters
                    if(i >= 3){

                        var markerCluster = new MarkerClusterer(map, marker, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

                    }

                        
                        
                    // Adding mouseover and mouseout events on icons
                    // Opens infowindow
                    marker[i].addListener('mouseover',  function() {

                        infowindow[i].open(map, marker[i]);

                    });

                    //Closes infowindow
                     marker[i].addListener('mouseout',  function() {

                        infowindow[i].close(map, marker[i]);

                    });           

                }, timeout);

        }