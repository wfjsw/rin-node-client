const bangumi = require('./bangumi')
const torrent = require('./torrent')

class RinPrAPIv2 {
    constructor(rp) {
        this.bangumi = new bangumi(rp)
        this.torrent = new torrent(rp)
    }
}

module.exports = exports = RinPrAPIv2