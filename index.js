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

var c = document.getElementById('complaint');
function cstartConverting() {
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
            c.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
        };

        speechRecognizer.onerror = function (event) {

        };
    } else {
        c.innerHTML = 'Your browser is not supported. If google chrome, please upgrade!';
    }
}

function cstopConverting() {
    speechRecognizer.stop();
}

var d = document.getElementById('diagnosis');
function dstartConverting() {
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
            d.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
        };

        speechRecognizer.onerror = function (event) {

        };
    } else {
        d.innerHTML = 'Your browser is not supported. If google chrome, please upgrade!';
    }
}

function dstopConverting() {
    speechRecognizer.stop();
}

var m = document.getElementById('med');
function mstartConverting() {
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
            m.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
        };

        speechRecognizer.onerror = function (event) {

        };
    } else {
        m.innerHTML = 'Your browser is not supported. If google chrome, please upgrade!';
    }
}

function mstopConverting() {
    speechRecognizer.stop();
}