(function ready (callback) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
})(function () {
    const inputNode    = document.getElementById('numpad-isbn-textearea');
    const audioNode    = document.getElementById('numpad-isbn-audio');
    const xNode        = document.getElementById('numpad-isbn-replace-x');
    const validateNode = document.getElementById('numpad-isbn-validate');

    const AUDIO = {
        '0'       : new Howl({ src : ['audio/0.mp3']       }),
        '1'       : new Howl({ src : ['audio/1.mp3']       }),
        '2'       : new Howl({ src : ['audio/2.mp3']       }),
        '3'       : new Howl({ src : ['audio/3.mp3']       }),
        '4'       : new Howl({ src : ['audio/4.mp3']       }),
        '5'       : new Howl({ src : ['audio/5.mp3']       }),
        '6'       : new Howl({ src : ['audio/6.mp3']       }),
        '7'       : new Howl({ src : ['audio/7.mp3']       }),
        '8'       : new Howl({ src : ['audio/8.mp3']       }),
        '9'       : new Howl({ src : ['audio/9.mp3']       }),
        'X'       : new Howl({ src : ['audio/X.mp3']       }),
        'valid'   : new Howl({ src : ['audio/valid.mp3']   }),
        'invalid' : new Howl({ src : ['audio/invalid.mp3'] }),
    };

    function isValidISBN (input) {
        return !!ISBN.parse(input);
    }

    function isValidISBNCharacter (event) {
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
            event.keyCode === 107    // plus sign (which we are using for X)
        );
    }

    function handleKeydown (event) {
        const shouldReadOutLoud  = audioNode.checked;
        const shouldReplaceWithX = xNode.checked;
        const shouldValidate     = validateNode.checked;

        if (isValidISBNCharacter(event)) {
            let key = event.key;

            if (shouldReplaceWithX) {
                if (event.keyCode === 107) {
                    event.preventDefault();

                    key = 'X';
                    inputNode.value += key;
                }
            }

            if (shouldReadOutLoud) {
                AUDIO[key].play();
            }
        } else if (event.keyCode === 13) { // enter key
            if (shouldValidate) {
                const lines = inputNode.value.split('\n');
                const lastLine = lines[lines.length - 1];

                if (isValidISBN(lastLine)) {
                    AUDIO['valid'].play();
                } else {
                    AUDIO['invalid'].play();
                }
            }
        }
    }

    inputNode.addEventListener('keydown', handleKeydown, false);
});
