import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import Users from "../Users.json";
import "./LikeModal.css";
import { Link, BrowserRouter } from "react-router-dom";
// import { Modal, Button } from "bootstrap";
// import { me } from "../context";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

// Users.find((user) => user.username === "ademkoca").avatar;

const LikesModal = (props) => {
  var avatar = [];
  for (let i = 0; i < props.data.length; i++) {
    avatar.push(Users.find((user) => user.username === props.data[i]).avatar);
    // console.log(avatar);
  }
  const me = (
    <p className="likesRow">
      <img className="profileLikesImg" src={PF + props.me.avatar} alt="" />
      <span className="profileLikes">{props.me.username}</span>
    </p>
  );

  var likelist = [me];
  for (let i = 0; i < props.data.length; i++) {
    likelist.push(
      <p className="likesRow">
        <div>
          <img
            className="profileLikesImg"
            src={PF + avatar[i]}
            alt={props.data[i]}
          />
          <BrowserRouter>
            <a className="modalLink" href={`/user/${props.data[i]}/`}>
              <span className="profileLikes">{props.data[i]}</span>
            </a>
          </BrowserRouter>
        </div>
        <button type="button" className="btn btn-sm btn-primary">
          Follow
        </button>
      </p>
    );
  }
  // console.log(likelist);
  // console.log(avatar);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable={true}
      key={props.me.id}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Likes</Modal.Title>
      </Modal.Header>
      <Modal.Body>{likelist}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LikesModal;
