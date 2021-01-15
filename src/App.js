import React, { useEffect, useState, useRef } from "react";

function App() {
  const [upward, setupward] = useState(70);
  const [hori, sethori] = useState(70);
  const [bullet, setbullet] = useState(0);
  const [bulletright, setbulletright] = useState(0);
  const [bulletleft, setbulletleft] = useState(0);

  // useEffect(() => {
  //   ref1.focus();
  // }, []);
  const ref1 = useRef();
  const Move = (e) => {
    console.log(e);
    if (e.key == "w") {
      console.log("move forward");
      setupward(upward - 5);
    }
    if (e.key == "s") {
      console.log("move down");
      setupward(upward + 5);
    }

    if (e.key == "a") {
      console.log("move left");
      sethori(hori - 5);
    }

    if (e.key == "d") {
      console.log("move right");
      sethori(hori + 5);
    }

    if (e.key == "e") {
      // console.log("eee");
      // setbullet(bullet - 5);
      // while (bullet < 10) setbullet(bullet - 1);
      // console.log(bullet);

      for (let i = 0; i < 999; i++) {
        setTimeout(() => {
          setbullet(bullet - i);
          console.log(ref1.current.style);
        }, 200);
      }
    }

    if (e.key == "r") {
      // setbulletright(bulletright - 5);
      for (let i = 0; i < 999; i++) {
        setTimeout(() => {
          setbulletright(bulletright - i);
        }, 200);
      }
    }

    if (e.key == "q") {
      // setbulletright(bulletright - 5);
      for (let i = 0; i < 999; i++) {
        setTimeout(() => {
          setbulletleft(bulletleft - i);
        }, 200);
      }
    }
  };

  // const fire = (e) => {
  //   console.log(e);
  //   if (e.key == "e") {
  //     console.log("fire");
  //   }
  // };
  return (
    <div className="App">
      <div
        tabIndex="0"
        className="box1"
        style={{
          top: `${upward}px`,
          bottom: `${upward}px`,
          left: `${hori}px`,
          right: `${hori}px`,
        }}
        onKeyPress={Move}>
        <div className="bullet-container">
          <div
            ref={ref1}
            className="bullet"
            style={{ top: `${bullet}px` }}></div>
          <div
            className="bulletright"
            style={{ right: `${bulletright}px` }}></div>

          <div className="bulletleft" style={{ left: `${bulletleft}px` }}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
