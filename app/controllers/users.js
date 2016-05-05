import Ember from 'ember';

export default Ember.Controller.extend({
    withDetail: false,

    actions: {
        showDetail: function() {
            this.set('withDetail', true);
        },
        hideDetail: function() {
            this.set('withDetail', false);
        },
        searchUsers: function(params) {
            this.store.query('user', { filter: { id: params } }).then(function(answer){
                console.log(answer.content);
             });
        }
    }
});
