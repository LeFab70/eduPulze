import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        <!-- Left: Logo & Slogan -->
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-ep-navy flex items-center justify-center text-white shadow-md shadow-ep-navy/20">
            <!-- Graduation Cap -->
            <svg class="w-7 h-7 text-ep-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
            </svg>
          </div>
          <div>
            <div class="flex items-baseline gap-1">
              <span class="text-2xl sm:text-3xl font-black tracking-tight text-ep-navy font-heading">Edu<span class="text-ep-green">Pulse</span></span>
            </div>
            <p class="text-xs text-slate-500 font-semibold leading-none hidden sm:block">La gestion scolaire, simple et intelligente.</p>
          </div>
        </div>

        <!-- Middle: Nav Links (Desktop) -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700">
          <a href="#hero" class="hover:text-ep-green transition-colors">Accueil</a>
          <a href="#mobile-app" class="hover:text-ep-green transition-colors flex items-center gap-1.5">
            <span>App Parent</span>
            <span class="w-2 h-2 rounded-full bg-ep-green animate-ping"></span>
          </a>
          <a href="#payment-sim" class="hover:text-ep-green transition-colors">Paiements</a>
          <a href="#simulators" class="hover:text-ep-green transition-colors">Simulateurs</a>
          <a href="#modules" class="hover:text-ep-green transition-colors">Modules ERP</a>
          <a href="#pricing" class="hover:text-ep-green transition-colors">Tarifs B2B</a>
        </nav>

        <!-- Right: Security Badge from Poster -->
        <div class="flex items-center gap-3">
          <div class="shield-badge-poster hidden lg:flex items-center gap-2 text-xs font-extrabold tracking-wide uppercase">
            <svg class="w-4 h-4 text-ep-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <span>SÉCURISÉ • FIABLE • CONFIDENTIEL</span>
          </div>

          <a href="#simulators" class="px-5 py-2.5 rounded-xl bg-ep-green hover:bg-ep-greenHover text-white text-xs sm:text-sm font-extrabold shadow-md shadow-ep-green/20 transition-all transform hover:-translate-y-0.5">
            Essayer la Démo
          </a>
        </div>

      </div>
    </header>
  `
})
export class HeaderComponent {}
