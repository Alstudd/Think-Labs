import { getAuthSession } from "@/lib/nextauth";
import React from "react";
import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";
import CreateCourseForm from "@/components/CreateCourseForm";
import Navbar from "@/components/Navbar";
import Image from "next/image";

type Props = {};

const CreatePage = async (props: Props) => {
    // const session = await getAuthSession();
    // if (!session?.user) {
    //     return redirect("/gallery");
    // }
    return (
        <div className="pt-20">
            {/* <Navbar /> */}
            <div className="w-[80%] mx-auto flex flex-row gap-16 my-16">
            <div className=""><Image height={400} width={400} className="pl-10" src="/eddieNoBg.png" alt="" /></div>
                <div className="flex flex-col justify-center items-center my-auto max-w-lg">
                    <h1 className="self-center text-3xl font-bold text-center sm:text-4xl">
                        Course Generator
                    </h1>
                    <div className="flex p-4 mt-5 border-none bg-secondary">
                        <InfoIcon className="w-12 h-12 mr-3 text-blue-400" />
                        <div>
                            Enter in a course title, or what you want to learn about and our AI
                            will generate a course for you!
                        </div>
                    </div>

                    <CreateCourseForm />
                </div>
            </div>
        </div>
    );
};

export default CreatePage;