var settings = {
    clusters: false,
    fontUse : 'sofia-pro',
}

// data for json
var data = {
    loaded: false,
    json : []
}; //initilize the global variable to hold data


var markers = [];
var map;


function initMap(){
    // initializeing the info window
    var infowindow = new google.maps.InfoWindow();
    
    //map initialization
    var center = {lat: 32.369696,  lng: 79.098716};
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: center,
      styles: [
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "saturation": "-100"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#4d6059"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#4d6059"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#4d6059"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#4d6059"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#4d6059"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#7f8d89"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#7f8d89"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#7f8d89"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#7f8d89"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#7f8d89"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#7f8d89"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#7f8d89"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#7f8d89"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#2b3638"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2b3638"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#24282b"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#24282b"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
        ]
    });

    // enable this if you want to close all info window when click on map
    // google.maps.event.addListener(map, 'click', function() {
    //     infowindow.close();
    // });

    // Preparing ICON
    var icon = {
        url: "images/marker.png", // url
        scaledSize: new google.maps.Size(32, 32), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(12, 32) // anchor
    };

    // check if data loaded or not
    $.getJSON( "data/data.js",function (res) {
        if (res) {
            var counter = 0;
            $.each(res, function (i, val) {
                if(i==0)return;
                var loc = val.C;
                var info = {name: val.A, add: val.B};
                placeMarkerAndList(loc,info);
                counter++;
            });
            console.log(counter);
        }else{
            console.log("data not loaded");
        };
    })
    

    function placeMarkerAndList(loc, dat) {
        if(loc == "FAILED,FAILED") return;
        var lat = parseFloat(loc.split(",")[0]);
        var lng = parseFloat(loc.split(",")[1]);

        var marker = new google.maps.Marker({
            position: {lat: lat,lng: lng},
            map: map,
            icon: icon
        });
    // console.log(dat);

    var contentString = `<div id="content">
                            <div id="siteNotice"></div>
                            <h4 class="firstHeading">STORE</h4>
                            <div id="bodyContent">
                                <p class="name">
                                    ${dat.name}
                                </p>
                                <p class="address">
                                    ${dat.add}
                                </p>
                            </div>
                            <div>
                                <a class="dirButton" target="_blank" href="https://www.google.com/maps/dir/Current+Location/${loc}">Get Direction</a>
                            </div>
                        </div>
                        <style>
                            #content{
                                font-family: ${settings.fontUse || 'Trebuchet MS'}, Times, serif;
                                width: 200px; 
                            }
                            #bodyContent{
                                margin-top:25px;
                            }                            
                            .firstHeading{
                                margin-top:20px;
                                font-weight:bold;
                            }
                            .name{
                                color:gray;
                                margin-bottom:5px;
                                font-size:15px;
                            }
                            .address{
                                color:gray;
                            }
                            .dirButton{
                                width: 100%;
                                display: block;
                                text-align: center;
                                border: #ccc 1px solid;
                                font-size: 15px;
                                padding: 8px 0;
                                color: black;
                                text-tranform:uppercase;
                                font-weight:bold;
                                margin-top: 20px;
                                margin-bottom: 7px;
                            }
                            .dirButton:hover{
                                text-decoration:none:
                                background:black;
                            }
                            .gm-style-iw {
                               left:24px!important;
                              }
                        </style>`;

        // Marker click
        marker.addListener('click', function() {
            infowindow.setContent(contentString);
            map.panTo(marker.getPosition()); 
            infowindow.open(map, marker);
            styleBorder();
        });

        marker._name = dat.name;
        marker._add = dat.add;
        var index = markers.push(marker) - 1;
        
        $(".mainWrapper .lists").append(`<li id="marker${index}" class="MainList" onclick="openInfoWindow(${index})">
                                            <div class="listname">
                                                ${dat.name}
                                            </div>
                                            <div class="addres">
                                                ${dat.add}
                                            </div>
                                            <div class="pull-right navigat"> 
                                                    <i class="glyphicon glyphicon-chevron-right"></i>
                                            </div>            
                                        </li>`);
        
    }
    
    console.log(markers);
    if(settings.clusters){
        setTimeout(function () {
            var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'images/clusters/m'});
        },20);
    }

    function styleBorder() {
        // this code is for making border radious
        var infoElement = $('.gm-style-iw').prev();
        var boxWrapper = infoElement[0].childNodes[1],
            boxContainer = infoElement[0].childNodes[3];
        
        //then set border-radius to wrapper and container via jQuery
        $(boxWrapper).css({
            borderRadius: 4
        });
        $(boxContainer).css({
            borderRadius: 5,
        });
    }
    
    

}
function openInfoWindow(id) {

    console.log(id);
    map.panTo(markers[id].getPosition()); 
    map.setZoom(7);
    google.maps.event.trigger(markers[id], 'click');

    if (window.matchMedia('(max-width: 767px)').matches) {
        $('html, body').animate({
            scrollTop: ($('#map').offset().top)
        },500);
    }
   
}


$(document).ready(function(){
    $('#filterMarker').autocomplete({
        maxHeight:400,// you can change this height
        paramName: '_add',
        transformResult: function(response, originalQuery) {
            return {
                suggestions: $.map(markers, function(dataItem, index) {
                    if (dataItem._name.toLowerCase().includes(originalQuery.toLowerCase())){
                        return { value: dataItem._name, data: {add:dataItem._add, index:index, }};
                    }else{
                        return;
                    }
                    
                })
            };
        },
        groupBy : 'add',
        triggerSelectOnValidInput:false,
        onSelect: function (suggestion) {
            console.log(suggestion);
            openInfoWindow(suggestion.data.index);

            // $('.mainWrapper').animate({
            //     scrollTop: ($('#marker'+suggestion.data.index).offset().top-110)
            // },500);
        }

    });
});