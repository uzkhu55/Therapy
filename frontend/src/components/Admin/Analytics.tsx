"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", Client: 186, Specialist: 80 },
  { month: "February", Client: 305, Specialist: 200 },
  { month: "March", Client: 237, Specialist: 120 },
  { month: "April", Client: 73, Specialist: 190 },
  { month: "May", Client: 209, Specialist: 130 },
  { month: "June", Client: 214, Specialist: 140 },
];

const chartConfig = {
  desktop: {
    label: "Client",
    color: "#2563eb",
  },
  mobile: {
    label: "Specialist",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const Analytics = () => {
  return (
    // <div className="flexflex w-full pl-10 pt-5 bg-gray-50 rounded-xl flex-col gap-3">
    //   <div className="flex ">Analyticsfvfv</div>
    // </div>
    <div className="flex">
      <ChartContainer config={chartConfig} className="min-h-[500px] w-full ">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default Analytics;
