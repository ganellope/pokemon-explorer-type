// src/pages/api/get-answers.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getIronSession } from 'iron-session';
import { sessionOptions, SessionData } from '../../lib/session';
import questions from '../../data/questions';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getIronSession<SessionData>(req, res, sessionOptions);

    if (req.method === 'GET') {
        const answers = session.answers || [];

        // 성격 유형 점수 계산
        const personalityScores: { [key: string]: number } = {
            Adventurer: 0,
            Strategist: 0,
            Healer: 0,
            Leader: 0,
            Analyzer: 0,
            Protector: 0,
            Inventor: 0,
            Collaborator: 0,
            Perfectionist: 0,
        };

        answers.forEach((answer) => {
            const question = questions.find(q => q.id === answer.questionId);
            if (question) {
                const option = question.options[answer.answerIndex];
                for (const [type, weight] of Object.entries(option.weights)) {
                    personalityScores[type] = (personalityScores[type] || 0) + weight;
                }
            }
        });

        // 가장 높은 점수를 받은 성격 유형 찾기
        const highestScore = Math.max(...Object.values(personalityScores));
        const personalityType = Object.keys(personalityScores).find(key => personalityScores[key] === highestScore);

        res.status(200).json({ answers, personalityType, personalityScores });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
