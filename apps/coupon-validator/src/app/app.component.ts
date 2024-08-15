import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MaterialModule } from './shared/material.module';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MaterialModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'coupon-validator';
}
