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

// Define the client data type
type ClientData = {
  authId: string;
  createdAt: string;
  email: string;
  image: string;
  isSpecialist: boolean;
  updatedAt: string;
  username: string;
  _id: string;
};

const Clients = () => {
  const [clients, setClients] = useState<ClientData[]>([]);
  const [roles, setRoles] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const getClients = async () => {
      try {
        const { data } = await axios.get(
          "https://if-project8.onrender.com/user/getClients"
        );
        setClients(data);
        // Initialize roles state
        const initialRoles = data.reduce(
          (acc: { [key: string]: string }, client: ClientData) => {
            acc[client._id] = "Client"; // Default to "Client"
            return acc;
          },
          {}
        );
        setRoles(initialRoles);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    getClients();
  }, []);

  const handleRoleChange = (id: string, newRole: string) => {
    setRoles((prev) => ({ ...prev, [id]: newRole }));
  };

  return (
    <div className="flex w-full pl-10 pt-5 bg-gray-50 rounded-xl flex-col gap-3">
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Username</TableHead>
            <TableHead className="text-left">Role</TableHead>
            <TableHead className="text-left">CreatedAt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client, i) => (
            <TableRow key={client._id}>
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
              <TableCell>
                <select
                  value={roles[client._id]}
                  onChange={(e) => handleRoleChange(client._id, e.target.value)}
                  className="border p-1 rounded"
                >
                  <option value="Client">Client</option>
                  <option value="Admin">Specialist</option>
                </select>
              </TableCell>
              <TableCell>{client.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Clients;
