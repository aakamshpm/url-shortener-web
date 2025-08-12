import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="bg-white border-b border-gray-200 shadow-sm">
      <div class="container mx-auto px-6 py-4">
        <nav class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <h1 class="text-xl font-semibold text-gray-900 tracking-tight">
              Zip Link
            </h1>
          </div>

          <div class="flex space-x-6 sm:space-x-8">
            <a
              routerLink="/"
              routerLinkActive="text-gray-900 font-medium border-b-2 border-gray-900 pb-1"
              [routerLinkActiveOptions]="{ exact: true }"
              class="text-xs sm:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Shorten
            </a>
            <a
              routerLink="/analytics"
              routerLinkActive="text-gray-900 font-medium border-b-2 border-gray-900 pb-1"
              class="text-xs sm:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Analytics
            </a>
            <a
              routerLink="/docs"
              routerLinkActive="text-gray-900 font-medium border-b-2 border-gray-900 pb-1"
              class="text-xs sm:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Docs
            </a>
          </div>
        </nav>
      </div>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {}
