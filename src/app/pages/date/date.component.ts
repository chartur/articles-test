import { Component, OnInit } from '@angular/core';
import {WizardProvider} from "../../providers/wizard.provider";
import {CalendarDayModel} from "../../models/CalendarDayModel";
import {ArticlesProvider} from "../../providers/articles.provider";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {templateJitUrl} from "@angular/compiler";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  public selectedDate$: Observable<any>;

  constructor(
    private wizardProvider: WizardProvider,
    private articlesProvider: ArticlesProvider,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.selectedDate$ = this.articlesProvider.selectedDateStream$;

    this.wizardProvider.setCurrentWizard({
      title: 'Select Date',
      count: 1
    });
  }

  onCalendarDateSelect(date: CalendarDayModel) {
    this.articlesProvider.filterArticlesByDate(date.date);
    this.router.navigate(['/articles'])
  }
}
