import Ember from 'ember';

var userRoute = Ember.Route.extend({
    model(params) {
        return this.modelFor('users').user.findBy('id', params.user_id);
    }
});


export default userRoute;