"use client";
import React, { useState } from "react";
import axios from "axios";

export default function page() {
	const [video, setVideo] = useState();

	const getYtData = async () => {
		const res = await axios.post("/api/course/createChapters", {
			title: video,
		});
		const id = res.data.op;

		const res2 = await axios.post("/api/getCourses", { courseId: id });
		console.log(res.data);
	};

	return (
		<div className="">
			<input
				type="text"
				onChange={(e) => {
					setVideo(e.target.value);
				}}
			/>
			<button onClick={getYtData}>Click</button>
		</div>
	);
}
