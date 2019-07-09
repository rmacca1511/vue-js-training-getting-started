$(document).ready(function () {

    var growler = new Vue({
        el: '#growler',
        data: {
            appName: '<a href="./">Growler</a>',
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
            sectionNameOnce: 'Once Binding',

            appLogo: '../img/logo.png',
            accentColor: 'accent-color',
            isOnline: false,
            headers: 'headers',
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
            textClasses: 'output-field'
        },
        methods: {
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
            }
        }
    });
    console.log(Vue.config);
    Vue.config.keyCodes = {
        f1: 112
    };



});

