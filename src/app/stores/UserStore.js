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
                setToken: UserActions.SET_TOKEN,
                removeToken: UserActions.LOGOUT,
                getUser: UserActions.GET_USER
            }
        );

        this.on('init', () => {

                // State
                let token = localStorage.getItem('access_token');
                if(token){
                    this.accessToken = token;
                } else {
                    this.accessToken = null;
                }
                this.refreshToken = null;
                this.user = null;
                this.error = null;
            }
        );
    }

    /**
     *
     */
    setToken( params ){
        let token = params.accessToken[0].value;
        this.setState({ accessToken: token });
        localStorage.setItem('accessToken', token);
    }

    /**
     *
     */
    removeToken(){
        localStorage.clear();
        this.setState({ accessToken: null });
    }

    getUser( userObject ){
        this.setState({ user: userObject });
    }
}

export default Alt.createStore(UserStore, 'UserStore');
