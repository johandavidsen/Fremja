import React from 'react';
import { Nav } from '../components';
import Loader from 'react-loaders'

import connectToStores from 'alt-utils/lib/connectToStores';

import { UserStore } from '../stores';
import { UserActions } from '../actions';

/**
 * @class Overview
 *
 * This is the main page of the application. This page gives the user an overview
 * of all the information, that is relevant to him/her.
 *
 */
class Overview extends React.Component {

    /**
     * This class is bound to the UserStore.
     */
    static getStores() {
        return [UserStore];
    }

    /**
     * The UserStore state is populated from Props.
     */
    static getPropsFromStores() {
        return UserStore.getState();
    }

    /**
     * @constructor
     *
     * The constructor dose nothing interesting right now.
     *
     */
    constructor( props ){
        super( props );
    }

    /**
     * @method componentDidMount
     *
     * When the component has mounted on the client, the user object is fetched.
     *
     */
    componentDidMount(){
        UserActions.getUser(this.props.accessToken);
    }

    /**
     * @method render
     *
     * The method returns the object, which is displayed.
     *
     */
    render(){

        let nav = (<Nav />);
        if(this.props.user){
            nav = (<Nav user={this.props.user.name.display_name}/>)
        }

        return (
            <div>
                {nav}
                <Loader type="ball-clip-rotate-pulse" active={true} />
            </div>
        )
    }
}

export default connectToStores(Overview);
