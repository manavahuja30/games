import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        fill(d){
            return d3.interpolateOranges(d['noise']['value']);
        },
        stroke(d) {
            return (d['street'] && 'black') || 'red';
        }
    }
});
