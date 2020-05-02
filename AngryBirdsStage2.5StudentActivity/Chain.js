class Chain {
	
	constructor(bodyA,bodyB) {
	
		var options = {
			bodyA: bird.body,
			bodyB: constraintLog.body,
			stifness: 0.4,
			lenght: 10
		}

		this.body = Constraint.create(options);

		World.add(world, this.body);
	}

	display() {
		var pointA = this.body.bodyA.position;
		var pointB = this.body.bodyB.position;
		strokeWeight(4);
		line(pointA.x,poinA.y,pointB.x,pointB.y);
	}

}
