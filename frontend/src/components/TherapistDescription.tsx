import { Home, Calendar, Settings, HelpCircle, LogOut } from "lucide-react";
import * as React from "react";
import { Users } from "lucide-react";
import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useUser } from "@clerk/clerk-react";
import Link from "next/link";
import { NewCalendar } from "./NewCalendar";
import { Specialist } from "./Therapist";

const ecgData = Array(100)
  .fill(0)
  .map((_, i) => ({ value: Math.sin(i / 10) * Math.random() * 10 + 70 }));

const systolicData = [
  { name: "0-89", value: 20 },
  { name: "90-119", value: 35 },
  { name: "120-139", value: 53 },
  { name: "140+", value: 60 },
  { name: "140+", value: 20 },
  { name: "140+", value: 80 },
  { name: "140+", value: 40 },
];
interface TherapistDescriptionProps {
  selectedSpecialist?: Specialist | null;
  specialist: { authId: string; email: string; username: string };
}
interface ChatButtonProps {
  selectedSpecialist: { username: string; userId: string };
}

const TherapistDescription: React.FC<TherapistDescriptionProps> = ({
  selectedSpecialist,
  specialist,
}) => {
  const { user } = useUser();
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isDetailsOpen, setDetailsOpen] = useState(false);

  const openDescriptionModal = () => {
    setDescriptionOpen(true);
    setDetailsOpen(false);
  };

  const openDetailsModal = () => {
    setDetailsOpen(true);
    setDescriptionOpen(false);
  };

  return (
    <div className="flex flex-col justify-center items-center absolute w-screen h-full">
      <div className="flex gap-24 items-center">
        <img
          src={user?.imageUrl || "/default-avatar.png"}
          alt="User Profile"
          className="rounded-full w-[150px] h-[150px]"
        />
        <section className="p-6">
          <h3 className="text-2xl font-semibold">
            {selectedSpecialist?.username || "Нэр байхгүй"}
          </h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>Sex: Male</div>
            <div>Age: 32</div>
            <div>Blood: B+</div>
            <div>Dept: Cardiology</div>
            <div>Check-in: 24 Feb, 2020</div>
            <div>Bed #: 0747</div>
          </div>
        </section>
        <Link href={`/chat?username=${selectedSpecialist?.username}`}>
          <Button>Чатаар холбогдох</Button>
        </Link>
        {/* <Dialog open={isDetailsOpen} onOpenChange={setDetailsOpen}>
          <DialogTrigger asChild>
            <Button onClick={openDetailsModal}>Цаг захиалах</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle></DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center">
                <img
                  src={user?.imageUrl || "/default-avatar.png"}
                  alt="User Profile"
                  className="rounded-full w-16 h-16"
                />
                <div>{user?.username}</div>
                <NewCalendar specialist={specialist} />
              </div>
            </div>
          </DialogContent>
        </Dialog> */}
      </div>
      <main className="p-6">
        <div className="flex  gap-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Patients
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">
                  +5% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  New Patients
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">
                  +10% from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Appointments
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">For today</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle className="text-center">
                  Өмнөх 7 Хоногийн үзлэг
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={systolicData}>
                    <Bar dataKey="value" fill="#" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Patients</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-[80px]">
                  {["Alice Johnson", "Bob Smith", "Carol Williams"].map(
                    (name) => (
                      <div key={name} className="flex items-center">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src="/placeholder.svg" alt={name} />
                          <AvatarFallback>{name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            {name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {Math.floor(Math.random() * 50) + 20} years old
                          </p>
                        </div>
                        <div className="ml-auto font-medium">
                          {
                            ["Cardiology", "Neurology", "Orthopedics"][
                              Math.floor(Math.random() * 3)
                            ]
                          }
                        </div>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          <Card className="">
            <div className="grid grid-cols-1 gap-6">
              {[
                { label: "SYS", value: "123", unit: "mmHg" },
                { label: "DIA", value: "79", unit: "mmHg" },
                { label: "Pulse", value: "122", unit: "BPM" },
                { label: "Weight", value: "80.0", unit: "kgs" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-lg p-4 rounded-lg flex flex-col items-center"
                >
                  <h4 className="text-lg font-bold">{stat.label}</h4>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <span className="text-sm text-gray-500">{stat.unit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};
export default TherapistDescription;
