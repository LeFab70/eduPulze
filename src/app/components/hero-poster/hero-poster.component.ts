import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-hero-poster',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="hero" class="hero-mesh relative overflow-hidden pt-8 sm:pt-12 pb-14">
      <div class="film-grain"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          <div class="lg:col-span-6 space-y-5 text-left" epReveal>
            <h1 class="text-[30px] sm:text-5xl xl:text-[54px] font-black text-ep-navy tracking-tight leading-[1.06] font-heading uppercase">
              Payer de chez vous sans plus faire
              <span class="text-ep-green"> le rang à l'école</span>
            </h1>

            <p class="text-ep-navy font-extrabold text-[15px] sm:text-xl leading-snug uppercase tracking-wide font-heading">
              Payez à votre rythme, suivez le rythme de votre enfant en tout temps.
            </p>

            <p class="text-slate-600 text-[15px] sm:text-[17px] leading-relaxed max-w-xl">
              <strong class="text-ep-navy font-semibold">EduPulse</strong> est la solution complète pour une école connectée, des parents rassurés et des élèves qui réussissent. Notes, absences, bulletins et scolarité — tout est dans votre poche.
            </p>

            <div class="flex flex-wrap items-center gap-3 pt-1">
              <a href="#payment-sim" class="px-5 py-3.5 rounded-xl bg-ep-green hover:bg-ep-greenHover text-white font-extrabold text-sm shadow-lg shadow-ep-green/30 flex items-center gap-2 transition-all hover:-translate-y-0.5">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                Payer par Mobile Money
              </a>
              <a href="#demo" class="px-5 py-3.5 rounded-xl bg-ep-navy hover:bg-ep-navyDark text-white font-bold text-sm shadow-md">
                Voir l'application
              </a>
            </div>
          </div>

          <div class="lg:col-span-6" epReveal>
            <figure class="relative">
              <div class="relative rounded-[28px] overflow-hidden shadow-poster aspect-[4/5] sm:aspect-[5/6] max-h-[580px]">
                <img
                  src="/assets/couple-hero.png"
                  alt="Un couple de parents tenant un téléphone et consultant EduPulse ensemble"
                  class="w-full h-full object-cover object-[center_20%] couple-grade"
                />
                <div class="absolute inset-0 couple-veil"></div>
                <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                  <p class="text-[11px] font-extrabold uppercase tracking-[0.18em] text-emerald-300">Parents connectés</p>
                  <p class="text-sm sm:text-base font-semibold leading-snug mt-1">Ensemble, on tient le téléphone. Notes, absences et scolarité — sans se déplacer.</p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroPosterComponent {}
