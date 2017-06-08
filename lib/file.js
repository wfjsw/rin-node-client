class file {
    constructor(rp) {
        this._rp = rp
    }

    /**
     * Fetch the file on the server
     * @param {String|Array} _ids Primary key
     * @return {Promise}
     */
    fetch(_id) {
        if (_id instanceof Array)
            return this._rp('/file/fetch', {
                method: 'POST',
                body: { _ids: _id },
                json: true
            })
        else
            return this._rp('/file/fetch', {
                method: 'POST',
                body: { _id },
                json: true
            })
    }
}

module.exports = exports = file