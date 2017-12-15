# Numpad ISBN

This utility is used to help entering large numbers of ISBNs and validating input.

### Original Audio Files

```shell
wget https://evolution.voxeo.com/library/audio/prompts/numbers/0.wav
wget https://evolution.voxeo.com/library/audio/prompts/numbers/1.wav
wget https://evolution.voxeo.com/library/audio/prompts/numbers/2.wav
wget https://evolution.voxeo.com/library/audio/prompts/numbers/3.wav
wget https://evolution.voxeo.com/library/audio/prompts/numbers/4.wav
wget https://evolution.voxeo.com/library/audio/prompts/numbers/5.wav
wget https://evolution.voxeo.com/library/audio/prompts/numbers/6.wav
wget https://evolution.voxeo.com/library/audio/prompts/numbers/7.wav
wget https://evolution.voxeo.com/library/audio/prompts/numbers/8.wav
wget https://evolution.voxeo.com/library/audio/prompts/numbers/9.wav
wget https://evolution.voxeo.com/library/audio/prompts/alphabet/X.wav
```

### Optimize Audio Files

Resources:

* https://stackoverflow.com/questions/11834297/how-can-i-remove-silence-from-an-mp3-programmatically
* http://www.jamesrobertson.eu/clf/2012/may/11/speeding-up-a-wave-file-using-sox.html
* http://stefaanlippens.net/audio_conversion_cheat_sheet/

Optimizations:

* sped up
* reduced to mono
* trimmed silence
* `-C 64` sets the bitrate (sox defaults to 8)

```shell
sox 0.wav -C 64 0.mp3 tempo 1.75 channels 1 silence 1 0.1 0.1% reverse silence 1 0.1 0.1% reverse
sox 1.wav -C 64 1.mp3 tempo 1.75 channels 1 silence 1 0.1 0.1% reverse silence 1 0.1 0.1% reverse
sox 2.wav -C 64 2.mp3 tempo 1.75 channels 1 silence 1 0.1 0.1% reverse silence 1 0.1 0.1% reverse
sox 3.wav -C 64 3.mp3 tempo 1.75 channels 1 silence 1 0.1 0.1% reverse silence 1 0.1 0.1% reverse
sox 4.wav -C 64 4.mp3 tempo 1.75 channels 1 silence 1 0.1 0.1% reverse silence 1 0.1 0.1% reverse
sox 5.wav -C 64 5.mp3 tempo 1.75 channels 1 silence 1 0.1 0.1% reverse silence 1 0.1 0.1% reverse
sox 6.wav -C 64 6.mp3 tempo 1.75 channels 1 silence 1 0.1 0.1% reverse silence 1 0.1 0.1% reverse
sox 7.wav -C 64 7.mp3 tempo 1.75 channels 1 silence 1 0.1 0.1% reverse silence 1 0.1 0.1% reverse
sox 8.wav -C 64 8.mp3 tempo 1.75 channels 1 silence 1 0.1 0.1% reverse silence 1 0.1 0.1% reverse
sox 9.wav -C 64 9.mp3 tempo 1.75 channels 1 silence 1 0.1 0.1% reverse silence 1 0.1 0.1% reverse
sox X.wav -C 64 X.mp3 tempo 1.50 channels 1 silence 1 0.1 0.1% reverse silence 1 0.1 0.1% reverse
```

### Speech Synthesis

* https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API

```javascript
// if ('speechSynthesis' in window) {
//     const utterance = new SpeechSynthesisUtterance(message);
//     utterance.rate = 2;
//     utterance.pitch = 0.85;
//     window.speechSynthesis.speak(utterance);
// }
```
