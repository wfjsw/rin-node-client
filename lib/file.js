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
    fetch(_id, encoding='utf8') {
        return this._rp('/file/fetch', {
            method: 'POST',
            body: { _id },
            encoding,
            json: true
        })
    }
}