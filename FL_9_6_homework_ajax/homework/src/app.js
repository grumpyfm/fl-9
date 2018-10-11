let loadBlock = document.querySelector('.loadBlock');
let form = document.querySelector('form');
let waterRes = document.querySelector('.waterBlock');
let landRes = document.querySelector('.landBlock');
let button = document.querySelector('input[type="button"');
button.addEventListener('click', CheckLocation);

const http = {
    get: function (url) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.addEventListener('loadend', loadEnd);
            request.open('GET', url);

            function loadEnd() {
                loadBlock.style.display = 'none';
            }

            request.onload = function () {
                if (request.readyState === 4 && request.status === 200) {
                    resolve(JSON.parse(request.responseText));
                    resolve(JSON.parse(request.responseText));
                } else {
                    let error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            };
            request.onerror = function () {
                reject(new Error('Network Error'));
            };
            request.send();
        });
    }
};

function CheckLocation() {
    loadBlock.style.display = 'block';
    let lat = document.querySelector('input[name=latitude').value;
    let lon = document.querySelector('input[name=longitude').value;
    let param = `https://api.onwater.io/api/v1/results/${lat},${lon}`;

    let res = http.get(param);
    res.then(function (result) {
        if (result.water === true) {
            form.style.display = 'none';
            waterRes.style.display = 'block';
        } else {
            form.style.display = 'none';
            landRes.style.display = 'block';
        }
    }).catch((e) => {
        console.log('error: ', e);
    });

}




