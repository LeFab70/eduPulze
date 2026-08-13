import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService } from '../../services/edupulse-state.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-pricing-calculator',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section id="pricing" class="py-16 bg-ep-lightBg border-t border-slate-200">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-2" epReveal>
          <span class="text-xs font-extrabold uppercase tracking-widest text-ep-green bg-ep-lightGreen px-3 py-1 rounded-full">
            Pour les établissements
          </span>
          <h2 class="text-3xl sm:text-4xl font-black text-ep-navy font-heading">
            Une offre claire, selon la taille de votre école
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            2 mois offerts sur l'abonnement annuel. Sans engagement surprise.
          </p>
        </div>

        <!-- Annual Switch -->
        <div class="flex items-center justify-center gap-3 mb-10">
          <span [class.text-ep-navy]="!isAnnual()" [class.text-slate-400]="isAnnual()" class="text-sm font-bold">Mensuel</span>
          <button 
            (click)="isAnnual.set(!isAnnual())"
            class="w-12 h-6 rounded-full bg-slate-300 p-1 flex items-center transition-colors">
            <div class="w-4 h-4 rounded-full bg-ep-green transform transition-transform" [class.translate-x-6]="isAnnual()"></div>
          </button>
          <span [class.text-ep-navy]="isAnnual()" [class.text-slate-400]="!isAnnual()" class="text-sm font-bold flex items-center gap-1.5">
            <span>Annuel</span>
            <span class="px-2 py-0.5 rounded-full bg-ep-lightGreen text-ep-green text-[10px] font-extrabold border border-ep-green/30">2 Mois Offerts</span>
          </span>
        </div>

        <!-- Slider Card -->
        <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl max-w-4xl mx-auto mb-12 space-y-6" epReveal="up" [epDelay]="80">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
              <label class="text-xs font-bold uppercase text-slate-500">Nombre d'élèves de l'école</label>
              <div class="text-3xl font-black text-ep-navy font-heading">
                {{ state.studentCount() }} <span class="text-base text-ep-green font-bold">Élèves</span>
              </div>
            </div>

            <div class="text-right">
              <span class="text-xs text-slate-500 font-semibold">Coût estimé par élève / mois :</span>
              <div class="text-xl font-black text-ep-green">
                ~{{ state.calculatedPricing().perStudentCost }} FCFA
              </div>
            </div>
          </div>

          <input 
            type="range" 
            min="100" 
            max="1500" 
            step="25"
            [value]="state.studentCount()"
            (input)="state.setStudentCount(+$any($event.target).value)"
            class="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-ep-green"
          />

          <div class="flex justify-between text-[11px] font-bold text-slate-500 font-mono">
            <span>100 Élèves</span>
            <span>500 Élèves</span>
            <span>1500+ Élèves</span>
          </div>
        </div>

        <!-- 3 Offer Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6" epReveal="scale" [epDelay]="160">
          
          <!-- Starter -->
          <div class="bg-white p-6 rounded-3xl border border-slate-200 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="text-xs font-extrabold text-ep-green uppercase tracking-widest mb-1">Offre Starter</div>
              <h3 class="text-xl font-bold text-ep-navy font-heading">&lt; 300 Élèves</h3>
              
              <div class="my-4">
                <span class="text-3xl font-black text-ep-navy font-heading">
                  {{ isAnnual() ? '250 000' : '25 000' }}
                </span>
                <span class="text-xs text-slate-500 font-bold"> FCFA / {{ isAnnual() ? 'an' : 'mois' }}</span>
              </div>

              <ul class="space-y-2 text-xs text-slate-600 font-semibold">
                <li>✓ Multi-tenant isolé</li>
                <li>✓ Saisie mobile offline</li>
                <li>✓ Bulletins PDF MINESEC</li>
                <li>✓ App Parent basic</li>
              </ul>
            </div>

            <button class="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs">
              Choisir Starter
            </button>
          </div>

          <!-- Pro -->
          <div class="bg-white p-6 rounded-3xl border-2 border-ep-green shadow-xl space-y-4 flex flex-col justify-between relative">
            <span class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-ep-green text-white text-[10px] font-black uppercase">
              Recommandé
            </span>

            <div>
              <div class="text-xs font-extrabold text-ep-green uppercase tracking-widest mb-1">Offre Pro</div>
              <h3 class="text-xl font-bold text-ep-navy font-heading">300 à 800 Élèves</h3>
              
              <div class="my-4">
                <span class="text-3xl font-black text-ep-navy font-heading">
                  {{ isAnnual() ? '500 000' : '50 000' }}
                </span>
                <span class="text-xs text-slate-500 font-bold"> FCFA / {{ isAnnual() ? 'an' : 'mois' }}</span>
              </div>

              <ul class="space-y-2 text-xs text-slate-700 font-semibold">
                <li>✔ Toutes fonctions Starter</li>
                <li>✔ Recouvrement Mobile Money Direct</li>
                <li>✔ Module IA d'appréciations</li>
                <li>✔ Relances SMS Automatisées</li>
                <li>✔ Dashboard Direction & Caisse</li>
              </ul>
            </div>

            <button class="w-full py-2.5 rounded-xl bg-ep-green hover:bg-ep-greenHover text-white font-extrabold text-xs shadow-md">
              Choisir Pro
            </button>
          </div>

          <!-- Enterprise -->
          <div class="bg-white p-6 rounded-3xl border border-slate-200 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="text-xs font-extrabold text-purple-600 uppercase tracking-widest mb-1">Offre Enterprise</div>
              <h3 class="text-xl font-bold text-ep-navy font-heading">&gt; 800 Élèves</h3>
              
              <div class="my-4">
                <span class="text-3xl font-black text-ep-navy font-heading">Sur Devis</span>
                <span class="text-xs text-slate-500 font-bold"> (Dès 120 000 FCFA)</span>
              </div>

              <ul class="space-y-2 text-xs text-slate-600 font-semibold">
                <li>✓ Multi-Établissements centralisé</li>
                <li>✓ Support Dédié 24/7 Douala/Yaoundé</li>
                <li>✓ Formation sur site des profs</li>
                <li>✓ Hébergement dédié & SSO</li>
              </ul>
            </div>

            <button class="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs">
              Contacter l'Équipe SaaS
            </button>
          </div>

        </div>

      </div>

    </section>
  `
})
export class PricingCalculatorComponent {
  state = inject(EduPulseStateService);
  isAnnual = signal<boolean>(true);
}
