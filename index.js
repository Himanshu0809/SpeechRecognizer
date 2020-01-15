var r = document.getElementById('result');
var speechRecognizer = new webkitSpeechRecognition();
function startConverting() {
    if ('webkitSpeechRecognition' in window) {

        speechRecognizer.continuous = true; // to make sure that if the user stops talking the speech recognition do not end
        speechRecognizer.interimResults = true; //to make sure that the interim reults returned by the speechRecognizer can be changed
        speechRecognizer.lang = 'en-IN';
        speechRecognizer.start();   //start listening

        var finalTranscripts = '';

        speechRecognizer.onresult = function (event) {
            var interimTranscripts = '';
            for (var i = event.resultIndex; i < event.results.length; i++) {
                var transcript = event.results[i][0].transcript;
                transcript.replace("\n", "<br>");
                if (event.results[i].isFinal) {
                    finalTranscripts += transcript;
                } else {
                    interimTranscripts += transcript;
                }
            }
            r.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
        };

        speechRecognizer.onerror = function (event) {

        };
    } else {
        r.innerHTML = 'Your browser is not supported. If google chrome, please upgrade!';
    }
}

function stopConverting() {
    speechRecognizer.stop();
}