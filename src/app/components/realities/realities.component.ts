import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-realities',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="realities" class="bg-ep-navy text-white py-16 sm:py-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-30" style="background: radial-gradient(700px 280px at 20% 0%, rgba(0,166,81,0.25), transparent 60%);"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" epReveal>
        <h2 class="text-center text-2xl sm:text-4xl font-black uppercase tracking-[0.12em] font-heading mb-10">
          Conçu pour <span class="text-ep-green">nos réalités</span>
        </h2>

        <div class="rounded-3xl overflow-hidden mb-12 max-h-56 sm:max-h-64">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80"
            alt="Enseignant saisissant les notes sur une tablette"
            class="w-full h-56 sm:h-64 object-cover"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div class="reality-col text-center px-4 space-y-3">
            <svg class="w-10 h-10 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
            <h3 class="text-sm font-extrabold uppercase font-heading leading-snug">Saisie des notes même hors ligne</h3>
            <p class="text-slate-300 text-xs leading-relaxed">Les enseignants saisissent les notes même sans connexion. Synchronisation automatique dès le retour du réseau.</p>
          </div>
          <div class="reality-col text-center px-4 space-y-3">
            <svg class="w-10 h-10 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            <h3 class="text-sm font-extrabold uppercase font-heading leading-snug">Sécurité avancée</h3>
            <p class="text-slate-300 text-xs leading-relaxed">Vos données et celles de vos enfants sont protégées avec des standards de sécurité élevés.</p>
          </div>
          <div class="reality-col text-center px-4 space-y-3">
            <svg class="w-10 h-10 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
            <h3 class="text-sm font-extrabold uppercase font-heading leading-snug">Gestion centralisée</h3>
            <p class="text-slate-300 text-xs leading-relaxed">Toutes les informations de l'école centralisées, accessibles à tout moment, partout.</p>
          </div>
          <div class="reality-col text-center px-4 space-y-3">
            <svg class="w-10 h-10 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <h3 class="text-sm font-extrabold uppercase font-heading leading-snug">Communication facilitée</h3>
            <p class="text-slate-300 text-xs leading-relaxed">École, enseignants et parents connectés pour le succès de chaque élève.</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class RealitiesComponent {}
