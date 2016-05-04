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
     * @method bootstrap
     *
     */
    bootstrap(){
        let token = localStorage.getItem('access_token');
        // @TODO: If token exists then setToken.
        if( token ){
            return this.setToken([ { key: "access_token", value: token } ]);
        } else {
            return {};
        }
    }

    /**
     * @method setToken
     *
     * This method takes a parameter of type array, which contains objects with
     * the structure key, value and passes the array to the UserStore.
     *
     * @TODO: Ensure the structure of the the parameter.
     *
     * @param {Array} params - An array, which holds the objects of type: key, value.
     *
     */
    setToken( params ){

        // Get accessToken.
        let accessToken = params.filter( ( element ) => {
                if(element.key == "access_token") {  return element.value };
            }
        );

        // Get tokenType
        let tokenType = params.filter( ( element ) => {
                if(element.key == "token_type") { return element.value };
            }
        );
        // Get application id.
        let uid = params.filter( ( element ) => {
                if(element.key == "uid") { return element.value };
            }
        );

        return { accessToken, tokenType, uid };
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
        return { };
    }
}

export default Alt.createActions(UserActions);
