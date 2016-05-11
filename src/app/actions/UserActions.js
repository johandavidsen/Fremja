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

        return this.logout();
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

    getUser( token ){
        return (dispatch) => {
            request
                .post('https://api.dropboxapi.com/2/users/get_current_account')
                .set('Authorization', 'Bearer ' + token)
                .set('Accept', 'application/json')
                .end( ( err, res) => {
                        if (err || !res.ok) {

                        } else {
                            dispatch(res.body);
                        }
                    }
                );
        }
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
