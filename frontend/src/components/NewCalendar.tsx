import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "react-toastify";
import PaymentQRCode from "./PaymentQR";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date is required.",
  }),
  time: z.string().optional(),
});

export function NewCalendar() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // Log the date and time
    console.log("Selected Date:", data.dob);
    console.log("Selected Time:", data.time);

    toast.success("Form Submitted");
    form.reset(); // Optionally reset form after submission
  }

  const selectedDate = form.watch("dob");
  const selectedTime = form.watch("time"); // Watch the time field

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Choose a date</FormLabel>
              <Popover
                open={isCalendarOpen}
                onOpenChange={setIsCalendarOpen} // Control popover state
              >
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                      onClick={() => setIsCalendarOpen(true)} // Open calendar on button click
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date); // Update the selected date
                      setIsCalendarOpen(false); // Close the calendar
                    }}
                    disabled={(date) =>
                      date > new Date("2030-12-31") || date < new Date()
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date is used to schedule the time.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {selectedDate && (
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Select Time</FormLabel>
                <FormControl>
                  <input
                    type="time"
                    {...field}
                    value={field.value || ""} // Ensure it's always controlled
                    className="w-[240px] rounded-md border border-gray-300 p-2 text-gray-900 focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {selectedDate && selectedTime && <PaymentQRCode />}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
