import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environments';

@Component({
  selector: 'app-docs-page',
  imports: [CommonModule],
  templateUrl: './docs-page.component.html',
  styleUrl: './docs-page.component.css',
})
export class DocsPageComponent {
  swaggerUrl = `${environment.apiUrl}/api-docs`;
}
