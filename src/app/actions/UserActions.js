import { Alt } from '../lib';
import request from 'superagent';

/**
 * @class UserActions
 *
 * @since 0.2.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */
class UserActions {

    /**
     * @method login
     *
     */
    login(){

    }

    /**
     * @method localLogin
     *
     */
    localLogin(){

    }

    /**
     * @method setToken
     *
     * @param {Array} params - An array, which holds the objects of type: key, value.
     *
     */
    setToken( params ){

    }

    /**
     * @method refreshToken
     *
     */
    refreshToken(){

    }

    /**
     * @method logout
     *
     */
    logout(){

    }
}

export default Alt.createActions(UserActions);
