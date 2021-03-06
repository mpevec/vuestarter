// ES6 
// LESSON 1 (Binding)
const hello = (name) => {
    return `Hello ${name}`;
};

new Vue({
    el: '#app',
    data: {
        // LESSON 1 (Binding)
        inputValue: hello('you, Vue user!'),

        // LESSON 2 (Array, Event Listener)
        names: ['Jane', 'Martin', 'Jonas'], 
        newName: undefined,   

        // LESSON 3 (Class binding)
        isButtonBig: true,

        // LESSON 5 (REST)
        convertedBitCoin: undefined,
    },
    methods: {

        // LESSON 2 (Array, Event Listener)
        addName() {
            this.names.push(this.newName);        
        }
    },
    computed: {
        // LESSON 4 (Computed property)
        reverseInputValue() {
            return this.inputValue.split('').reverse().join('');
        }
    },

    // LESSON 5 (REST)
    mounted() {
        // ajax request using axios
        axios.get('https://blockchain.info/tobtc?currency=EUR&value=500').then((response) => {
            response && response.data ? this.convertedBitCoin = response.data : null;
        });
    }
});

