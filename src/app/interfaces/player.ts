export interface Player {
    displayName: string,
    email: string,
    photoURL: string,
    id? : string
    stats: {
        gamesPlayed: number,
        gamesWon: number,
        gamesLost: number,
        questionsAnswered: number,
        questionsRight: any[],
        questionsWrong: any[],
        bestCategory: string,
        worstCategory: string,
    }
}