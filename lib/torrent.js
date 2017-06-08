class torrent {
    constructor(rp) {
        this._rp = rp
    }

    /**
     * Get torrent published by team
     * @param {String} team_id Key of the team
     * @return {Promise}
     */
    team(team_id) {
        return this._rp('/torrent/team', {
            method: 'POST',
            body: { team_id }
        })
    }

    /**
     * Search torrent by tag_id
     * @param {String|Array} tag_id
     * @return {Promise}
     */
    search(tag_id) {
        return this._rp('/torrent/search', {
            method: 'POST',
            body: { tag_id }
        })
    }

    /**
     * Search torrent by title
     * @param {String} title
     * @return {Promise}
     */
    search(title) {
        return this._rp('/torrent/search', {
            method: 'POST',
            body: { title }
        })
    }

    /**
     * Fetch torrent data
     * @param {String|Array} _id Primary key
     * @return {Promise}
     */
    fetch(_id) {
        if (_id instanceof Array)
            return this._rp('/torrent/fetch', {
                method: 'POST',
                body: { _ids: _id }
            })
        else
            return this._rp('/torrent/fetch', {
                method: 'POST',
                body: { _id }
            })
    }
}

module.exports = exports = torrent