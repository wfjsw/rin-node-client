class bangumiv2 {
    constructor(rp) {
        this._rp = rp
    }

    /**
     * Get current season on-showing bangumi data
     * @return {Promise}
     */
    current() {
        return this._rp('/v2/bangumi/current')
    }

    /**
     * Get recent on-air bangumi data
     * @return {Promise}
     */
    recent() {
        return this._rp('/v2/bangumi/recent')
    }

    /**
     * Get bangumi data by user
     * @param {String} user_id
     * @return {Promise}
     */
    get_user(user_id) {
        return this._rp(`/v2/bangumi/user/${user_id}`)
    }

    /**
     * Get bangumi data by team
     * @param {String} team_id
     * @return {Promise}
     */
    get_team(team_id) {
        return this._rp(`/v2/bangumi/team/${team_id}`)
    }


}

module.exports = exports = bangumiv2
