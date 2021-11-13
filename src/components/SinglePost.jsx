import React from "react";
// import yin from '../img/posts/yin.jpg'
import { useState } from "react";
import "./SinglePost.css";
import Posts from "../Data.json";
import Users from "../Users.json";
import LikesModal from "./LikesModal";
import { Link, BrowserRouter as Router } from "react-router-dom";

const SinglePost = (props) => {
  const [liked, setLiked] = useState(false);
  const likers = Posts.find((post) => post.image === props.image).totalLikes;
  const me = Users.find((user) => user.userId === "0");
  console.log(me);
  const likerImages = [
    Users.find((user) => user.username === likers[0]).avatar,
    Users.find((user) => user.username === likers[1]).avatar,
  ];
  // console.log(likerImages);

  // console.log(likers);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="container-sm">
      <div
        className="card mx-auto my-2"
        key={props.id}
        style={{ width: "20rem" }}
      >
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className={`card-body ${liked ? "expand" : ""}`}>
          <i
            className={`bi bi-heart${liked ? "-fill" : ""}`}
            onClick={() =>
              !liked
                ? setLiked(true)
                : alert("You can't unlike the posts once you liked them!")
            }
          ></i>
          {!liked && (
            <span className="textLikeThis">
              Like to see how many people liked this post
            </span>
          )}
          {liked && (
            <>
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
                by:{" "}
                <Router>
                  <a className="link" href={`/user/${props.body}/`}>
                    {props.body}
                  </a>
                </Router>
              </p>
              <div className="text-muted">
                <div className="likeImgContainer">
                  <img className="likeImg one" src={me.avatar} alt="" />

                  {likerImages[0] && (
                    <img className="likeImg two" src={likerImages[0]} alt="" />
                  )}
                  {likerImages[1] && (
                    <img
                      className="likeImg three"
                      src={likerImages[1]}
                      alt=""
                    />
                  )}
                </div>{" "}
                <div className="likesCounter">
                  You and{" "}
                  <span className="link" onClick={() => setModalShow(true)}>
                    {props.totalLikes.length} others
                  </span>{" "}
                  like this
                </div>
                <LikesModal
                  data={likers}
                  me={me}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
