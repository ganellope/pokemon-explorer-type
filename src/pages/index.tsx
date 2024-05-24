import { useState } from 'react';
import questions from '../data/questions';
import { useRouter } from 'next/router';

const HomePage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const router = useRouter();

    const handleOptionClick = async (optionIndex: number) => {
        const response = await fetch('/api/set-answer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                questionId: questions[currentQuestionIndex].id,
                answerIndex: optionIndex,
            }),
        });

        if (response.ok) {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                router.push('/result');
            }
        } else {
            console.error('Failed to save answer');
        }
    };

    return (
        <div>
            <h1>Pokemon Personality Quiz</h1>
            <div>
                <p>{questions[currentQuestionIndex].question}</p>
                {questions[currentQuestionIndex].options.map((option, index) => (
                    <button key={index} onClick={() => handleOptionClick(index)}>
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
