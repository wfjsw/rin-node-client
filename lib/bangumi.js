class bangumi {
    constructor(rp) {
        this._rp = rp
    }

    /**
     * Get timelinejs data
     * @return {Promise}
     */
    timeline() {
        return this._rp('/bangumi/timeline')
    }

    /**
     * Get current season on-showing bangumi data
     * @return {Promise}
     */
    current() {
        return this._rp('/bangumi/current')
    }

    /**
     * Get recent on-air bangumi data
     * @return {Promise}
     */
    recent() {
        return this._rp('/bangumi/recent')
    }

    /**
     * Search bangumi data
     * @param {String} name Target bangumi name
     * @return {Promise}
     */
    search(name) {
        return this._rp('/bangumi/search', {
            method: 'POST',
            body: { name }
        })
    }

    /**
     * Fetch bangumi data
     * @param {String|Array} _id Primary key
     * @return {Promise}
     */
    fetch(_id) {
        return this._rp('/bangumi/fetch', {
            method: 'POST',
            body: { _id }
        })
    }
}