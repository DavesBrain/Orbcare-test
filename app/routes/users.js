import Ember from 'ember';
//import users from '../mirage/config';
import InfinityRoute from "ember-infinity/mixins/route";


var usersRoute = Ember.Route.extend(InfinityRoute, {
    model() {
        return this.infinityModel('user', { perPage: 12, startingPage: 1 });
    }
});
export default usersRoute;