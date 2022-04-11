function buycursor() {
    if (cursorsowned == 0) {
        if ((cookie + 1) > 50) {
            cookie = cookie - 50
            cookie_pc = cookie_pc + 1
            cursorsowned = cursorsowned + 1.25
        }
    } else {
        if ((cookie + 1) > (cursorsowned * 50)) {
            cookie = cookie - (cursorsowned * 50)
            cookie_pc = cookie_pc + 1
            cursorsowned = cursorsowned * 1.25
        }
    }
    if (cookie < 0) {
        cookie = 0
    }
}
function hireperson() {
    if (workersowned == 0) {
        if ((cookie + 1) > 300) {
            cookie = cookie - 300
            cookie_ps = cookie_ps + 1
            workersowned = workersowned + 1.25
        }
    } else {
        if ((cookie + 1) > (workersowned * 300)) {
            cookie = cookie - (workersowned * 300)
            cookie_ps = cookie_ps + 1
            workersowned = workersowned * 1.25
        }
    }
    if (cookie < 0) {
        cookie = 0
    }
}
function buyfarm() {
    if (farmsowned == 0) {
        if ((cookie + 1) > 2000) {
            cookie = cookie - 2000
            cookie_ps = cookie_ps + 10
            farmsowned = farmsowned + 1.25
        }
    } else {
        if ((cookie + 1) > (farmsowned * 2000)) {
            cookie = cookie - (farmsowned * 2000)
            cookie_ps = cookie_ps + 10
            farmsowned = farmsowned * 1.25
        }
    }
    if (cookie < 0) {
        cookie = 0
    }
}
function buycutter() {
    if (cuttersowned == 0) {
        if ((cookie + 1) > 5000) {
            cookie = cookie - 5000
            cookie_pc = cookie_pc + 15
            cuttersowned = cuttersowned + 1.25
        }
    } else {
        if ((cookie + 1) > (cuttersowned * 5000)) {
            cookie = cookie - (cuttersowned * 5000)
            cookie_pc = cookie_pc + 15
            cuttersowned = cuttersowned * 1.25
        }
    }
    if (cookie < 0) {
        cookie = 0
    }
}
function buyfactory() {
    if (factorysowned == 0) {
        if ((cookie + 1) > 25000) {
            cookie = cookie - 25000
            cookie_ps = cookie_ps + 30
            factorysowned = factorysowned + 1.25
        }
    } else {
        if ((cookie + 1) > (factorysowned * 25000)) {
            cookie = cookie - (factorysowned * 25000)
            cookie_ps = cookie_ps + 30
            factorysowned = factorysowned * 1.25
        }
    }
    if (cookie < 0) {
        cookie = 0
    }
}
function buyad() {
    if (adsowned == 0) {
        if ((cookie + 1) > 100000) {
            cookie = cookie - 100000
            cookie_ps = cookie_ps + 75
            adsowned = adsowned + 1.25
        }
    } else {
        if ((cookie + 1) > (adsowned * 100000)) {
            cookie = cookie - (adsowned * 100000)
            cookie_ps = cookie_ps + 75
            adsowned = adsowned * 1.25
        }
    }
    if (cookie < 0) {
        cookie = 0
    }
}