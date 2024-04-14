import React from "react";

const MainVideoSummary = ({ video, currUnit }) => {
	console.log(video)
	return (
		<div className="flex-[2] mt-16">
			<h4 className="text-sm uppercase text-secondary-foreground/60">
				Chapter {currUnit+1} &bull; Video {currUnit+1}
			</h4>
			<h1 className="text-4xl font-bold">{video.name}</h1>
			<iframe
				title="chapter video"
				className="w-full mt-4 aspeect-video h-[24rem]"
				src={`https://www.youtube.com/embed/${video.videoId}`}
				allowFullScreen
			/>
			<div className="mt-4">
				<h3 className="text-3xl font-semibold">Summary</h3>
				<p className="mt-2 text-secondary-foreground/80">{video.summary}</p>
			</div>
		</div>
	);
};

export default MainVideoSummary;
