namespace Ballz {
    type Vector = { x: number, y: number };

    type Ball = {
        element: HTMLSpanElement,
        position: Vector,
        velocity: Vector,
    }

    window.addEventListener("load", hndLoad);
    let balls: Ball[] = [];
    let timePreviousFrame: number = Date.now();
    document.body.addEventListener

    function hndLoad(): void {
        for (let i: number = 0; i<100; i++) {
            let newBall: Ball = {
                element: document.createElement("span"),
                position: { 
                    x: Math.random()*window.innerWidth,
                    y: Math.random()*window.innerHeight,
                },
                velocity: { 
                    x:(Math.random()-0.5)*20,
                    y:(Math.random()-0.5)*20,
                },
            }
            document.body.appendChild(newBall.element);
            balls.push(newBall);
        }
        move();
    }


    function move(): void {
        const timeCurrent: number = Date.now(); 
        let timeDelta: number = timeCurrent - timePreviousFrame;
        timeDelta/=50;
        for (let ball of balls) {
            ball.position.x -= ball.velocity.x*timeDelta;
            ball.position.y += ball.velocity.y*timeDelta;

            ball.position.x = (ball.position.x + window.innerWidth) % window.innerWidth;
            ball.position.y = (ball.position.y + window.innerHeight) % window.innerHeight;

            ball.element.style.transform = "matrix(20, 0, 0, 20, " + ball.position.x + ", " + ball.position.y;
        }
        timePreviousFrame = timeCurrent;
        requestAnimationFrame(move);
    }


}