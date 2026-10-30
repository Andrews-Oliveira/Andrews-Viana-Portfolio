import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

import {LabNavComponent} from '../../shared/lab-nav/lab-nav.component';
@Component({
  standalone: true,
  imports: [LabNavComponent, RouterLink],
  templateUrl: './about.page.html'
})
export class AboutPage {}
