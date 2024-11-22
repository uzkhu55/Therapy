"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", client: 186, Specialist: 80 },
  { month: "February", client: 305, Specialist: 200 },
  { month: "March", client: 237, Specialist: 120 },
  { month: "April", client: 73, Specialist: 190 },
  { month: "May", client: 209, Specialist: 130 },
  { month: "June", client: 214, Specialist: 140 },
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
    <div className="flexflex w-[900px] pl-10 pt-5 bg-gray-50 rounded-xl flex-col gap-3">
      <ChartContainer config={chartConfig} className="h-[500px] w-[800px]">
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
          <Bar dataKey="client" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="Specialist" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};
export default Analytics;
