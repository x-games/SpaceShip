function Autopilot() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.img = document.getElementById('source');

    this.isAnimationActive = false;

}

Autopilot.prototype.init_world = function() {
    var self = this;

    this.ctx.fillStyle="red";
    this.ctx.fill();

    this.isAnimationActive = true;

    var cb = function() {
        if(!self.isAnimationActive) {
            return;
        }

        self.draw();

        requestAnimationFrame(cb);
    };
    cb();
};

Autopilot.prototype.draw = function() {
    this.ctx.clearRect(0, 0, this.w, this.h);

    //field
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 5;
    this.ctx.strokeRect(0, 0, this.w, this.h);

    this.drawSpace();

    //ship
    this.ctx.drawImage(this.img, 50, this.h-100, 43, 73);
};

Autopilot.prototype.AI = function() {
    this.AISpeed = 2;


};

Autopilot.prototype.drawSpace = function() {
    var map = [];

    for(var i = 0; i < this.h; i += 50) {
        for(var j = 0; j < this.w; j += 50) {
            map.push([j,i]);
        }
    }

    for(var k = 0; k < map.length; k++) {
        this.ctx.beginPath();
        this.ctx.arc(map[k][0], map[k][1], 1, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
    }
};




var Ai = new Autopilot();
Ai.init_world();


