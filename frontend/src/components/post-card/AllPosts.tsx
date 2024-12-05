"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Post } from "./Post";
import { LoadingComponent } from "../LoadingComponent";

export const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://localhost:8000/posts/fetchPosts"
        );
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <div className="flex flex-col gap-4 mb-7">
      {posts.map((post, i) => {
        return <Post post={post} key={i} />;
      })}
    </div>
  );
};
