const bangumi = require('./bangumi')
const torrent = require('./torrent')

class RinPrAPIv2 {
    constructor(rp) {
        super()
        this.bangumi = new bangumi(rp)
        this.torrent = new torrent(rp)
    }
}