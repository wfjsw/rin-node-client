const r = require('request-promise-native')
const bangumi = require('./bangumi')
const file = require('./file')
const tag = require('./tag')
const team = require('./team')
const torrent = require('./torrent')
const v2 = require('./v2/index')

class RinPrAPIClient {
    constructor(endpoint, rqoptions = {}) {
        var _rp = r.defaults(Object.assign({}, rqoptions, {
            baseUrl: endpoint || 'https://bangumi.moe/api/',
            json: true
        }))
        this.bangumi = new bangumi(_rp)
        this.file = new file(_rp)
        this.tag = new tag(_rp)
        this.torrent = new torrent(_rp)
        this.v2 = new v2(_rp)
    } 
}

module.exports = exports = RinPrAPIClient