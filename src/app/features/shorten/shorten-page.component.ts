import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateUrlDto, UrlResponseDto } from '../../services/api/models';
import { UrlsApi } from '../../services/api/services';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-shorten-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './shorten-page.component.html',
  styleUrl: './shorten-page.component.css',
})
export class ShortenPageComponent {
  url = '';
  result: UrlResponseDto | null = null;
  error: string | null = null;
  loading = false;
  showToast = false;
  toastMessage = '';
  private toastTimeout: any;
  private api = inject(UrlsApi);

  async shorten(ev: Event) {
    ev.preventDefault();
    this.result = null;
    this.error = null;
    this.loading = true;

    if (!this.url.trim()) {
      this.error = 'Please enter a URL';
      this.loading = false;
      return;
    }

    try {
      const body: CreateUrlDto = { originalUrl: this.url.trim() };
      const response: any = await firstValueFrom(
        this.api.urlControllerCreateShortUrl({ body })
      );
      this.result = response.data || null;
    } catch (err: any) {
      console.error('API Error:', err);
      this.error = err?.error?.message || 'Failed to shorten URL.';
    } finally {
      this.loading = false;
    }
  }

  async copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      this.toastMessage = 'Short URL copied to clipboard!';
      this.showToast = true;
      if (this.toastTimeout) {
        clearTimeout(this.toastTimeout);
      }
      this.toastTimeout = setTimeout(() => {
        this.showToast = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy URL', err);
    }
  }
}
