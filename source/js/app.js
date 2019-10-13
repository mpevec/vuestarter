// ES6 
const hello = (name) => {
    return `Hello ${name}`;
};

new Vue({
    el: '#app',
    data: {
        inputValue: hello('you, Vue user!'),
    }
});

