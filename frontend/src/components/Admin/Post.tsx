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
  image: string[];
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
        "http://localhost:8000/posts/fetchPosts"
      );
      setPosts(data);
    };
    getAllPosts();
  }, []);

  console.log(posts, "postsposts");
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
              <TableHead>Username</TableHead>
              <TableHead>Content</TableHead>
              <TableHead>CreatedAt</TableHead>
              <TableHead className="text-left">UpdatedAt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts
              // .filter((post) =>
              //   post.userId.email
              //     .toLocaleLowerCase()
              //     .includes(inputValue.toLocaleLowerCase())
              // )
              .map((posts, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{i + 1}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {/* <img
                          src={posts.image?.[0]}
                          alt="profile"
                          className="w-8 h-8 rounded-full"
                        /> */}
                        <p>{posts.userId.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>{posts.userId.username}</TableCell>
                    <TableCell>{posts.content}</TableCell>
                    <TableCell>{posts.createdAt}</TableCell>
                    <TableCell>{posts.updatedAt}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
