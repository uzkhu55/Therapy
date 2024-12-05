"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";

type ClientData = {
  authId: string;
  createdAt: string;
  email: string;
  image: string;
  isSpecialist: false;
  updatedAt: string;
  username: string;
  _id: string;
};

const Clients = () => {
  const [clients, setClients] = useState<ClientData[]>([]);

  useEffect(() => {
    const getClients = async () => {
      try {
        const { data } = await axios.get(
          "https://if-project8.onrender.com/user/getClients"
        );
        setClients(data);
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    getClients();
  }, []);

  return (
    <div className="flex w-full pl-10 pt-5 bg-gray-50 rounded-xl flex-col gap-3">
      {/* <div className="flex text-xl font-bold items-center ">Clients</div>
      <div className="flex flex-row gap-20">
        <div>id</div>
        <div>Email</div>
        <div>Статус</div>
        <div>Огноо</div>
      </div>
      <div className="flex border-b"></div>
      <div className="flex flex-row"> </div> */}
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Username</TableHead>
            <TableHead className="text-left">CreatedAt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client, i) => {
            return (
              <TableRow key={i}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img
                      src={client.image}
                      alt="profile"
                      className="w-8 h-8 rounded-full"
                    />
                    <p>{client.email}</p>
                  </div>
                </TableCell>
                <TableCell>{client.username}</TableCell>
                <TableCell>{client.createdAt}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default Clients;
