import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor() {}

  calculateScore(p: any, q: any, a: any) {
    if (q.correct_answer === a.value) {
      //IF QUESTIONS RIGHT CONTAINS AN EXISTING ENTRY WITH THAT CATEGORY, INCREMENT COUNT BY 1
      if (
        p.stats.questionsRight.filter((i) => i.category === a.category).length >
        0
      ) {
        let index = p.stats.questionsRight.findIndex(
          (i) => i.category === a.category
        );
        p.stats.questionsWrong[index].count += 1;
        p.stats.questionsAnswered += 1;
      } //IF QUESTIONS RIGHT DOESNT CONTAIN AN EXISTING ENTRY WITH THAT CATEGORY, CREATE ENTRY WITH VALUE 1
      else if (
        p.stats.questionsRight.filter((i) => i.category === a.category)
          .length === 0
      ) {
        p.stats.questionsRight.push({ category: a.category, count: 1 });
        p.stats.questionsAnswered += 1;
      }
    } else if (q.correct_answer !== a.value) {
      if (
        p.stats.questionsWrong.filter((i) => i.category === a.category).length >
        0
      ) {
        //IF QUESTIONS WRONG CONTAINS AN EXISTING ENTRY WITH THAT CATEGORY, INCREMENT COUNT BY 1
        let index = p.stats.questionsWrong.findIndex(
          (i) => i.category === a.category
        );
        p.stats.questionsWrong[index].count += 1;
        p.stats.questionsAnswered += 1;
      } //IF QUESTIONS RIGHT DOESNT CONTAIN AN EXISTING ENTRY WITH THAT CATEGORY, CREATE ENTRY WITH VALUE 1
      else if (
        p.stats.questionsWrong.filter((i) => i.category === a.category)
          .length === 0
      ) {
        p.stats.questionsWrong.push({ category: a.category, count: 1 });
        p.stats.questionsAnswered += 1;
      }
    }

    return p;
  }
}
