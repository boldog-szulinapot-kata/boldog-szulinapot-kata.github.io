(async function() {
    let index = 0;
    while (1 < 3) {
        await new Promise(res => setTimeout(res, 800));
        console.log('Thinking of you...', index % 2 ? ' ' : '');
        index++;
    }
})();

var body = document.querySelector('body');
var _2020 = document.querySelector('._2020');
var _2021 = document.querySelector('._2021');

if (Date.now() < new Date('2021-05-12T00:00:01.000+02:00')) {
    _2021.classList.add('hidden');
} else {
    _2020.classList.add('hidden');
}

body.classList.remove('hidden');

body.addEventListener('click', toggleMessage);
body.addEventListener('touchstart', toggleMessage);

function toggleMessage() {
    [_2020, _2021].forEach(message => {
        message.classList.toggle('hidden');
    });
}
