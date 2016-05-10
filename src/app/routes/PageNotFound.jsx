import React from 'react';
import { Link } from 'react-router';

/**
 * @class PageNotFound
 *
 * This page is a catch all page. The page is rendered, when there is no route
 * found for that particular URL. 
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
