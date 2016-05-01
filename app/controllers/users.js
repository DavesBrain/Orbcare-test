import Ember from 'ember';

export default Ember.Controller.extend({
    withDetail: false,

    actions: {
        showDetails: function() {
            console.log(":)");
            this.set('withDetail', true);
        },
        hideDetails: function() {
            console.log(":(");
            this.set('withDetail', false);
        }
    }
});