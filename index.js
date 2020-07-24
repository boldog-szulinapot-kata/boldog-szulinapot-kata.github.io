(async function() {
    let index = 0;
    while (1 < 3) {
        await new Promise(res => setTimeout(res, 800));
        console.log('Thinking of you...', index % 2 ? ' ' : '');
        index++;
    }
})();