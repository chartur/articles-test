import {Injectable} from "@angular/core";
import {ArticleModel} from "../models/ArticleModel";
import {BehaviorSubject} from "rxjs";
import * as moment from "moment";

const DATE_FORMAT = 'DD/MM/YYYY';

@Injectable({
  providedIn: 'root'
})

export class ArticlesProvider {
  private _articles: ArticleModel[] = [
    {
      id: '1',
      title: 'The Extremes of Good',
      desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
      price: 25.05,
      date: moment('08-10-2021 12:10', DATE_FORMAT)
    },
    {
      id: '2',
      title: '1914 translation',
      desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
      price: 25.05,
      date: moment('08-10-2021 09:30', DATE_FORMAT)
    },
    {
      id: '3',
      title: 'Testing article',
      desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
      price: 25.05,
      date: moment('08-10-2021 17:25', DATE_FORMAT)
    },
    {
      id: '4',
      title: 'Content here',
      desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
      price: 25.05,
      date: moment('08-10-2021 19:40', DATE_FORMAT)
    },
    {
      id: '5',
      title: 'Lorem Ipsum',
      desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
      price: 25.05,
      date: moment('02-11-2021 19:40', DATE_FORMAT)
    },
    {
      id: '6',
      title: 'Renaissance',
      desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
      price: 25.05,
      date: moment('02-11-2021 14:30', DATE_FORMAT)
    },
    {
      id: '7',
      title: 'Where does it come from?',
      desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
      price: 25.05,
      date: moment('18-10-2021 18:35', DATE_FORMAT)
    },
    {
      id: '8',
      title: 'Where can I get some',
      desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
      price: 25.05,
      date: moment('21-11-2021 20:40', DATE_FORMAT)
    },
    {
      id: '9',
      title: 'Why do we use it?',
      desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
      price: 25.05,
      date: moment('21-11-2021 20:55', )
    },
  ];

  private _articleByDate: BehaviorSubject<ArticleModel[]> = new BehaviorSubject<ArticleModel[]>([]);
  private _selectedDate: BehaviorSubject<any> = new BehaviorSubject<any>(moment());

  public readonly articlesStream$ = this._articleByDate.asObservable();
  public readonly selectedDateStream$ = this._selectedDate.asObservable();

  public filterArticlesByDate(date: any) {
    const articles = this._articles.filter((article: ArticleModel) => article.date.isSame(date, 'day'));
    this._selectedDate.next(date);
    this._articleByDate.next(articles);
  }
}
