import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-payment-section',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="payment-sim" class="py-16 bg-ep-lightBg relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-100 shadow-poster grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" epReveal>

          <div class="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div>
              <h2 class="text-xl sm:text-2xl font-black text-ep-navy uppercase tracking-tight font-heading">
                Payez facilement avec
              </h2>
              <p class="text-sm text-slate-500 font-medium mt-1">MTN Mobile Money, Orange Money, Moov Money et Visa — sans file d'attente.</p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div class="p-3.5 bg-ep-momoYellow text-slate-950 rounded-2xl font-black text-center shadow-sm flex flex-col items-center justify-center">
                <span class="text-xs font-black tracking-tighter uppercase font-heading">MTN</span>
                <span class="text-[11px] font-black">Mobile Money</span>
              </div>
              <div class="p-3.5 bg-ep-orangeMoney text-white rounded-2xl font-black text-center shadow-sm flex flex-col items-center justify-center">
                <span class="text-xs font-black tracking-tighter uppercase font-heading">Orange</span>
                <span class="text-[11px] font-black">Money</span>
              </div>
              <div class="p-3.5 bg-ep-moovBlue text-white rounded-2xl font-black text-center shadow-sm flex flex-col items-center justify-center">
                <span class="text-xs font-black tracking-tighter uppercase font-heading">Moov</span>
                <span class="text-[11px] font-black">Money</span>
              </div>
              <div class="p-3.5 bg-ep-navy text-white rounded-2xl font-black text-center shadow-sm flex flex-col items-center justify-center">
                <span class="text-xs font-black tracking-widest text-blue-300 uppercase font-heading">Visa</span>
                <span class="text-[11px] font-semibold text-slate-300">Carte</span>
              </div>
            </div>

            <div class="relative rounded-2xl overflow-hidden h-44 sm:h-52">
              <img
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=1200&q=80"
                alt="Parent réglant la scolarité depuis son téléphone"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-ep-navy/70 to-transparent"></div>
              <p class="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold">La scolarité se règle en quelques secondes, depuis le salon.</p>
            </div>
          </div>

          <div class="lg:col-span-5 bg-ep-navy text-white rounded-2xl p-7 sm:p-8 flex flex-col justify-center space-y-6">
            <div class="space-y-5">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-ep-green text-white flex items-center justify-center font-bold text-sm shrink-0">✓</div>
                <span class="text-lg font-extrabold font-heading">Paiement sécurisé</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-ep-green text-white flex items-center justify-center font-bold text-sm shrink-0">✓</div>
                <span class="text-lg font-extrabold font-heading">Reçus instantanés</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-ep-green text-white flex items-center justify-center font-bold text-sm shrink-0">✓</div>
                <span class="text-lg font-extrabold font-heading">Paiement à votre rythme</span>
              </div>
            </div>
            <p class="text-sm text-slate-300 border-t border-white/10 pt-4 leading-relaxed">
              Dès la confirmation, un reçu numérique est envoyé au parent. Plus besoin de faire le rang à la caisse.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PaymentSectionComponent {}
