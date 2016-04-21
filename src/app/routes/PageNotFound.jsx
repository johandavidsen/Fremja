import React from 'react';
import { Link } from 'react-router';

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

        if(this.props.splat){
            // TODO: Implement.
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
