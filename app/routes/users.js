import Ember from 'ember';

var usersRoute = Ember.Route.extend({
    model() {
        return this.store.findAll('user');
    },
//    model(params) {
//        //return this.store.query('user', { id: 1 });    
//
//        return {
//            id: params.item_id,
//            fname: "This is item " + params.item_id
//        }
//    }
});
export default usersRoute;

