/*
██████╗   ████╗       ██╗       ██╗ ██████╗
██╔═══╝ ██╔═══██╗     ██║       ██║ ██╔═══██╗
██║     ████████║     ██║       ██║ ██████╔═╝
██║     ██╔═══██║     ██║       ██║ ██╔═══██╗
██████╗ ██║   ██║     ████████╗ ██║ ██████╔═╝
╚═════╝ ╚═╝   ╚═╝     ╚═══════╝ ╚═╝ ╚═════╝



Was inspired by
██████╗ ██╗██╗  ██╗ █████╗ ███████╗    ██╗   ██╗████████╗██╗██╗     ███████╗
██╔═╗██╗██║██║ ██╔╝██╔══██╗██╔════╝    ██║   ██║╚══██╔══╝██║██║     ██╔════╝
██████╔╝██║█████╔╝ ███████║███████╗    ██║   ██║   ██║   ██║██║     ███████╗
██╔═══╝ ██║██╔═██╗ ██╔══██║╚════██║    ██║   ██║   ██║   ██║██║     ╚════██║
██║     ██║██║  ██╗██║  ██║███████║    ╚██████╔╝   ██║   ██║███████╗███████║
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝     ╚═════╝    ╚═╝   ╚═╝╚══════╝╚══════╝

CALib is a "library" for JS. It helps with some things you might (or might not) need.
To install it to your HTML file, add this in the <head> tag:
<script src="https://caproductions.github.io/home/assets/scripts/CALibrary.js"></script>


*/

const calib = {};
calib.getCodeFromString = function(str){
    return new Function(str)()
}
calib.forcePrompt = function(message, defaul, accept, error){
    let response = null;
    response = prompt(message, defaul);
    if (response == null || response.trim() == "" || response.trim().length <= 0 || accept.includes(response)){
        alert(error);
        response = calib.forcePrompt(message, defaul, accept, error);
    }
    return response;
}
calib.rand = function(min, max, inclusive){
    if (inclusive) { let num = Math.random*(max-min); } else { let num = Math.random*(max-min); }
    return Math.floor(num)+min;
}