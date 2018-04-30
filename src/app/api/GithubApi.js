import Github from 'github-api'

/**
 * https://github.com/github-tools/github
 */
class GitHubApi {

    constructor () {
        this.api = new Github({
            token: ''
        })
    }

    getUserNotifications () {
        let me = this.api.getUser()
        return me.listNotifications()
    }
}

export default GitHubApi





