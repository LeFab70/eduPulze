import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService } from '../../services/edupulse-state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="sticky top-0 z-50 glass-panel border-b border-slate-800/80 px-4 lg:px-8 py-3 transition-all duration-300">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <!-- Logo Brand & Slogan -->
        <div class="flex items-center gap-3">
          <div class="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-blue-700 text-white shadow-lg shadow-emerald-500/20 border border-emerald-400/30">
            <!-- Graduation Cap SVG -->
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
            </svg>
          </div>
          <div>
            <div class="flex items-baseline gap-1">
              <span class="text-2xl font-black tracking-tight text-white font-heading">Edu<span class="text-emerald-400">Pulse</span></span>
              <span class="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 tracking-widest">v1.0</span>
            </div>
            <p class="text-xs text-slate-400 font-medium hidden sm:block">La gestion scolaire, simple et intelligente.</p>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-300">
          <a href="#hero" class="hover:text-emerald-400 transition-colors">Accueil</a>
          <a href="#mobile-app" class="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
            <span>Espace Parent Mobile</span>
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          </a>
          <a href="#modules" class="hover:text-emerald-400 transition-colors">Modules ERP</a>
          <a href="#simulators" class="hover:text-emerald-400 transition-colors">Simulateurs</a>
          <a href="#pricing" class="hover:text-emerald-400 transition-colors">Tarifs B2B</a>
        </nav>

        <!-- Right Badge & Action Buttons -->
        <div class="flex items-center gap-3">
          <!-- Top Right Badge from Poster -->
          <div class="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs font-bold text-blue-300 shadow-inner">
            <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <span>SÉCURISÉ • FIABLE • CONFIDENTIEL</span>
          </div>

          <a href="#simulators" class="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-600/30 border border-emerald-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
            Tester la Démo
          </a>
        </div>

      </div>
    </header>
  `
})
export class HeaderComponent {
  state = inject(EduPulseStateService);
}
