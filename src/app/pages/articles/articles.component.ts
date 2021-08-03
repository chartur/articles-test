import { Component, OnInit } from '@angular/core';
import {WizardProvider} from "../../providers/wizard.provider";
import {ArticlesProvider} from "../../providers/articles.provider";
import {Observable} from "rxjs";
import {ArticleModel} from "../../models/ArticleModel";
import * as moment from "moment";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public articles$: Observable<ArticleModel[]>;

  constructor(
    private wizardProvider: WizardProvider,
    private articlesProvider: ArticlesProvider
  ) { }

  ngOnInit(): void {
    this.articles$ = this.articlesProvider.articlesStream$;

    this.wizardProvider.setCurrentWizard({
      title: 'Select Articles',
      count: 2
    });
  }

}
