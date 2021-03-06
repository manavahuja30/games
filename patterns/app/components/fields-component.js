import Ember from 'ember';

export default Ember.Component.extend({
    init() {
        this._super(...arguments);
        this.set('size', 10);
        this.set('width', 960);
        this.set('height', 500);
    },
    didRender(){
        let that = this;
        function convert(cube){
            let result = [];
            let w = that.get('size') * Math.sqrt(3);
            for(let i = 0; i < 7; i++){
                var angle_deg = 60 * i - 30;
                var angle_rad = Math.PI / 180 * angle_deg;
                result.push([
                    w * cube[0] + 1/2 * w * cube[2] + that.get('size') * Math.cos(angle_rad),
                    (2 - Math.cos(Math.PI / 180 * 60))* that.get('size') * cube[2]  + that.get('size') * Math.sin(angle_rad)
                ]);
            }

            return result;
        }
        let svg = d3.select('#fields').append('svg').attr('width', this.get('width')).attr('height', this.get('height'));
        let values = Array.from(that.get('data').values());

        function fillFunction(d){
            if(d.value == 1){
                return 'orange';
            }
            return 'white';
        }

        svg.
            selectAll('path').
            //data(Array.from(data).map(([key,value]) => convert(key))).
            data(values).
            enter().
            append('path').
            attr('d', function(singlefield){
                let w = that.get('size') * Math.sqrt(3);
                let coords = [];
                for(let i = 0; i < 7; i++){
                    var angle_deg = 60 * i - 30;
                    var angle_rad = Math.PI / 180 * angle_deg;
                    coords.push([w * singlefield['x'] + 1/2 * w * singlefield['z'] + that.get('size') * Math.cos(angle_rad),
                        (2 - Math.cos(Math.PI / 180 * 60))* that.get('size') * singlefield['z']  + that.get('size') * Math.sin(angle_rad)
                    ]);
                }
                return d3.line()(coords);
                }
            ).
            attr('transform', function(d) {
                return 'translate(' + that.get('width') / 2 + ',' + that.get('height') / 2 + ')'
            }).
            attr('stroke', function(d) {
                return 'red';
            }).
            attr('fill', d => fillFunction(d)).
            on('click', function(d, i){
                d['value'] = (d['value'] + 1) % 2;
                d3.select(this).attr('fill', fillFunction(d));
            });
    }
});
