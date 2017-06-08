class file {
    constructor(rp) {
        this._rp = rp
    }

    /**
     * Fetch the file on the server
     * @param {String|Array} _ids Primary key
     * @param {String} encoding="utf8" Set encoding of return data
     * @return {Promise}
     */
    fetch(_id) {
        if (_id instanceof Array)
            return this._rp('/file/fetch', {
                method: 'POST',
                body: { _ids: _id },
                encoding,
                json: true
            })
        else
            return this._rp('/file/fetch', {
                method: 'POST',
                body: { _id },
                encoding,
                json: true
            })
    }
}

module.exports = exports = file