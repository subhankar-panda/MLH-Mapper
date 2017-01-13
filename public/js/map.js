    /*$.ajax({ url: "./../../output.json", type:"GET", success:function(response){
        var json = $.parseJSON(response);
        alert("wowsers");
        }
    });*/
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
readTextFile("/js/output.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});

function initMap(){
	var uluru = {lat: 38.09024, lng: -95.712891};
    var map = new google.maps.Map(document.getElementById('map'), {
    	zoom: 4,
    	center: uluru,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    /*var marker = new google.maps.Marker({
    	position: uluru,
    	map: map
    });*/
}