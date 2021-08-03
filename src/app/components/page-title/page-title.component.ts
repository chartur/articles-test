import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {WizardProvider} from "../../providers/wizard.provider";
import {Subscription} from "rxjs";
import {WizardModel} from "../../models/WizardModel";

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit, OnDestroy {

  public wizard: WizardModel;

  private wizardSubscription: Subscription;

  constructor(
    private wizardProvider: WizardProvider
  ) { }

  ngOnInit(): void {
    this.wizardSubscription = this.wizardProvider.currentWizardStream$.subscribe(wizard => {
      this.wizard = wizard;
    })
  }

  ngOnDestroy(): void {
    this.wizardSubscription.unsubscribe();
  }

}
