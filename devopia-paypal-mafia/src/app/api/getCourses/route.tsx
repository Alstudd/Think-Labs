import { z } from "zod";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

const createChaptersSchema = z.object({
	courseId: z.string().min(3).max(100),
});

export async function POST(req: Request, res: Response) {
	const body = await req.json();
	const { courseId } = createChaptersSchema.parse(body);

	const p = await prisma.chapter.findMany({
		where: {
			courseId: courseId,
		},
	});

	const op = await Promise.all(
		p.map(async (ele) => {
			const c = await prisma.video.findMany({
				where: {
					chapterId: ele.id,
				},
			});

			ele.children = c;
			return ele;
		})
	);

	return NextResponse.json(op);
}
