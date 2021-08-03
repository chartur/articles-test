import {Component, Input, OnInit} from '@angular/core';
import {ArticleModel} from "../../models/ArticleModel";
import { faCalendar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  public calendarIcon = faCalendar;
  public plusIcon = faPlus;
  public minusIcon = faMinus;

  public selectedCount: number = 0;

  public articleCount: number[] = new Array(7);
  @Input('article') article: ArticleModel;

  constructor() { }

  ngOnInit(): void {
  }


  minusCount() {
    if(this.selectedCount === 0) {
      return;
    }

    this.selectedCount--;
  }

  plusCount() {
    if(this.selectedCount === this.articleCount.length - 1) {
      return;
    }

    this.selectedCount++;
  }
}
