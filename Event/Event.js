"use strict";
var Ballz;
(function (Ballz) {
    window.addEventListener("load", hndLoad);
    let balls = [];
    let timePreviousFrame = Date.now();
    let ballIdCounter = 0;
    function hndLoad() {
        for (let i = 0; i < 100; i++) {
            let newBall = {
                element: document.createElement("span"),
                position: {
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                },
                velocity: {
                    x: (Math.random() - 0.5) * 20,
                    y: (Math.random() - 0.5) * 20,
                },
                id: ballIdCounter++,
            };
            document.body.appendChild(newBall.element);
            balls.push(newBall);
            requestAnimationFrame(update);
        }
        update();
    }
    function onClick(_event) {
        let target = _event.target;
        if (target.tagName.toLowerCase() == "span" && target.dataset.ballId) {
            const clickedBallId = parseInt(target.dataset.ballId);
            if (target.parentNode) {
                target.parentNode.removeChild(target);
            }
            const index = balls.findIndex(ball => ball.id == clickedBallId);
            if (index > -1) {
                balls.splice(index, 1);
            }
        }
    }
    function checkCollitionAll() {
        for (const a in balls) {
            for (let b = Number(a) + 1; b < balls.length; b++)
                ;
        }
    }
    function update() {
        const timeCurrent = Date.now();
        let timeDelta = timeCurrent - timePreviousFrame;
        timeDelta /= 50;
        move(timeDelta);
        checkCollitionAll();
        timePreviousFrame = timeCurrent;
        requestAnimationFrame(update);
    }
    function move(_timeDelta) {
        window.addEventListener("mousedown", onClick);
        for (let ball of balls) {
            ball.position.x -= ball.velocity.x * _timeDelta;
            ball.position.y += ball.velocity.y * _timeDelta;
            ball.position.x = (ball.position.x + window.innerWidth) % window.innerWidth;
            ball.position.y = (ball.position.y + window.innerHeight) % window.innerHeight;
            ball.element.style.transform = "matrix(20, 0, 0, 20, " + ball.position.x + ", " + ball.position.y;
        }
    }
})(Ballz || (Ballz = {}));
