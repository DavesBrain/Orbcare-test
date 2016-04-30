import Ember from 'ember';

import { users } from '../mirage/fixtures/data';

var usersRoute = Ember.Route.extend({
    model() {
        return users;
    }
});
export default usersRoute;

