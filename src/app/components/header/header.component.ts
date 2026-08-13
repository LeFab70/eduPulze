import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-white/90 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[84px]">

        <a href="#hero" class="flex items-center gap-3 group">
          <div class="w-12 h-12 rounded-full bg-ep-navy flex items-center justify-center shadow-lift group-hover:scale-105 transition-transform">
            <svg class="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 9.5L12 5l9 4.5-9 4.5L3 9.5z" fill="currentColor"/>
              <path d="M7 12.2v4.1c0 .3 2.2 2.2 5 2.2s5-1.9 5-2.2v-4.1" stroke="#00A651" stroke-width="1.6" stroke-linecap="round"/>
              <path d="M21 10v5" stroke="#00A651" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
          </div>
          <div>
            <div class="text-[26px] leading-none font-black tracking-tight text-ep-navy font-heading">
              Edu<span class="text-ep-green">Pulse</span>
            </div>
            <p class="text-[10px] sm:text-[11px] text-slate-500 font-semibold leading-tight mt-1">
              La gestion scolaire, simple et intelligente.
            </p>
          </div>
        </a>

        <nav class="hidden lg:flex items-center gap-7 text-[13px] font-bold text-ep-navy/80">
          <a href="#hero" class="hover:text-ep-green transition-colors">Accueil</a>
          <a href="#features" class="hover:text-ep-green transition-colors">Fonctionnalités</a>
          <a href="#payment-sim" class="hover:text-ep-green transition-colors">Paiements</a>
          <a href="#demo" class="hover:text-ep-green transition-colors">L'app</a>
          <a href="#download" class="hover:text-ep-green transition-colors">Télécharger</a>
          <a href="#pricing" class="hover:text-ep-green transition-colors">Tarifs</a>
        </nav>

        <div class="flex items-center gap-3">
          <div class="shield-badge-poster hidden sm:flex items-center gap-2.5">
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
export class HeaderComponent {}
