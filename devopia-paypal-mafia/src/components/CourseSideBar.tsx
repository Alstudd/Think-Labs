"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

const CourseSideBar = ({ data }) => {
	// const chapters = []
	// const videos = []

	return (
		<div className="w-[400px] absolute top-1/2 -translate-y-1/2 p-6 rounded-r-3xl bg-secondary">
			<h1 className="text-4xl font-bold">Course Name</h1>
			{/* {chapters.map((chapter, index) => { */}
			{/* return ( */}
			{data
				? data.map((ele, i) => {
						return (
							<div className="mt-4">
								<h2 className="text-sm uppercase text-secondary-foreground/60">
									Chapter {i + 1}
								</h2>
								<h2 className="text-2xl font-bold">
									{ele.name}
								</h2>
								{/* {videos.map((video, index) => { */}
								{/* return ( */}
								{ele.children.map((cele) => (
									<div>
										<Link
											// href={`/course/${course.id}/${unitIndex}/${chapterIndex}`}
											href="#"
											className={cn(
												"text-secondary-foreground/60",
												{
													"text-green-500 font-bold": 1,
													// chapter.id === currentChapterId,
												}
											)}
										>
											{cele.name}
										</Link>
									</div>
								))}

								{/* ); */}
								{/* })} */}
								<Separator className="mt-2 text-gray-500 bg-gray-500" />
							</div>
						);
					})
				: ""}
			{/* ); */}
			{/* })} */}
		</div>
	);
};

export default CourseSideBar;
