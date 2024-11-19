"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
import { log } from "console";
import { useEffect, useState } from "react";

type SpecialistData = {
  authId: string;
  createdAt: string;
  email: string;
  image: string[];
  isSpecialist: false;
  updatedAt: string;
  username: string;
  _id: string;
};

const Specialist = () => {
  const [specialist, setSpecialist] = useState<SpecialistData[]>([]);

  const getSpecialist = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/user/getSpecialists"
      );
      setSpecialist(data);
    } catch (error) {
      console.log("error fetching datd", error);
    }
  };
  console.log(specialist);

  useEffect(() => {
    getSpecialist();
  }, []);
  return (
    <div className="flex w-full pl-10 pt-5 bg-gray-50 rounded-xl flex-col gap-3">
      <Table>
        <TableCaption> </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Username</TableHead>
            <TableHead className="text-left">Огноо</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {specialist.map((specialist, i) => {
            return (
              <TableRow key={i}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <img
                      src={specialist.image[0]}
                      alt="profile"
                      className="w-8 h-8 rounded-full"
                    />
                    <p> {specialist.email}</p>
                  </div>
                </TableCell>
                <TableCell>{specialist.username}</TableCell>
                <TableCell>{specialist.createdAt}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Specialist;
