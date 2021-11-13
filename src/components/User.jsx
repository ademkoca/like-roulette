import React, { useContext, useState } from "react";
import Users from "../Users.json";
import Data from "../Data.json";
import { useParams } from "react-router-dom";
import "./User.css";
import { UsernameContext } from "../context";
import LikesModal from "./LikesModal";
import SinglePost from "./SinglePost";

const User = (props) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [posts, setPosts] = useState([]);
  const { username } = useParams();
  const me = useContext(UsernameContext);
  // console.log(me);

  //   const me = Users.find((user) => user.userId === "0");
  //   const likerImages = [
  //     Users.find((user) => user.username === likers[0]).avatar,
  //     Users.find((user) => user.username === likers[1]).avatar,
  //   ];

  //   console.log(Data.filter((post) => post.body === username));
  //   const userName = Users.find((user) => user.use === id).username;
  //   console.log(userName);
  //   console.log(username);
  const userPosts = Data.filter((post) => post.body === username);
  console.log(userPosts);
  const [modalShow, setModalShow] = useState(false);
  //   setPosts(userPosts);
  //   console.log(userPosts);
  //   console.log(userPosts);
  userPosts.forEach((post) =>
    console
      .log
      //   Users.find((user) => user.username === item.totalLikes[0]).avatar
      ()
  );
  return (
    <div className="userProfile">
      <div className="ProfileTitle">
        <img
          className="ProfileImg"
          src={PF + `img/users/${username}.jpg`}
          alt=""
        />
        {userPosts.length > 0 && (
          <h1 className="display-6">Posts by {username} that you liked</h1>
        )}
        {userPosts.length === 0 && (
          <h1 className="display-6">
            You haven't liked any of {username}'s posts yet
          </h1>
        )}
      </div>

      {userPosts.map((item) => (
        <div class="card mx-auto my-2" style={{ width: "20rem" }}>
          <img
            src={PF + item.image}
            className="card-img-top"
            alt={item.title}
          />
          <div class="card-body expand">
            <h5 class="card-title">{item.title}</h5>
            <p class="card-text">
              <a href={`/user/${item.body}`}>by: {item.body}</a>
            </p>
            <div class="text-muted">
              <div className="likeImgContainer">
                <img className="likeImg one" src={PF + me.avatar} alt="" />
                <img
                  className="likeImg two"
                  src={
                    PF +
                    Users.find((user) => user.username === item.totalLikes[0])
                      .avatar
                  }
                  alt=""
                />
                <img
                  className="likeImg three"
                  src={
                    PF +
                    Users.find((user) => user.username === item.totalLikes[1])
                      .avatar
                  }
                  alt=""
                />
              </div>
              <div class="likesCounter profile">
                You and{" "}
                <span className="link" onClick={() => setModalShow(true)}>
                  {item.totalLikes.length} others like this
                </span>{" "}
              </div>
            </div>
            <LikesModal
              key={item.totalLikes.length}
              data={item.totalLikes}
              me={me}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
