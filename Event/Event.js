"use strict";
var Ballz;
(function (Ballz) {
    window.addEventListener("load", hndLoad);
    let balls = [];
    function hndLoad() {
        for (let i = 0; i < 10; i++) {
            const ball = {
                element: document.createElement("span"),
                position: { x: 100, y: 100 },
                velocity: { x: 10, y: 10 },
            };
            document.body.appendChild(ball.element);
            balls.push(ball);
        }
        move();
    }
    function move() {
        for (let ball of balls) {
            ball.position.x -= ball.velocity.x;
            ball.position.y += ball.velocity.y;
            ball.position.x = (ball.position.x + window.innerWidth) % window.innerWidth;
            ball.position.y = (ball.position.y + window.innerHeight) % window.innerHeight;
            ball.element.style.transform = "matrix(20, 0, 0, 20, " + ball.position.x + ", " + ball.position.y;
        }
        setTimeout(move, 16);
    }
})(Ballz || (Ballz = {}));
