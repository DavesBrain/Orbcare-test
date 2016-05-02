import Ember from 'ember';

export default Ember.Controller.extend({
    withDetail: false,

    actions: {
        showDetail: function() {
            this.set('withDetail', true);
        },
        hideDetail: function() {
            this.set('withDetail', false);
        }
    }
});