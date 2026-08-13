import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  template: `
    <header class="bg-white/90 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[84px] gap-3">

        <div class="flex items-center gap-2 sm:gap-3 min-w-0">
          <button
            type="button"
            (click)="toTop()"
            class="w-10 h-10 rounded-full border border-slate-200 bg-white text-ep-navy flex items-center justify-center shrink-0 hover:bg-ep-lightGreen hover:border-ep-green hover:text-ep-green transition-all"
            aria-label="Retour en haut"
            title="Retour en haut">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M5 15l7-7 7 7"/>
            </svg>
          </button>
          <a href="#hero" class="min-w-0">
            <app-logo [size]="48" [showTagline]="true"></app-logo>
          </a>
        </div>

        <nav class="hidden lg:flex items-center gap-7 text-[13px] font-bold text-ep-navy/80">
          <a href="#hero" class="hover:text-ep-green transition-colors">Accueil</a>
          <a href="#features" class="hover:text-ep-green transition-colors">Fonctionnalités</a>
          <a href="#payment-sim" class="hover:text-ep-green transition-colors">Paiements</a>
          <a href="#demo" class="hover:text-ep-green transition-colors">L'app</a>
          <a href="#download" class="hover:text-ep-green transition-colors">Télécharger</a>
          <a href="#pricing" class="hover:text-ep-green transition-colors">Tarifs</a>
        </nav>

        <div class="flex items-center gap-3">
          <div class="shield-badge-poster hidden md:flex items-center gap-2.5">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <span class="text-[10px] font-extrabold tracking-[0.14em] leading-tight">
              SÉCURISÉ / FIABLE / CONFIDENTIEL
            </span>
          </div>

          <a href="#download" class="px-4 sm:px-5 py-2.5 rounded-xl bg-ep-green hover:bg-ep-greenHover text-white text-xs sm:text-sm font-extrabold shadow-md shadow-ep-green/25 transition-all hover:-translate-y-0.5">
            Télécharger
          </a>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
