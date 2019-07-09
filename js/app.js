$(document).ready(function () {


    // Advantage of computer properties - Caching so good for performance 

    
    var growler = new Vue({
        el: '#growler',
        data: {
            appName: '<a href="./">Growler</a>',
            
            sectionNameBeers: 'Beers List',
            sectionNameCheckbox: 'Checkbox Binding',
            sectionNameDropdown: 'Dropdown List Binding',
            sectionNameEventCapture: 'Event Capture Binding (Top to Bottom)',
            sectionNameInput: 'Input Field Binding (with trim)', 
            sectionNamePrevent: 'Prevent Modifier',
            sectionNameRadio: 'Radio Modifier',
            sectionNameKeyed: 'Keyed Modifier',
            sectionNameSelf: 'Self Modifier',
            sectionNameStop: 'Stop Modifier',
            sectionNameTextarea: 'Textarea Binding',
            sectionNameNumber: 'Number Binding',
            sectionNameLazy: 'Lazy Binding',
            sectionNameLoop: 'Looping a Specific Number of times',
            sectionNameOnce: 'Once Binding',
            sectionNameMouse: 'Mouse Binding',
            sectionNameSpecial: 'Special Keys Binding',
            sectionNameTraversing: 'Traversing through object properties',

            appLogo: '../img/logo.png',
            accentColor: 'accent-color',
            isOnline: window.navigator.onLine,
            headers: 'headers',
            pageCount: 5,
            appStyle: {
                color: '#FF6A00',
                fontFamily:'Verdana',
                margin: 0    
            },
            grandfatherClass: 'grandfather-class',
            parentClass: 'parent-class',
            query: '',
            queryKeyed: '',
            queryPrevent: '',
            querySearchOnce: '',
            isRunning: false,
            inputButton: 'input-button',
            inputClasses: 'input-field',
            inputCheckbox: 'input-checkbox',
            inputRadio: 'input-radio',
            inputSelect: 'input-select',
            inputSelectMultiple: 'input-select input-select--multiple',
            emailMessage: '',
            isPowerSyntaxEnabled: false,
            searchIndexes: [],
            searchIndex: 'beers',
            sectionHeader: 'section-header',
            selectedSearchIndex: 'beers',
            selectedSearchIndexes: ['beers', 'pubs'],
            result: 2+3,
            textClasses: 'output-field',
            top: '200px',
            left: '200px',

            currentUser: {
                firstName: 'Ryan',
                fingers: 10,
                tags: ['male', 'scorpio'],
                socialMedia: {
                    twitter: '@RyanMackenzie92',
                    youtube: 'RyanMac'
                }
            },

            beers: [
                {name: 'Pope Lick Porter', price: 2.80},
                {name: 'Hyote Chocolate Stout', price: 2.12},
                {name: 'Ahool Ale', price: 2.38},
                {name: 'Tikibalang Barley Wine', price: 2.54}
            ],
            shoppingCart: {
                items: [],
                subTotal: 0.00
            },
            subTotal: 0.00
        },
        computed: {
            isOnline: {
                get: function () { return this.canConnect ? 'Yes' : 'No'; },
                set: function(newValue) {
                    this.canConnect = newValue;
                }
            }
        },
        created: function() {
            axios.get('https://www.ecofic.com')
            .then(function (res) {
                growler.canConnect = true;
            })
            .catch(function (err) {
                growler.canConnect = false;
            })
        },
        watch: {
            shoppingCart: {
                handler: function(latest, original) {
                    this.updateSubTotal()
                },
                deep: true
            }
        },
        methods: {
            updateSubTotal: function() {
                var s = this.shoppingCart.length;
                var t = 0;
                for (var i=0; i<s; i++) {
                    t += this.shoppingCart[i].price;
                }
                this.subTotal = t;
            },
            buy: function(beer) {
                this.shoppingCart.push(beer);
            },
            grandparentClick: function() {
                alert('Grandparent');
            },
            parentClick: function() {
                alert('parent');
            },
            executeSearchCapture: function(t, e) {
                var msg = 'Token: ' + t +
                ' Query: ' + this.query +
                ' Button: ' + event.target.innerText;
                alert(msg);
            },
            executeSearchPrevent: function() {
                if (this.queryPrevent) {
                    document.forms[0].submit();
                } else {
                    alert('Please enter a query');
                }
            },
            executeSearchOnce: function() {
                this.isRunning = true;
                document.forms[0].submit();
            },
            executeSearchKeyed: function(t, e) {
                var msg = 'Running Keyed Event - Runs on Enter-----> Token: ' + t +
                ' Query: ' + this.query +
                ' Button: ' + event.target.innerText;
                alert(msg);
            },
            evaluateKey: function() {
                console.log('Evaluating Key');
            },
            onBlockClick: function(e) {
                if (e.button === 2) {
                    this.showContextMenu = true;
                    this.top = e.y + 'px';
                    this.left = e.x + 'px';
                }
            },
            showContextMenu: function() {
                this.showContextMenu = true;
            },
            closeContextMenu: function() {
                this.showContextMenu = false;
            },
            onCopyClick: function() {
                alert('copy something');
                this.closeContextMenu();
            },
            onPasteClick: function() {
                alert('paste something');
                this.closeContextMenu();
            }
        }

    });
    
    Vue.set(growler.beers, 2, {name: 'Ahool Pale Ale', price: 2.38});

    Vue.config.keyCodes = {
        f1: 112
    };




});

