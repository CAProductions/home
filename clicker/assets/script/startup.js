var cookie, cookie_pc, cookie_ps, shop, cursorsowned, workersowned, farmsowned, cuttersowned, factorysowned, adsowned
cookie = 0
cookie_pc = 1
cookie_ps = 0
shop = 0
cursorsowned = 0
workersowned = 0
farmsowned = 0
cuttersowned = 0
factorysowned = 0
adsowned = 0

function loadgame() {
    cleargame()
    cookie = (parseInt(Math.floor(localStorage.getItem("cookie"))) / 10000)
    cookie_pc = parseInt(localStorage.getItem("cookie_pc"))
    cookie_ps = parseInt(localStorage.getItem("cookie_ps"))
    cursorsowned = (parseInt(localStorage.getItem("cursorsowned")) / 10000)
    workersowned = (parseInt(localStorage.getItem("workersowned")) / 10000)
    farmsowned = (parseInt(localStorage.getItem("farmsowned")) / 10000)
    cuttersowned = (parseInt(localStorage.getItem("cuttersowned")) / 10000)
    factorysowned = (parseInt(localStorage.getItem("factorysowned")) / 10000)
    adsowned =  (parseInt(localStorage.getItem("adsowned")) / 10000)

}

function updatelocalstorage() {
    localStorage.setItem("cookie", cookie * 10000)
    localStorage.setItem("cookie_ps", cookie_ps)
    localStorage.setItem("cookie_pc", cookie_pc)
    localStorage.setItem("cursorsowned", cursorsowned * 10000)
    localStorage.setItem("workersowned", workersowned * 10000)
    localStorage.setItem("farmsowned", farmsowned * 10000)
    localStorage.setItem("cuttersowned", cuttersowned * 10000)
    localStorage.setItem("factorysowned", factorysowned * 10000)
    localStorage.setItem("adsowned", adsowned * 10000)
    const date = new Date()
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    const time = new Intl.DateTimeFormat('en-US', options).format(date);
    console.log(`Autosaved | ${time}`)
}

function cleargame() {
    cookie = 0
    cookie_pc = 1
    cookie_ps = 0
    shop = 0
    cursorsowned = 0
    workersowned = 0
    farmsowned = 0
    cuttersowned = 0
    factorysowned = 0
    adsowned = 0

}
document.addEventListener("keydown", function (e) {
    if ((window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && e.keyCode == 83) {
        e.preventDefault();
        updatelocalstorage()
    }
}, false);
document.addEventListener('contextmenu', event => event.preventDefault());