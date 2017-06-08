class tag {
    constructor(rp) {
        this._rp = rp
    }

    /**
     * Get all tags data 
     * types could be:
     *   lang - languages
     *   resolution - video resolution
     *   format - file format
     *   bangumi - bangumi tags
     *   team - team tags
     *   misc - others
     * @return {Promise}
     */
    all() {
        return this._rp('/tag/all')
    }

    /**
     * Get popular bangumi tags
     * return 30 bangumi TAG data sort by activity
     * @return {Promise}
     */
    popbangumi() {
        return this._rp('/tag/popbangumi')
    }

    /**
     * Get common tags
     * return some common tags used by resources.
     * @return {Promise}
     */
    common() {
        return this._rp('/tag/common')
    }

    /**
     * Get popular team tags
     * @return {Promise}
     */
    team() {
        return this._rp('/tag/team')
    }

    /**
     * Get misc tags
     * return all tags with type misc.
     * @return {Promise}
     */
    misc() {
        return this._rp('/tag/misc')
    }

    /**
     * Search tags
     * @param {String} name Tag name, case insensitive
     * @param {String} type Get the specified type of tag(s). If not set, it will return all kind of tags.
     * @param {Boolean} keywords False: exact, True: partial
     * @param {Boolean} multi Return the collection of tags or not.
     * @return {Promise}
     */
    search(name, type='', keywords=true, multi=false) {
        var opts = {
            name, 
            keywords,
            multi
        }
        if (type !== '') opts.type = type
        return this._rp('/tag/search', {
            body: opts,
            method: 'POST'
        })
    }

    /**
     * Get tag suggestions
     * @param {String} query Torrent name
     * @return {Promise}
     */
    suggest(query) {
        return this._rp('/tag/suggest', {
            method: 'POST',
            body: { query }
        })
    }

    /**
     * Fetch tag data
     * @param {String|Array} _id Primary key
     * @return {Promise}
     */
    fetch(_id) {
        if (_id instanceof Array)
            return this._rp('/tag/fetch', {
                method: 'POST',
                body: { _ids: _id }
            })
        else
            return this._rp('/tag/fetch', {
                method: 'POST',
                body: { _id }
            })
    }
}

module.exports = exports = tag