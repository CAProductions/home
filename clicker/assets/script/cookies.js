function clickcookie() {
    cookie = cookie + cookie_pc
    update()
}

function update() {
    if (shop == 1) {

        document.getElementById("click").setAttribute("style", " top: 50%; left: 25%; transform: translate(-50%, -50%);");
        document.getElementById("cookie_txt").setAttribute("style", "margin-left:-50%; text-align:center;");
        document.getElementById("cookie_txt2").setAttribute("style", "margin-left:-50%; text-align:center;");
        document.getElementById("shop").setAttribute("style", "right:00%; top:0px; ")

    } else {
        document.getElementById("click").setAttribute("style", " top: 50%; left: 50%; transform: translate(-50%, -50%);");
        document.getElementById("cookie_txt").setAttribute("style", "text-align:center;");
        document.getElementById("cookie_txt2").setAttribute("style", "text-align:center;");
        document.getElementById("shop").setAttribute("style", "right:-50%; top:0px;")

    };
    document.getElementById("cookie_txt").innerHTML = `${commas(Math.floor(cookie))} cookies`;
    document.getElementById("cookie_txt2").innerHTML = `${commas(Math.floor(cookie_ps))} per second | ${commas(Math.floor(cookie_pc))} per click`;
    document.title = `${Math.floor(cookie)} cookies - Cookie Click`;
    //Build Updates
    if (cursorsowned !== 0) {
        document.getElementById("cursor").innerHTML = `${commas(Math.floor(cursorsowned * 50))} cookies`;
    }
    if (workersowned !== 0) {
        document.getElementById("worker").innerHTML = `${commas(Math.floor(workersowned * 300))} cookies`;
    }
    if (farmsowned !== 0) {
        document.getElementById("pitchfork").innerHTML = `${commas(Math.floor(farmsowned * 2000))} cookies`;
    }
    if (cuttersowned !== 0) {
        document.getElementById("cutter").innerHTML = `${commas(Math.floor(cuttersowned * 5000))} cookies`;
    }
    if (factorysowned !== 0) {
        document.getElementById("factory").innerHTML = `${commas(Math.floor(factorysowned * 25000))} cookies`;
    }
    if (adsowned !== 0) {
        document.getElementById("ad").innerHTML = `${commas(Math.floor(adsowned * 100000))} cookies`;
    }
}

function cps() {
    cookie = cookie + (cookie_ps / 100)
    update()
}

function rawFormatter(val) {
    return Math.round(val * 1000) / 1000;
}

var formatLong = [' thousand', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion', ' sextillion', ' septillion', ' octillion', ' nonillion'];
var prefixes = ['', 'un', 'duo', 'tre', 'quattuor', 'quin', 'sex', 'septen', 'octo', 'novem'];
var suffixes = ['decillion', 'vigintillion', 'trigintillion', 'quadragintillion', 'quinquagintillion', 'sexagintillion', 'septuagintillion', 'octogintillion', 'nonagintillion'];
for (var i in suffixes) {
    for (var ii in prefixes) {
        formatLong.push(' ' + prefixes[ii] + suffixes[i]);
    }
}

function formatEveryThirdPower(notations) {
    return function (val) {
        var base = 0,
            notationValue = '';
        if (!isFinite(val)) return 'Infinity';
        if (val > 1000000) {
            val /= 1000;
            while (Math.round(val) >= 1000) {
                val /= 1000;
                base++;
            }
            if (base >= notations.length) {
                return 'Infinity';
            } else {
                notationValue = notations[base];
            }
        }
        return (Math.round(val * 1000) / 1000) + notationValue;
    };
}

function commas(x) {
    // var cstring = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    if (parseInt(x) <= 1000000) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    } else {
        return formatEveryThirdPower(formatLong)(x)
    }
}