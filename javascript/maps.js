
       function initMap() { 
       var uluru = {lat: 52.630155, lng: -1.139180}; 
        var map = new google.maps.Map(document.getElementById('map'), { 
         zoom: 15, 
          center: uluru 
       }); 
         var marker = new google.maps.Marker({ 
          position: uluru, 
           map: map 
         }); 
       } 

