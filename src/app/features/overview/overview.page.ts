import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {HistoryService} from '../../core/services/history.service';

import {LabNavComponent} from '../../shared/lab-nav/lab-nav.component';
@Component({
  standalone: true,
  imports: [LabNavComponent, RouterLink],
  templateUrl: './overview.page.html'
})
export class OverviewPage {readonly history = inject(HistoryService);}
