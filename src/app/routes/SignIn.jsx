import React from 'react';
import { Button } from 'react-bootstrap';

import config from '../../config';

/**
 * @class SignIn
 *
 *
 * @since 0.2.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
export default class SignIn extends React.Component {

    /**
     *
     */
    constructor( props ){
        super(props);
        this.state = {};
    }

    /**
     *
     */
    render(){

        let url =   'https://www.dropbox.com/oauth2/authorize?response_type=token&client_id='
                    +  config.app_key +
                    '\&redirect_uri\=http://localhost:3000';

        return (
            <div className="app-signin">
                <div className="row">
                    <div className="col-lg-8">
                        <p>Please select your social provider:</p>
                    </div>
                    <div className="col-lg-4" >
                    </div>
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
