// src/data/questions.ts

export interface Question {
    id: number;
    question: string;
    options: {
        text: string;
        weights: { [key: string]: number };
    }[];
}

const questions: Question[] = [
    {
        id: 1,
        question: "야생 포켓몬과의 만남",
        options: [
            { text: "바로 전투를 시작한다.", weights: { Adventurer: 1, Leader: 0.5 } },
            { text: "포켓몬의 행동을 관찰하고 전략을 세운다.", weights: { Strategist: 1, Thinker: 0.5, Analyzer: 0.5 } },
            { text: "포켓몬에게 말을 걸어 친구가 되려고 한다.", weights: { Communicator: 1, Collaborator: 0.5, Healer: 0.5 } },
            { text: "도감을 꺼내 포켓몬의 정보를 확인한다.", weights: { Thinker: 1, Analyzer: 0.5, Inventor: 0.5, Perfectionist: 0.5 } },
        ],
    },
    {
        id: 2,
        question: "체육관 도전",
        options: [
            { text: "다양한 전략을 준비하고 모든 가능성에 대비한다.", weights: { Strategist: 1, Thinker: 0.5, Analyzer: 0.5 } },
            { text: "훈련을 통해 포켓몬의 힘을 최대한 끌어올린다.", weights: { Leader: 1, Adventurer: 0.5, Healer: 0.5 } },
            { text: "친구들과 함께 훈련하며 조언을 구한다.", weights: { Collaborator: 1, Communicator: 0.5, Healer: 0.5 } },
            { text: "현재 가진 포켓몬의 강점을 분석한다.", weights: { Analyzer: 1, Thinker: 0.5, Strategist: 0.5, Perfectionist: 0.5 } },
        ],
    },
    {
        id: 3,
        question: "포켓몬 교환",
        options: [
            { text: "교환의 장단점을 꼼꼼히 분석한다.", weights: { Strategist: 1, Thinker: 0.5, Analyzer: 0.5 } },
            { text: "친구의 제안을 즉시 받아들인다.", weights: { Adventurer: 1, Collaborator: 0.5, Communicator: 0.5 } },
            { text: "친구와 상의하며 최선의 결정을 내린다.", weights: { Collaborator: 1, Communicator: 0.5, Healer: 0.5 } },
            { text: "희귀 포켓몬의 가치를 조사한다.", weights: { Analyzer: 1, Strategist: 0.5, Inventor: 0.5, Perfectionist: 0.5 } },
        ],
    },
    {
        id: 4,
        question: "전설의 포켓몬 발견",
        options: [
            { text: "전설의 포켓몬을 잡기 위해 필요한 모든 장비를 준비한다.", weights: { Leader: 1, Strategist: 0.5, Inventor: 0.5 } },
            { text: "친구들과 함께 전설의 포켓몬을 찾아 나선다.", weights: { Communicator: 1, Collaborator: 0.5, Healer: 0.5 } },
            { text: "포켓몬의 서식지와 행동 패턴을 연구한다.", weights: { Thinker: 1, Analyzer: 0.5, Strategist: 0.5 } },
            { text: "바로 모험을 떠난다.", weights: { Adventurer: 1, Leader: 0.5, Protector: 0.5 } },
        ],
    },
    {
        id: 5,
        question: "포켓몬 대회 참가",
        options: [
            { text: "다양한 전술을 연구하고 연습한다.", weights: { Strategist: 1, Thinker: 0.5, Analyzer: 0.5 } },
            { text: "대회에 참가한 다른 트레이너들과 교류하며 정보를 교환한다.", weights: { Communicator: 1, Collaborator: 0.5, Healer: 0.5 } },
            { text: "자신의 포켓몬과 끊임없이 훈련한다.", weights: { Leader: 1, Adventurer: 0.5, Protector: 0.5 } },
            { text: "대회 규칙과 포맷을 자세히 분석한다.", weights: { Thinker: 1, Strategist: 0.5, Analyzer: 0.5, Perfectionist: 0.5 } },
        ],
    },
    {
        id: 6,
        question: "포켓몬과의 유대",
        options: [
            { text: "즉시 포켓몬 센터로 데려간다.", weights: { Leader: 1, Healer: 0.5, Collaborator: 0.5 } },
            { text: "포켓몬과의 유대감을 높이기 위해 특별한 시간을 보낸다.", weights: { Communicator: 1, Healer: 0.5, Collaborator: 0.5 } },
            { text: "포켓몬의 상태를 자세히 점검하고 치료 계획을 세운다.", weights: { Thinker: 1, Analyzer: 0.5, Strategist: 0.5, Perfectionist: 0.5 } },
            { text: "필요한 치료법을 찾아 직접 치료한다.", weights: { Healer: 1, Leader: 0.5, Strategist: 0.5 } },
        ],
    },
    {
        id: 7,
        question: "새로운 포켓몬 발견",
        options: [
            { text: "포켓몬을 잡아 능력을 테스트해 본다.", weights: { Adventurer: 1, Leader: 0.5, Protector: 0.5 } },
            { text: "포켓몬의 습성을 관찰하고 기록한다.", weights: { Thinker: 1, Analyzer: 0.5, Strategist: 0.5 } },
            { text: "친구들에게 알리고 함께 연구한다.", weights: { Communicator: 1, Collaborator: 0.5, Healer: 0.5 } },
            { text: "포켓몬의 강점을 분석하고 훈련 계획을 세운다.", weights: { Leader: 1, Strategist: 0.5, Protector: 0.5, Perfectionist: 0.5 } },
        ],
    },
    {
        id: 8,
        question: "친구의 도움 요청",
        options: [
            { text: "기꺼이 도와주며 자신의 경험을 나눈다.", weights: { Leader: 1, Communicator: 0.5, Healer: 0.5 } },
            { text: "친구와 함께 트레이닝 계획을 세운다.", weights: { Strategist: 1, Collaborator: 0.5, Analyzer: 0.5 } },
            { text: "친구와 대화하며 문제를 해결한다.", weights: { Communicator: 1, Collaborator: 0.5, Healer: 0.5 } },
            { text: "친구의 포켓몬을 분석하고 개선점을 찾는다.", weights: { Thinker: 1, Analyzer: 0.5, Strategist: 0.5 } },
        ],
    },
    {
        id: 9,
        question: "포켓몬 연구",
        options: [
            { text: "새로운 연구 주제를 제안하고 주도적으로 이끈다.", weights: { Leader: 1, Strategist: 0.5, Inventor: 0.5 } },
            { text: "다른 연구원들과 협력하며 연구를 진행한다.", weights: { Communicator: 1, Collaborator: 0.5, Healer: 0.5 } },
            { text: "포켓몬의 진화와 생태를 깊이 있게 연구한다.", weights: { Thinker: 1, Analyzer: 0.5, Strategist: 0.5 } },
            { text: "연구를 통해 얻은 지식을 바로 적용한다.", weights: { Strategist: 1, Thinker: 0.5, Inventor: 0.5, Perfectionist: 0.5 } },
        ],
    },
    {
        id: 10,
        question: "포켓몬 여행",
        options: [
            { text: "각 지역의 체육관에 도전한다.", weights: { Adventurer: 1, Leader: 0.5, Protector: 0.5 } },
            { text: "각 지역의 포켓몬을 연구하고 기록한다.", weights: { Thinker: 1, Analyzer: 0.5, Strategist: 0.5, Perfectionist: 0.5 } },
            { text: "다른 트레이너들과 교류하며 경험을 나눈다.", weights: { Communicator: 1, Collaborator: 0.5, Healer: 0.5 } },
            { text: "포켓몬 리그에 참가하여 챔피언이 된다.", weights: { Leader: 1, Adventurer: 0.5, Protector: 0.5 } },
        ],
    },
];

export default questions;
