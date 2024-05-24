// src/pages/result.tsx
import { useEffect, useState } from 'react';
import questions from '../data/questions';

interface Answer {
    questionId: number;
    answerIndex: number;
}

interface Result {
    answers: Answer[];
    personalityType: string;
    personalityScores: { [key: string]: number };
}

const ResultPage = () => {
    const [result, setResult] = useState<Result | null>(null);

    useEffect(() => {
        const fetchAnswers = async () => {
            const response = await fetch('/api/get-answer');
            const data = await response.json();
            setResult(data);
        };

        fetchAnswers();
    }, []);

    if (!result) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Result</h1>
            <p>성격 유형: {result.personalityType}</p>
            <ul>
                {result.answers.map((answer, index) => {
                    const question = questions.find(q => q.id === answer.questionId);
                    const answerText = question ? question.options[answer.answerIndex].text : 'Unknown Answer';
                    return (
                        <li key={index}>
                            Question {answer.questionId}: {answerText}
                        </li>
                    );
                })}
            </ul>
            <h2>성격 유형 점수</h2>
            <ul>
                {Object.entries(result.personalityScores).map(([type, score], index) => (
                    <li key={index}>
                        {type}: {score}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResultPage;
