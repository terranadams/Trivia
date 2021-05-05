export interface User {
  email: string;
  displayName: string;
  photoURL: string;
  id?: string;
  stats: {
    gamesPlayed: number;
    gamesWon: number;
    gamesLost: number;
    questionsAnswered: number;
    questionsRight: [];
    questionsWrong: [];
    bestCategory: string;
    worstCategory: string;
  };
}
