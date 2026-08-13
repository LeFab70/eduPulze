import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <footer id="download" class="bg-ep-navy text-white pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <div class="flex flex-col lg:flex-row items-center justify-between gap-10" epReveal>
          <div class="flex items-center gap-4 text-center lg:text-left">
            <div class="w-14 h-14 rounded-2xl bg-ep-green text-white flex items-center justify-center shrink-0">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 14v7"/></svg>
            </div>
            <p class="text-xl sm:text-2xl font-black font-heading leading-snug">
              EduPulse, ensemble pour l'avenir de nos enfants.
            </p>
          </div>

          <div class="text-center space-y-3">
            <p class="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-300">Téléchargez EduPulse</p>
            <div class="flex flex-wrap items-center justify-center gap-3">
              <a href="#hero" class="h-12 px-4 bg-black text-white rounded-xl flex items-center gap-3 hover:bg-slate-900">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 2.4c-.3.3-.5.8-.5 1.4v16.4c0 .6.2 1.1.5 1.4l.1.1 9.1-9.1v-.2L3.7 2.3l-.1.1zm12.2 8.7-2.1 2.1 2.5 2.5 2.6-1.5c.7-.4.7-1.1 0-1.5l-3-1.6zm-3.2 3.2-9 9c.3.1.6.1.9.1.5 0 1-.1 1.5-.4l10.2-5.8-3.6-2.9zm3.1-8.3L12.5 11l2.1 2.1 3.6-2.1-2.5-2.7z"/></svg>
                <div class="text-left leading-none">
                  <span class="text-[9px] uppercase tracking-wider text-slate-300 block">Disponible sur</span>
                  <span class="text-sm font-extrabold font-heading">Google Play</span>
                </div>
              </a>
              <a href="#hero" class="h-12 px-4 bg-black text-white rounded-xl flex items-center gap-3 hover:bg-slate-900">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.9zM14.7 6.3c.6-.8 1.1-1.9.9-3-1 .1-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.5 2.9-1.4z"/></svg>
                <div class="text-left leading-none">
                  <span class="text-[9px] uppercase tracking-wider text-slate-300 block">Télécharger dans</span>
                  <span class="text-sm font-extrabold font-heading">l'App Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm pt-8 border-t border-white/10">
          <div class="space-y-2">
            <h4 class="text-sm font-bold uppercase font-heading text-emerald-300">EduPulse</h4>
            <p class="text-slate-300 leading-relaxed">
              La plateforme qui relie l'école, les enseignants et les parents. Conçue pour l'Afrique, pilotée depuis le Canada.
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-sm font-bold uppercase font-heading text-emerald-300">Contact</h4>
            <p class="text-slate-200">Canada</p>
            <p>
              <a href="https://wa.me/14389855417?text=Bonjour%20EduPulse" target="_blank" rel="noopener" class="text-white font-bold hover:text-ep-green">
                +1 438 985-5417 · WhatsApp
              </a>
            </p>
            <p>
              <a href="mailto:kouonang2002@gmail.com" class="text-white font-semibold hover:text-ep-green">kouonang2002&#64;gmail.com</a>
            </p>
          </div>
          <div class="space-y-2">
            <h4 class="text-sm font-bold uppercase font-heading text-emerald-300">Découvrir</h4>
            <p><a href="#features" class="text-slate-200 hover:text-ep-green font-semibold">Fonctionnalités</a></p>
            <p><a href="#demo" class="text-slate-200 hover:text-ep-green font-semibold">L'application</a></p>
            <p><a href="#pricing" class="text-slate-200 hover:text-ep-green font-semibold">Tarifs établissements</a></p>
          </div>
        </div>

        <div class="pt-4 border-t border-white/10 text-center text-xs text-slate-400">
          <p>© 2026 EduPulse — Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
