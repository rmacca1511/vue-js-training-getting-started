$(document).ready(function () {
    var growler = new Vue({
        el: '#growler',
        data: {
            appName: '<a href="./">Growler</a>',
            appLogo: '../img/logo.png',
            appStyle: {
                color: '#FF6A00',
                fontFamily:'Verdana',
                margin: 0    
            }
        }
    });
});

