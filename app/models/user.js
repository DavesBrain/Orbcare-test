import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    fname: attr(),
    lname: attr(),
    phone: attr(),
    address: attr(),
    city: attr(),
    province: attr(),
    country: attr(),
    postalcode: attr()
});
    
    