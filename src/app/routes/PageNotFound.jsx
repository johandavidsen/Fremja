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
     * @method componentDidMount
     *
     * This method implements a catch method for social login callback functions.
     * Because I cant point to the callback directly from the Social Login service.
     *
     */
    componentDidMount(){
        // There are params passed to this class.
        // This is abit of a HACK, as I interprete the params and pass then on to
        // a different URL.
        if(this.props.params.splat){

            let params =  this.props.params.splat.split("&");

            params.forEach( ( element, index, array ) => {
                    let values = element.split("=");
                    element = { key: values[0], value: values[1]};
                    array[index] = element;
                }
            );

            this.context.router.push(
                {
                    pathname: "auth/dropbox/callback",
                    query: {
                        access_token : params[0].value,
                        token_type: params[1].value,
                        uid: params[2].value
                    }
                }
            );
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
