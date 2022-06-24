import React from "react";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
  };

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Title..."
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <button>Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
