import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UrlStatsDto } from '../../services/api/models';
import { UrlsApi } from '../../services/api/services';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-analytics-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './analytics-page.component.html',
  styleUrl: './analytics-page.component.css',
})
export class AnalyticsPageComponent {
  shortCode = '';
  stats: UrlStatsDto | null = null;
  error: string | null = null;
  loading = false;
  private api = inject(UrlsApi);

  async getStats(ev: Event) {
    ev.preventDefault();
    this.stats = null;
    this.error = null;
    this.loading = true;

    if (!this.shortCode.trim()) {
      this.error = 'Please enter a short code';
      this.loading = false;
      return;
    }

    try {
      const response: any = await firstValueFrom(
        this.api.urlControllerGetUrlStats({ shortCode: this.shortCode.trim() })
      );
      this.stats = response.data || response || null;
    } catch (err: any) {
      console.error('API Error:', err);
      this.error = err?.error?.message || 'Failed to get URL statistics.';
    } finally {
      this.loading = false;
    }
  }
}
