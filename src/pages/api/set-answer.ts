import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions, SessionData } from '../../lib/session';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getIronSession<SessionData>(req, res, sessionOptions);

    // 세션 식별자가 없는 경우 생성
    if (!session.sessionId) {
        session.sessionId = uuidv4();
        session.answers = [];
        await session.save();
    }

    const { questionId, answerIndex } = req.body;

    // 질문 ID와 답변 인덱스를 세션에 저장
    session.answers.push({ questionId, answerIndex });
    await session.save();

    res.status(200).json({ message: 'Answer saved successfully' });
}
