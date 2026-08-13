import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (visible()) {
      <button
        type="button"
        (click)="toTop()"
        class="w-14 h-14 rounded-full bg-ep-navy text-white shadow-lg shadow-ep-navy/30 flex items-center justify-center hover:-translate-y-1 hover:scale-105 transition-transform"
        aria-label="Retour en haut"
        title="Retour en haut">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    }
  `
})
export class BackToTopComponent {
  visible = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.visible.set(window.scrollY > 280);
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
