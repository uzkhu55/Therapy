"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./homePage/Header";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "./ui/button";
import { NewCalendar } from "./NewCalendar";
import TherapistDescription from "@/components/TherapistDescription";

interface TheraDetail {
  authId: string;
  expectations?: string;
  form?: boolean;
  description?: string;
  [key: string]: any;
}

export interface Specialist {
  authId: string;
  username: string;
  theraDetail: TheraDetail | null;
  name: string;
  description: string;
}

const Therapist = () => {
  const [data, setData] = useState<Specialist[]>([]);
  const { user } = useUser();
  const [selectedSpecialist, setSelectedSpecialist] =
    useState<Specialist | null>(null);
  console.log(selectedSpecialist);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://if-project8.onrender.com/user/getSpecialists"
        );
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="mt-[80px] flex">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px] text-center">Зураг</TableHead>
              <TableHead className="w-[200px] text-center">
                Сэтгэл зүйчийн төрөл
              </TableHead>
              <TableHead className="w-[200px] text-center">Байршил</TableHead>
              <TableHead className="w-[200px] text-center">
                Эмч Дэлгэрэнгүй
              </TableHead>
              <TableHead className="w-[200px] text-center">Захиалга</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((specialist) => (
              <TableRow key={specialist.authId}>
                <TableCell className="flex justify-center">
                  <img
                    src={user?.imageUrl || "/default-avatar.png"}
                    alt="User Profile"
                    className="rounded-full w-16 h-16"
                  />
                </TableCell>
                <TableCell className="font-medium text-center">
                  {specialist.username || "Unknown"}
                </TableCell>
                <TableCell className="text-center font-medium">
                  {specialist.theraDetail?.expectations || "No data available"}
                </TableCell>
                <TableCell className="text-center font-medium">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="text-black bg-white border-2 border-black hover:bg-black hover:text-white"
                        onClick={() => setSelectedSpecialist(specialist)}
                      >
                        Тайлбар
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-[1900px] h-[900px]">
                      <DialogHeader>
                        <VisuallyHidden>
                          <DialogTitle>Терапевтын Тайлбар</DialogTitle>
                        </VisuallyHidden>
                      </DialogHeader>
                      <TherapistDescription
                        selectedSpecialist={selectedSpecialist}
                      />
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell className="text-center font-medium">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="text-black bg-white border-2 border-black hover:bg-black hover:text-white">
                        Дэлгэрэнгүй
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <VisuallyHidden>
                          <DialogTitle>Сэтгэл зүйчийн дэлгэрэнгүй</DialogTitle>
                        </VisuallyHidden>
                      </DialogHeader>
                      <div>
                        <div>
                          <img
                            src={user?.imageUrl || "/default-avatar.png"}
                            alt="User Profile"
                            className="rounded-full w-16 h-16"
                          />
                          <div>{specialist.username}</div>
                          <div>
                            {specialist.theraDetail?.description ||
                              "No description available."}
                          </div>
                        </div>
                        <NewCalendar />
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Therapist;
