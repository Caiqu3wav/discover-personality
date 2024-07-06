export interface Question {
    id: number,
        questionTitle: string,
        answer1: Answer,
        answer2: Answer,
}

export interface Answer {
    title: string,
    cogFunction: string
}