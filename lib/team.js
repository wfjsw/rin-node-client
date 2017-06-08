class team {
    constructor(rp) {
        this._rp = rp
    }

    /**
     * Get working teams
     * @param {Array} tag_ids
     * @return {Promise}
     */
     working(tag_ids) {
         if (tag_ids instanceof Array)
            return this._rp('/team/working', {
                method: 'POST',
                body: { tag_ids }
            })
        else 
            return {}
     }

    /**
     * Fetch team data
     * @param {String|Array} _id Primary key
     * @return {Promise}
     */
    fetch(_id) {
        return this._rp('/team/fetch', {
            method: 'POST',
            body: { _id }
        })
    }
}