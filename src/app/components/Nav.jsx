import React from 'react';

/**
 * @class Nav
 *
 * This component is used for the top navigation. The navigation is implemented
 * in a breadcrumb structure.
 *
 * @since 0.2.2
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 */
export default class Nav extends React.Component {

    /**
     * @constructor
     *
     *
     */
    constructor( props ){
        super( props );
    }

    /**
     * @method render
     *
     * @return This method returns the Nav JSX object.
     */
    render(){
        return (
            <nav className="navbar">
                <a className="navbar-brand" href="#">Fremja</a>
                <div className="nav navbar-nav">
                    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                </div>
            </nav>
        );
    }
}
