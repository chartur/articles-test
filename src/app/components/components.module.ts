import {NgModule} from "@angular/core";
import {PageTitleComponent} from "./page-title/page-title.component";
import {CommonModule} from "@angular/common";
import { CalendarComponent } from './calendar/calendar.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleTitleComponent } from './article-title/article-title.component';
import {PipesModule} from "../pipes/pipes.module";

@NgModule({
  declarations: [
    PageTitleComponent,
    CalendarComponent,
    ArticleCardComponent,
    ArticleTitleComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PipesModule,
  ],
  exports: [
    PageTitleComponent,
    CalendarComponent,
    ArticleCardComponent,
    ArticleTitleComponent
  ],
})

export class ComponentsModule {}
