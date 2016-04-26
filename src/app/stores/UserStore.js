import { Alt } from '../lib';
import { UserActions} from '../actions';

/**
 * @class UserStore
 *
 *
 * @since 0.2.1
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
class UserStore {

    /**
     * @constructor
     */
    constructor() {
        // Bind listeners
        this.bindListeners({
                setToken: UserActions.SET_TOKEN
            }
        );

        // State
        this.accessToken = null;
        this.refreshToken = null;
        this.user = null;
        this.error = null;
    }

    /**
     *
     */
    setToken( params ){
        this.accessToken = params.accessToken[0].value;
    }
}

export default Alt.createStore(UserStore, 'UserStore');
