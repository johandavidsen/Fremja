/**
 * @module Components
 *
 * This module contains all the components for this application. These components
 * are written without any direct connection to a store.  
 *
 * @since 0.1.0
 * @author Jóhan Davidsen <johan.davidsen@fjakkarin.com>
 *
 */
import Todo from './Todo';

export default function () {
    return {
        'Todo': Todo
    };
}
