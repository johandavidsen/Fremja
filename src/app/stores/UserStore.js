import { Alt } from '../lib';
import { UserActions} from '../actions';

/**
 *
 */
class UserStore {

    /**
     *
     */
    constructor() {
        // Bind listeners
        this.bindListeners({
        });

        // State
        this.accessToken = null;
        this.refreshToken = null;
        this.user = null;
        this.error = null;
    }
}

export default Alt.createStore(UserStore, 'UserStore');
