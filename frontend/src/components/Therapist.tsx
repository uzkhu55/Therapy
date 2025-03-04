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
  year: string;
}

export interface Specialist {
  image: string;
  email: string;
  authId: string;
  username: string;
  theraDetail: TheraDetail;
  name: string;
  zuvluguu: string;
  description: string;
  year: string;
}

const Therapist = () => {
  const [data, setData] = useState<Specialist[]>([]);
  const { user } = useUser();
  const [selectedSpecialist, setSelectedSpecialist] =
    useState<Specialist | null>(null);

  const [test, setTest] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://if-project8.onrender.com/user/getSpecialists"
        );

        setData(res.data);
        console.log(res);
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
              <TableHead className="w-[200px] text-center">
                Ажиллаж байгаа жил
              </TableHead>
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
                    src={specialist.image}
                    alt="User Profile"
                    className="rounded-full w-16 h-16"
                  />
                </TableCell>
                <TableCell className="font-medium text-center">
                  {specialist.theraDetail?.zuvluguu || "Unknown"}
                </TableCell>
                <TableCell className="text-center font-medium">
                  {specialist.theraDetail?.year || "No data available"}
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
                        specialist={specialist}
                        selectedSpecialist={selectedSpecialist}
                      />
                    </DialogContent>
                  </Dialog>
                </TableCell>
                <TableCell className="text-center font-medium">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => setTest(specialist)}
                        className="text-black bg-white border-2 border-black hover:bg-black hover:text-white"
                      >
                        Цаг захиалга
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <VisuallyHidden>
                          <DialogTitle>Сэтгэл зүйчийн дэлгэрэнгүй</DialogTitle>
                        </VisuallyHidden>
                      </DialogHeader>
                      <div className="flex  flex-col items-center">
                        <div className="flex items-center mb-12  gap-12 flex-col">
                          <img
                            src={specialist.image}
                            alt="User Profile"
                            className="rounded-full w-16 h-16"
                          />
                          <div className="font-bold">{specialist.username}</div>
                        </div>
                        <NewCalendar specialist={specialist} />
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
