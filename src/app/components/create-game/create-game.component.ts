import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GameControllerService } from 'src/app/services/game-controller.service';
import { HostService } from 'src/app/services/host.service';


@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss'],
})
export class CreateGameComponent implements OnInit {
  selectQuestionCount: number;
  validQuestionTotal = false;
  errorMessage: string;
  onePlayer: boolean = false;
  formValid = true;
  canSubmit: boolean;

  selectedFriends: any[] = [];
  existingUsers: any[] = [];

  selectedCount: number;
  setPlayerCount() {
    if (this.selectedCount == 1) this.onePlayer = true;
    else this.onePlayer = false;
  }
  playerCount: any[] = [1, 2, 3];

  selectedCategory: string;
  categoryTitle: any[] = [];
  categories: any[] = [
    { categoryNumber: 1, title: 'Any Category' },
    { categoryNumber: 9, title: 'General Knowledge' },
    { categoryNumber: 10, title: 'Entertainment: Books' },
    { categoryNumber: 11, title: 'Entertainment: Film' },
    { categoryNumber: 12, title: 'Entertainment: Music' },
    { categoryNumber: 13, title: 'Entertainment: Musicals & Theatres' },
    { categoryNumber: 14, title: 'Entertainment: Television' },
    { categoryNumber: 15, title: 'Entertainment: Video Games' },
    { categoryNumber: 16, title: 'Entertainment: Board Games' },
    { categoryNumber: 17, title: 'Science and Nature' },
    { categoryNumber: 18, title: 'Science: Computers' },
    { categoryNumber: 19, title: 'Science: Mathematics' },
    { categoryNumber: 20, title: 'Mythology' },
    { categoryNumber: 21, title: 'Sports' },
    { categoryNumber: 22, title: 'Geography' },
    { categoryNumber: 23, title: 'History' },
    { categoryNumber: 24, title: 'Politics' },
    { categoryNumber: 25, title: 'Art' },
    { categoryNumber: 26, title: 'Celebrities' },
    { categoryNumber: 27, title: 'Animals' },
    { categoryNumber: 28, title: 'Vehicles' },
    { categoryNumber: 29, title: 'Entertainment: Comics' },
    { categoryNumber: 30, title: 'Science: Gadgets' },
    { categoryNumber: 31, title: 'Entertainment: Japanese Anime and Manga' },
    { categoryNumber: 32, title: 'Entertainment: Cartoon & Animations' },
  ];

  selectedDifficulty: string = '';
  difficulty: any[] = ['Any','Easy', 'Medium', 'Hard'];

  selectedQuestionType: string = '';
  type: any[] = [];
  questionType: any[] = [
    { apiType: '', type: 'Any Type' },
    { apiType: 'multiple', type: 'Multiple Choice' },
    { apiType: 'boolean', type: 'True / False' },
  ];

  selectedFormValues: any[] = [];
  constructor(
    public hostService: HostService,
    public gameController: GameControllerService,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.getDropdownData();
    this.existingUsers = this.hostService.nonHostPlayers.map(player => player.displayName)
    this.gameController.clearPreviousGameData();
    this.canSubmit = true;
  }

  getDropdownData() {
    this.categories.forEach((category) => {
      this.categoryTitle.push(category.title);
    });
    this.questionType.forEach((difficulty) => {
      this.type.push(difficulty.type);
    });
  }

  getPlayerCount(selectedCount: any) {
    this.selectedCount = selectedCount;
    return this.selectedCount;
  }

  checkQuestionCount() {
    if (this.selectQuestionCount > 50) {
      this.errorMessage = 'Total questions cannot be larger than 50';
      this.validQuestionTotal = true;
    } else if (this.selectQuestionCount == 0) {
      this.errorMessage = 'Total questions cannot be 0';
      this.validQuestionTotal = true;
    }
  }

  isFormValid() {
    this.formValid = true;
    this.selectedFormValues = [];
    this.selectedFormValues.push(
      this.selectedCount,
      this.selectedCategory,
      this.selectedDifficulty,
      this.selectedQuestionType,
      this.selectedFriends,
      this.selectQuestionCount
    );
    if (this.selectedFormValues[4].length === this.selectedFormValues[0] - 1 && !this.selectedFormValues.some((item) => item == undefined)){
      this.formValid = false;
    }
    }

  submitForm() {
    this.setGameData(this.selectedFormValues);
    this.canSubmit = false;
  }

  setGameData(data: any[]): void{
    let playerCount = data[0];
    let category = this.categories.find(c => c.title === data[1]);
    let difficulty = data[2];
    let type = data[3];
    let amount = data[5];

    //create player objects for game 
    for (let i = 0; i < playerCount; i++){
      if (i === 0){
        this.gameController.addPlayer(this.hostService.hostPlayer);
      } else {

        let player = this.hostService.nonHostPlayers.find(p => p.displayName === data[4][i-1])
        this.gameController.addPlayer(player)
      }
    }
    
    if (difficulty == 'Any'){
      difficulty = '';
    }
    if (type == "Any Type"){
      type = ''
    }
    if (type == 'Multiple Choice'){
      type = 'multiple'
    }
    if (type == 'True / False'){
      type = 'boolean';
      }
    if (category.title === 'Any Category'){
        category = '';
        let params = {amount: amount, category: category, difficulty: difficulty, type: type, playerCount: playerCount}
    this.gameController.getQuestions(params)
      } else {
        let params = {amount: amount, category: category.categoryNumber, difficulty: difficulty, type: type, playerCount: playerCount}
        this.gameController.getQuestions(params)
      }
  }
}
