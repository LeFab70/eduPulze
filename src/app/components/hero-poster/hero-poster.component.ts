import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-hero-poster',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="hero" class="hero-mesh relative overflow-hidden pt-6 sm:pt-10 pb-12">
      <div class="film-grain"></div>

      <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          <div class="lg:col-span-5 space-y-5 text-left" epReveal="left">
            <h1 class="text-[30px] sm:text-5xl xl:text-[52px] font-black text-ep-navy tracking-tight leading-[1.06] font-heading uppercase">
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

          <div class="lg:col-span-7" epReveal="right" [epDelay]="120">
            <div class="relative rounded-[28px] overflow-hidden shadow-poster min-h-[480px] sm:min-h-[580px] lg:min-h-[700px]">
              <img
                src="/assets/couple-madame-phone.png"
                alt="Madame tient le téléphone, on lit ensemble les notes de l'enfant sur EduPulse"
                class="absolute inset-0 w-full h-full object-cover object-[center_22%] scale-[1.38]"
              />

              <!-- Visages nets ; bas de photo (mains + téléphone) flouté -->
              <div class="couple-blur-band"></div>

              <div class="absolute left-4 sm:left-8 bottom-4 sm:bottom-8 w-[180px] sm:w-[220px] rotate-[-6deg] drop-shadow-2xl">
                <div class="bg-white rounded-[22px] border-[7px] border-slate-950 overflow-hidden">
                  <div class="h-3 bg-slate-950 mx-auto w-16 rounded-b-lg"></div>
                  <div class="px-2.5 pt-1.5 pb-2 space-y-1.5">
                    <div class="flex items-center gap-1.5">
                      <img src="/assets/andy-kouonang.jpg" alt="Andy Kouonang" class="w-6 h-6 rounded-full object-cover border border-ep-green" />
                      <div>
                        <div class="text-[10px] font-black text-ep-navy leading-none">Andy Kouonang</div>
                        <div class="text-[8px] text-slate-500">Classe : 5ᵉ A</div>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-1">
                      <div class="bg-slate-50 rounded-md p-1.5">
                        <div class="text-[7px] font-bold text-slate-400 uppercase">Générale</div>
                        <div class="text-[13px] font-black text-ep-green font-heading leading-none">14,25<span class="text-[8px] text-slate-400">/20</span></div>
                      </div>
                      <div class="bg-slate-50 rounded-md p-1.5">
                        <div class="text-[7px] font-bold text-slate-400 uppercase">Rang</div>
                        <div class="text-[13px] font-black text-ep-navy font-heading leading-none">5/32</div>
                      </div>
                    </div>
                    <div class="space-y-1">
                      <div class="flex justify-between items-center bg-emerald-50 rounded px-1.5 py-1">
                        <span class="text-[8px] font-extrabold text-ep-navy uppercase">Groupe sci.</span>
                        <span class="text-[10px] font-black text-ep-green">15,00 · 4ᵉ</span>
                      </div>
                      <div class="flex justify-between items-center bg-blue-50 rounded px-1.5 py-1">
                        <span class="text-[8px] font-extrabold text-ep-navy uppercase">Groupe litt.</span>
                        <span class="text-[10px] font-black text-blue-700">13,88 · 8ᵉ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroPosterComponent {}
