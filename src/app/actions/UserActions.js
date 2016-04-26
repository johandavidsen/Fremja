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
     *
     */
    login(){

    }

    /**
     *
     */
    localLogin(){

    }

    /**
     * @method
     *
     * @param {Array} params - An array, which holds the objects of type: key, value.
     *
     */
    setToken( params ){
        
    }

    /**
     *
     */
    refreshToken(){

    }

    /**
     *
     */
    logout(){

    }
}

export default Alt.createActions(UserActions);
