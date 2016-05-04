import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return users.filter(x => x.id == params.user_id);
    }
});