"use client";
import React, {useState} from "react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { z } from "zod";
import { createChaptersSchema } from "@/validators/course";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Plus, Trash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { set } from "date-fns";

type Props = {};

type Input = z.infer<typeof createChaptersSchema>;

const CreateCourseForm = (props: Props) => {
  const [video, setVideo] = useState();

	const getYtData = async (video: string) => {
		const res = await axios.post("/api/course/createChapters", {
			title: video,
		});
		const id = res.data.op;

    if (id) {
      toast({
        title: "Success",
        description: "Course created successfully",
      });
      router.push(`/course/${id}`);
    } else {
      console.error("Error");
        toast({
          title: "Error",
          description: "Something went wrong",
          variant: "destructive",
        });
    }
	};
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<Input>({
    resolver: zodResolver(createChaptersSchema),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit({title}: Input) {
    setIsLoading(true);
    await getYtData(title);
    setIsLoading(false);
  }

  form.watch();

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => {
              return (
                <FormItem className="flex flex-col items-start w-full sm:items-center sm:flex-row">
                  <FormLabel className="flex-[1] text-xl">Title</FormLabel>
                  <FormControl className="flex-[6]">
                    <Input
                      placeholder="Enter the main topic of the course"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <Button
            disabled={isLoading}
            type="submit"
            className="w-full mt-6"
            size="lg"
          >
            Lets Go!
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCourseForm;