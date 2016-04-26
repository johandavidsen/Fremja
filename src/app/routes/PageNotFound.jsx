import React from 'react';
import { Link } from 'react-router';

import { UserActions } from '../actions';

/**
 * @class PageNotFound
 *
 * This page is a catch all page. The page is rendered, when there is no route
 * found for that particular URL. This page also handels a special case, which is
 * callback from the social provider. @see componentDidMount.
 *
 * @since 0.2.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
export default class PageNotFound extends React.Component {

    /**
     * @method constructor
     *
     */
    constructor( props ){
        super( props );
    }

    /**
     * @method componentDidMount
     *
     * This method checks if there are any params passed to this class. If the
     * params map to a Social callback, the params are set and the component is
     * directed back to the application.
     *
     */
    componentDidMount(){

        // There are params passed to this class.
        if(this.props.params.splat){
            // Handle params
            let params =  this.props.params.splat.split("&");
            // Convert params to object of type key, value.
            params.forEach( ( element, index, array ) => {
                let values = element.split("=");
                element = { key: values[0], value: values[1]};
                array[index] = element;
            });
            // Update store
            UserActions.setToken(params);
            // Go to Root.
            this.context.router.push("/");
        }
    }

    /**
     * @method render
     *
     */
    render() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Go to <Link to="/">Home Page</Link></p>
            </div>
        )
    }
}
// The context is passed to the class, such that it is possible to call the
// router object.
PageNotFound.contextTypes = {
    router: React.PropTypes.object.isRequired
}
