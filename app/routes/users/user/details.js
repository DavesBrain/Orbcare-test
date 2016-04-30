import Ember from 'ember';

import { users } from '../../../mirage/fixtures/data'

export default Ember.Route.extend({
  model(params) {
    return this.modelFor('users.user').details;
  },
});
