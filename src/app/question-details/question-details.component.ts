import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit {

  question: any;

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        const questionId = +params["id"];
        this.questionService.getQuestionDetails(questionId).subscribe(
          questionResp => {
            this.question = questionResp;
          }
        );
      }
    );
  }

}
