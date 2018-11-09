/**
 * @module routes
 *
 * This module exports the routes for the application Fremja. 
 *
 */

import Todos from './Todos'

export default function () {
  return {
      'Todos': Todos
  }
}