import React from "react";

const MainVideoSummary = ({ videoId }) => {
	return (
		<div className="flex-[2] mt-16">
			<h4 className="text-sm uppercase text-secondary-foreground/60">
				Chapter {1} &bull; Video {1}
			</h4>
			<h1 className="text-4xl font-bold">Video Name</h1>
			<iframe
				title="chapter video"
				className="w-full mt-4 aspeect-video max-h-[24rem]"
				src={`https://www.youtube.com/embed/${videoId}`}
				allowFullScreen
			/>
			<div className="mt-4">
				<h3 className="text-3xl font-semibold">Summary</h3>
				<p className="mt-2 text-secondary-foreground/80">lorem ipsum</p>
			</div>
		</div>
	);
};

export default MainVideoSummary;
