import React from 'react';
import { Button } from 'react-bootstrap';

import config from '../../config';

/**
 * @class SignIn
 *
 * This route is the landing page or login page. This pages gives the user a
 * selection of login options. Depending on the options selected, the application
 * will provide different features.
 *
 * @since 0.2.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
export default class SignIn extends React.Component {

    /**
     * @constructor
     *
     * This constructor dosent take any particular properties.
     *
     */
    constructor( props ){
        super(props);
    }

    /**
     * @method render
     *
     * @return This function returns a valid JSX object.
     *
     */
    render(){

        let url =   'https://www.dropbox.com/oauth2/authorize?response_type=token&client_id='
                    +  config.app_key +
                    '\&redirect_uri\=http://localhost:3000';

        return (
            <div>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="page-header">
                            <h1>Fremja <small >by <a href="http://www.fjakkarin.com" target="_blank" >Fjakkarin.com</a></small></h1>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <p>Please select your social provider:</p>
                    </div>
                    <div className="col-lg-4" ></div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                    </div>
                    <div className="col-lg-4" >
                        <Button href={url}>DropBox</Button>
                    </div>
                    <div className="col-lg-4" >
                    </div>
                </div>
            </div>
        )
    }

}
