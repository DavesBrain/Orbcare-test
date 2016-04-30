import Ember from 'ember';
import { users } from '../../mirage/fixtures/data'

export default Ember.Route.extend({
    model(params) {
        return users.filter(x => x.id == params.user_id);
    }
});