import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-features-grid',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="features" class="relative bg-white pt-10 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" epReveal>
          <article class="text-center group">
            <div class="w-[72px] h-[72px] mx-auto mb-4 rounded-full bg-ep-green text-white flex items-center justify-center shadow-lg shadow-ep-green/25 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="text-[15px] font-black text-ep-navy uppercase tracking-tight mb-2 font-heading">Suivi en temps réel</h3>
            <p class="text-slate-500 text-sm leading-relaxed">Notes, absences, bulletins, comportement, annonces de l'école…</p>
          </article>

          <article class="text-center group">
            <div class="w-[72px] h-[72px] mx-auto mb-4 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-lg shadow-blue-600/25 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="text-[15px] font-black text-ep-navy uppercase tracking-tight mb-2 font-heading">Paiement facile</h3>
            <p class="text-slate-500 text-sm leading-relaxed">Frais de scolarité, inscriptions, examens, activités extrascolaires…</p>
          </article>

          <article class="text-center group">
            <div class="w-[72px] h-[72px] mx-auto mb-4 rounded-full bg-[#F59E0B] text-white flex items-center justify-center shadow-lg shadow-amber-500/25 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </div>
            <h3 class="text-[15px] font-black text-ep-navy uppercase tracking-tight mb-2 font-heading">Recevez des alertes</h3>
            <p class="text-slate-500 text-sm leading-relaxed">Absences, nouvelles notes, événements, rappels de paiement…</p>
          </article>

          <article class="text-center group">
            <div class="w-[72px] h-[72px] mx-auto mb-4 rounded-full bg-[#7C3AED] text-white flex items-center justify-center shadow-lg shadow-purple-600/25 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h3 class="text-[15px] font-black text-ep-navy uppercase tracking-tight mb-2 font-heading">Tableaux de bord</h3>
            <p class="text-slate-500 text-sm leading-relaxed">Des statistiques claires pour mieux accompagner votre enfant.</p>
          </article>
        </div>
      </div>
    </section>
  `
})
export class FeaturesGridComponent {}
