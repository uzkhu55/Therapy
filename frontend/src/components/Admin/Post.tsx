"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import SearchInput from "./SearchInput";

type PostsData = {
  authId: string;
  createdAt: string;
  email: string;
  image: string;
  isSpecialist: false;
  updatedAt: string;
  userId: userDataType;
  content: string;
  _id: string;
  username: string;
};

type userDataType = {
  _id: string;
  username: string;
  authId: string;
  email: string;
  image: string[];
  isSpecialist: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export const AdminAllPost = () => {
  const [posts, setPosts] = useState<PostsData[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const getAllPosts = async () => {
      const { data } = await axios.get(
        "https://if-project8.onrender.com/posts/fetchPosts"
      );
      setPosts(data);
      console.log(data);
    };

    getAllPosts();
  }, []);

  return (
    <div className="flex flex-col w-full gap-10">
      <div className="flex w-[600px] flex-row-reverse">
        <SearchInput setInputValue={setInputValue} />
      </div>
      <div className="flex w-full pl-10 pt-5 bg-gray-50 rounded-xl flex-col gap-3">
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>CreatedAt</TableHead>
              <TableHead className="text-left">UpdatedAt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts
              .filter(
                (post) =>
                  !inputValue ||
                  (post.userId &&
                    post.userId.email
                      .toLowerCase()
                      .includes(inputValue.toLowerCase()))
              )
              .map((post, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell className="font-medium">
                    {post.userId?.email || "No Email"}
                  </TableCell>

                  <TableCell>
                    <div className="flex items-center gap-2">
                      {post.image?.[0] && (
                        <img
                          src={post.image}
                          alt="profile"
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                    </div>
                  </TableCell>

                  <TableCell>{post.userId?.username || "Unknown"}</TableCell>
                  <TableCell>{post.content}</TableCell>
                  <TableCell>{post.createdAt}</TableCell>
                  <TableCell>{post.updatedAt}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
