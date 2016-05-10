import React from 'react';

import { UserActions } from '../actions';
import { UserStore } from '../stores';

/**
 *
 */
export default class DropboxCallback extends React.Component {

    /**
     *
     */
    constructor( props ){
        super( props )
        this.state = UserStore.getState();

        this._onChange = this._onChange.bind(this);
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
        UserStore.listen(this._onChange);

        let params = [
            { key: "access_token", value: this.location.query.access_token },
            { key: "token_type", value: this.location.query.token_type },
            { key: "uid", value: this.location.query.uid }
        ]
        // // Update store
        UserActions.setToken(params);
    }

    /**
     *
     */
    componentWillUpdate( nextProps, nextState){
        console.log(nextState);
        if( nextState ) {
            // Go to Root.
            // this.context.router.push("/");
        }
    }

    componentWillUnmount() {
        UserStore.unlisten(this._onChange);
    }

    _onChange( state ){
        this.setState( state );
    }

    /**
     *
     */
    render() {
        return (<p>wait</p>);
    }

}

// The context is passed to the class, such that it is possible to call the
// router object.
DropboxCallback.contextTypes = {
    router: React.PropTypes.object.isRequired
}
