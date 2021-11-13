import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="container text-center">
      <h1 className="display-5 my-4">About Us</h1>
      <div className="container about">
        <p>Has this ever happened to you:</p>
        <p>
          {" "}
          You're scrolling through your favorite social network, you see
          something interesting, and just before you hit like, you see that it
          was posted by some anoying high-school friend or some relative you're
          barely talking to? (I know, right!). So, you keep scrolling...
        </p>
        <p>Or</p>
        <p>
          You just saw another post you like but it has only 2 likes and you
          think "It's probably not that good since it has only 2 likes". So
          again, you keep scrolling...
        </p>
        <p className="mt-5">
          On Like Roulette, you won't even know who created the post before you
          like it. That way, the only thing that will decide whether you like
          the post or not will be its content. Once you like the post, you'll be
          able to see who posted it and who liked it.
        </p>
      </div>
    </div>
  );
}
