$(document).ready(function () {
    var growler = new Vue({
        el: '#growler',
        data: {
            appName: '<a href="./">Growler</a>',
            appLogo: '../img/logo.png',
            accentColor: 'accent-color',
            isOnline: false,
            headers: 'headers',
            appStyle: {
                color: '#FF6A00',
                fontFamily:'Verdana',
                margin: 0    
            },
            query: '',
            emailMessage: '',
            isPowerSyntaxEnabled: false,
            searchIndexes: [],
            searchIndex: 'beers',
            selectedSearchIndex: 'beers',
            selectedSearchIndexes: ['beers', 'pubs'],
            result: 2+3,
        },
        methods: {
            executeSearch: function(t, e) {
                var msg = 'Token: ' + t +
                ' Query: ' + this.query +
                ' Button: ' + event.target.innerText;
                alert(msg);
            }
        }
    });
    console.log(growler);
});

