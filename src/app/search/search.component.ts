import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchResults: any = [];

  constructor(private questionService: QuestionsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  searchQuestion(searchForm: NgForm) {
    this.searchResults = [];
    this.questionService.searchQuestions(searchForm.value.question).subscribe(
      questions => {
        this.searchResults = questions;
      }
    );
  }

  showQuestionDetails(questionId: number) {
    this.router.navigate(['question', questionId]);
  }

}
