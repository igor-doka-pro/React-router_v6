import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Blogfilter } from "../components/Blogfilter";

export const Blogpage = () => {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';

  const latest = searchParams.has('latest');
  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then(setPosts);
  }, []);

  return (
    <div>
      <h1>Our news</h1>
      <Blogfilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />
      <Link to='/posts/new'>Add New Post</Link>
      <div>
        {posts.filter(
          ({ title, id }) => title.includes(postQuery) && id >= startsFrom
        )
        .map(({ id, title }) => (
          <Link key={id} to={`/posts/${id}`}>
            <li>
              <h3>{title}</h3>
            </li>
          </Link>
        ))}
      </div>
    </div>
  );
};
