(function ready (callback) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
})(function () {
    const inputNode = document.getElementById('numpad-isbn-textearea');

    function isValidInput (event) {
        return (
            event.keyCode ===  48 || // 0
            event.keyCode ===  49 || // 1
            event.keyCode ===  50 || // 2
            event.keyCode ===  51 || // 3
            event.keyCode ===  52 || // 4
            event.keyCode ===  53 || // 5
            event.keyCode ===  54 || // 6
            event.keyCode ===  55 || // 7
            event.keyCode ===  56 || // 8
            event.keyCode ===  57 || // 9
            event.keyCode === 107    // + (which we are using for X)
        );
    }

    function handleKeydown (event) {
        if (isValidInput(event)) {
            let key = event.key;

            if (event.keyCode === 107) {
                event.preventDefault();

                key = 'X';
                inputNode.value += key;
            }

            // https://stackoverflow.com/questions/9419263/playing-audio-with-javascript
            const audio = new Audio(`audio/${key}.mp3`);
            audio.play();
        }
    }

    inputNode.addEventListener('keydown', handleKeydown, false);
});
