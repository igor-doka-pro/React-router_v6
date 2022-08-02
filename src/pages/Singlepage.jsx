import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export const Singlepage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', {replace: true})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then(setPost);
  }, [id]);

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <button onClick={goHome}>Go Home</button>
      {post && (
        <li>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </li>
      )}
    </div>
  );
};
