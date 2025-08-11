import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-50 border-t border-gray-200 mt-auto">
      <div class="container mx-auto px-6 py-6">
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-600">
            <p>&copy; {{ currentYear }} URL Shortener. All rights reserved.</p>
          </div>
          <div class="flex space-x-6 text-sm">
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 transition-colors"
              >Privacy</a
            >
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 transition-colors"
              >Terms</a
            >
            <a
              href="#"
              class="text-gray-500 hover:text-gray-900 transition-colors"
              >Contact</a
            >
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
