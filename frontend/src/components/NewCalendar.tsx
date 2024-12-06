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
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
const FormSchema = z.object({
  dob: z.date({
    required_error: "A date is required.",
  }),
  time: z.string().optional(),
});

type NewCalendarProps = {
  specialist: { authId: string; email: string; username: string };
};

export const NewCalendar = ({ specialist }: NewCalendarProps) => {
  const { user } = useUser();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    appointment(data);
    form.reset();
  };

  const selectedDate = form.watch("dob");

  // Format the date to "YYYY-MM-DD"
  const formattedDate = new Date(selectedDate).toLocaleDateString("en-CA"); // 'en-CA' is the format YYYY-MM-DD

  const selectedTime = form.watch("time");

  const appointment = async (data: z.infer<typeof FormSchema>) => {
    try {
      const response = await axios.post(
        "https://if-project8.onrender.com/user/appointment",
        {
          date: formattedDate,
          time: selectedTime,
          idOne: user?.id,
          idTwo: specialist.authId,
        }
      );
      try {
        await axios.post("https://if-project8.onrender.com/user/mail", {
          sendEmail: specialist.email,
          subject: "Цаг захиалга",
          html: `<!DOCTYPE html>
<html lang="mn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Эмчилгээний Уулзалтын Баталгаажуулалт</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
    </style>
  </head>
  <body style="font-family: 'Roboto', Helvetica, Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; margin: 0; padding: 0;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <tr>
        <td style="padding: 40px 30px; text-align: center; background-color: #6b8e23;">
          <h1 style="color: #ffffff; font-size: 28px; margin: 0;">Эмчилгээний Уулзалтын Баталгаажуулалт</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: 40px 30px;">
          <h2 style="color: #333333; font-size: 24px; margin-top: 0;">Захиалга!</h2>
          <p style="color: #666666; font-size: 16px;">
            Эмчилгээний уулзалт захиалсан байна. Сэтгэл санааны эдгэрэлтийг эрэлхийлэх энэ алхамыг хийсэнд бид маш их талархаж байна.
          </p>
          <p style="color: #666666; font-size: 16px;">
            Энэ бол өөртөө анхаарал тавих чухал мөч бөгөөд бид танд энэ аялалд хамтран оролцож байгаадаа баяртай байна. Бид таныг энэ замд бүрэн дэмжих болно.
          </p>

          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 30px; margin-bottom: 30px;">
            <tr>
              <td align="center">
                <img src="https://media.npr.org/assets/img/2023/07/02/gettyimages-1383880527-170667a1_wide-5a923c89b466b78b15df4d5747c35518ba0d681c.jpg?s=1400&c=100&f=jpeg" alt="Эмч" style="width: 400px; height: 400px; object-fit: cover; border-radius: 8px;" />
              </td>
            </tr>
          </table>

          <div class="font-medium text-lg text-[#6b8e23] flex flex-col gap-2">
            <div class="w-[400px] text-xl font-semibold text-[#333333]">
              Таны Эмчилгээний Үзүүлэлт:
            </div>
            <p class="text-sm text-[#666666]">
              <strong class="text-[#6b8e23]">Уулзалтын Огноо:</strong> ${formattedDate}
            </p>
            <p class="text-sm text-[#666666]">
              <strong class="text-[#6b8e23]">Уулзалтын Цаг:</strong> ${selectedTime}
            </p>
          </div>

          <div style="font-size: 16px; color: #6b8e23; font-weight: bold; display: flex; flex-direction: column; gap: 4px;">
            Таны Сонгосон Эмч:
            <p style="margin: 0; color: #666666;">Үйлчлүүлэгчийн нэр: ${user?.username}</p>
          </div>

          <p style="color: #666666; font-size: 16px;">
            Хэрэв танд асуулт байвал эсвэл уулзалтыг өөрчлөх шаардлагатай бол бидэнтэй холбогдоно уу. Бид үргэлж туслахад бэлэн байна.
          </p>
          <p style="color: #666666; font-size: 16px;">
            <strong style="color: #6b8e23;">Холбогдох Мэдээлэл: [9580****]</strong>
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding: 30px; text-align: center; background-color: #eeeeee;">
          <p style="color: #888888; font-size: 14px; margin: 0;">
            Биднийг сонгосонд баярлалаа. Таны сэтгэл санааны эдгэрэлтийн аялалд хамтран оролцох нь бидний нэр төрийн хэрэг юм.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
        });

        toast.success(
          "Appointment scheduled successfully! and Email sent to the Therapist"
        );
      } catch (err) {
        toast.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error scheduling appointment:", error);
      toast.error("Failed to schedule appointment. Please try again.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-12"
      >
        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Choose a date</FormLabel>
              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                      onClick={() => setIsCalendarOpen(true)}
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
                      field.onChange(date);
                      setIsCalendarOpen(false);
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
                    value={field.value || ""}
                    className="w-[240px] rounded-md border border-gray-300 p-2 text-gray-900 focus:ring-2 focus:ring-blue-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
