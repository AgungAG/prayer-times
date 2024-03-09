function prayerTimes(latitude, longitude) {
    fetch('http://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=2')
    .then(response => response.json())
    .then(function(response){
        let date        = new Date();
        let today       = date.getDate();

        let app         = document.getElementById('app');
        let table       = document.createElement('table');
        let tableTbody  = document.createElement('tbody');
        
        for(i in data) {
            let row         = table.insertRow();
            let name        = row.insertCell(0);
            let time        = row.insertCell(1);
            name.innerHTML  = i;
            time.innerHTML  = data[i];
            tableTbody.appendChild(row);
            
        }

        table.appendChild(tableTbody);
        app.appendChild(table);

    });
}

function success(position) {
    console.log(position.coords.latitude, position.coords.longitude);
}

function error() {
    alert('Posisi tidak dapat di akses')
}

function userLocation() {
    if(!navigator.geolocation) {
        alert('Geolocation tidak di dukung di dalam browser anda, silahkan gunakan browser lain')
    } else {
        navigator.geolocation.getCurrentPosition(success. error);
    }
}

function index() {
    let app         = document.getElementById('app');
    let h3          = document.createElement('h3');
    h3.innerHTML    = 'Prayer Times';

    app.appendChild(h3);
    userLocation();
}

index();