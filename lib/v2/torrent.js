class torrentv2 {
    constructor(rp) {
        this._rp = rp
    }

    /**
     * Get torrent data by ID
     * @param {String} torrent_id
     * @return {Promise}
     */
    get(torrent_id) {
        return this._rp(`/v2/torrent/${torrent_id}`)
    }

    
}