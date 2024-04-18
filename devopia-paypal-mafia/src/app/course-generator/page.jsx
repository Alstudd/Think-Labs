"use client";
import React, { useState } from "react";
import axios from "axios";
import { getTranscript } from "@/lib/youtube";
import { YoutubeTranscript } from "youtube-transcript";

export default function CourseGen() {
	const [video, setVideo] = useState();

	const getYtData = async () => {
		const res = await YoutubeTranscript.fetchTranscript("d1lhIUPXnko", {
			lang: "en",
		});
		console.log(res);
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
