import Ember from 'ember';
const Task = Ember.Object.extend({})

export default Ember.Route.extend({
    model() {
        return Task.create({
            results: Array(10).fill(null),
            startState: true,
            berechnetState: false
            });
    },
    setupController(controller, model){
        controller.set('model', model);
        controller.initialise(model);
    }
});
