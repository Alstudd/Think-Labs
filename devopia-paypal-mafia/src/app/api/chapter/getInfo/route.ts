import { prisma } from "@/lib/db";
import { strict_output } from "@/lib/courseGpt";
import {
	getQuestionsFromTranscript,
	getTranscript,
	searchYoutube,
} from "@/lib/youtube";
import { NextResponse } from "next/server";
import { z } from "zod";

const bodyParser = z.object({
	vScript: z.string(),
	vName: z.string(),
});

export async function POST(req: Request, res: Response) {
	try {
		const body = await req.json();
		const { vScript, vName } = bodyParser.parse(body);
		console.log("hello", vScript);
		// const videoId = await searchYoutube(chapter.youtubeSearchQuery);
		// let transcript = await getTranscript(video.videoId);
		// let maxLength = 500; // let maxLength = 500; // let maxLength = 200;
		// transcript = transcript.split(" ").slice(0, maxLength).join(" ");
		// console.log(videoId, video.transcript);
		

		const questions = await getQuestionsFromTranscript(
			vScript,
			vName
		);

		return NextResponse.json({ success: true, questions });

		// await prisma.quest.createMany({
		// 	data: questions.map((question) => {
		// 		let options = [
		// 			question.answer,
		// 			question.option1,
		// 			question.option2,
		// 			question.option3,
		// 		];
		// 		options = options.sort(() => Math.random() - 0.5);
		// 		return {
		// 			question: question.question,
		// 			answer: question.answer,
		// 			options: JSON.stringify(options),
		// 			videoId: videoId,
		// 		};
		// 	}),
		// });

		// await prisma.video.update({
		// 	where: { id: videoId },
		// 	data: {
		// 		videoId: videoId,
		// 		summary: summary,
		// 	},
		// });

		return NextResponse.json({ success: true });
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{
					success: false,
					error: "Invalid body",
				},
				{ status: 400 }
			);
		} else {
			return NextResponse.json(
				{
					success: false,
					error: "unknown",
				},
				{ status: 500 }
			);
		}
	}
}
