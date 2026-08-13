import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService } from '../../services/edupulse-state.service';

@Component({
  selector: 'app-pricing-calculator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="pricing" class="py-16 bg-slate-900/80 border-t border-slate-800 relative">
      
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span class="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
            Modèle Économique Transparent & Rentable
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Tarification SaaS B2B par Établissement
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Abonnement mensuel ou annuel adapté à la taille de votre école avec 2 mois gratuits sur le paiement annuel.
          </p>
        </div>

        <!-- Billing Cycle Switcher -->
        <div class="flex items-center justify-center gap-3 mb-10">
          <span [class.text-white]="!isAnnual()" [class.text-slate-400]="isAnnual()" class="text-sm font-bold">Mensuel</span>
          <button 
            (click)="isAnnual.set(!isAnnual())"
            class="w-12 h-6 rounded-full bg-slate-800 p-1 flex items-center transition-colors border border-slate-700">
            <div class="w-4 h-4 rounded-full bg-emerald-400 transform transition-transform" [class.translate-x-6]="isAnnual()"></div>
          </button>
          <span [class.text-white]="isAnnual()" [class.text-slate-400]="!isAnnual()" class="text-sm font-bold flex items-center gap-1.5">
            <span>Annuel</span>
            <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold border border-emerald-500/40">2 Mois Offerts</span>
          </span>
        </div>

        <!-- Student Count Range Slider Card -->
        <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/30 max-w-4xl mx-auto mb-12 space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
              <label class="text-xs font-bold uppercase tracking-wider text-slate-400">Taille de votre établissement scolaire</label>
              <div class="text-2xl font-black text-white font-heading">
                {{ state.studentCount() }} <span class="text-sm text-emerald-400 font-bold">Élèves inscrits</span>
              </div>
            </div>

            <div class="text-right">
              <span class="text-xs text-slate-400">Coût estimé par élève :</span>
              <div class="text-lg font-black text-emerald-400">
                ~{{ state.calculatedPricing().perStudentCost }} FCFA <span class="text-xs font-normal text-slate-400">/ mois</span>
              </div>
            </div>
          </div>

          <!-- Slider Input -->
          <input 
            type="range" 
            min="100" 
            max="1500" 
            step="25"
            [value]="state.studentCount()"
            (input)="state.setStudentCount(+$any($event.target).value)"
            class="w-full h-3 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500 border border-slate-800"
          />

          <div class="flex justify-between text-[11px] font-bold text-slate-400 font-mono">
            <span>100 Élèves (Starter)</span>
            <span>500 Élèves (Pro)</span>
            <span>1500+ Élèves (Enterprise)</span>
          </div>
        </div>

        <!-- 3 Offer Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Offer 1: Starter -->
          <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div class="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">Offre Starter</div>
              <h3 class="text-xl font-bold text-white font-heading">&lt; 300 Élèves</h3>
              <p class="text-xs text-slate-400 mt-1">Pour écoles maternelles et primaires</p>
              
              <div class="my-4">
                <span class="text-3xl font-black text-white font-heading">
                  {{ isAnnual() ? '250 000' : '25 000' }}
                </span>
                <span class="text-xs text-slate-400 font-bold"> FCFA / {{ isAnnual() ? 'an' : 'mois' }}</span>
              </div>

              <ul class="space-y-2 text-xs text-slate-300">
                <li class="flex items-center gap-2">✓ Multi-tenant isolé</li>
                <li class="flex items-center gap-2">✓ Saisie mobile offline</li>
                <li class="flex items-center gap-2">✓ Bulletins PDF MINESEC</li>
                <li class="flex items-center gap-2">✓ App Parent basic</li>
              </ul>
            </div>

            <button class="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs">
              Choisir Starter
            </button>
          </div>

          <!-- Offer 2: Pro (Highlighted) -->
          <div class="glass-card p-6 rounded-2xl border-2 border-emerald-500 bg-emerald-950/20 space-y-4 shadow-xl shadow-emerald-500/10 flex flex-col justify-between relative">
            <span class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black uppercase tracking-widest shadow">
              Le Plus Populaire
            </span>

            <div>
              <div class="text-xs font-bold text-emerald-300 uppercase tracking-widest mb-1">Offre Pro</div>
              <h3 class="text-xl font-bold text-white font-heading">300 à 800 Élèves</h3>
              <p class="text-xs text-slate-300 mt-1">Pour collèges et lycées dynamiques</p>
              
              <div class="my-4">
                <span class="text-3xl font-black text-white font-heading">
                  {{ isAnnual() ? '500 000' : '50 000' }}
                </span>
                <span class="text-xs text-slate-300 font-bold"> FCFA / {{ isAnnual() ? 'an' : 'mois' }}</span>
              </div>

              <ul class="space-y-2 text-xs text-slate-200">
                <li class="flex items-center gap-2">✔ Toutes fonctions Starter</li>
                <li class="flex items-center gap-2">✔ Recouvrement Mobile Money Direct</li>
                <li class="flex items-center gap-2">✔ Module IA d'appréciations</li>
                <li class="flex items-center gap-2">✔ Relances SMS Automatisées</li>
                <li class="flex items-center gap-2">✔ Dashboard Direction & Caisse</li>
              </ul>
            </div>

            <button class="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/30">
              Choisir Pro
            </button>
          </div>

          <!-- Offer 3: Enterprise -->
          <div class="glass-card p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div class="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1">Offre Enterprise</div>
              <h3 class="text-xl font-bold text-white font-heading">&gt; 800 Élèves</h3>
              <p class="text-xs text-slate-400 mt-1">Pour complexes scolaires & groupes</p>
              
              <div class="my-4">
                <span class="text-3xl font-black text-white font-heading">Sur Devis</span>
                <span class="text-xs text-slate-400 font-bold"> (Dès 120 000 FCFA)</span>
              </div>

              <ul class="space-y-2 text-xs text-slate-300">
                <li class="flex items-center gap-2">✓ Multi-Établissements centralisé</li>
                <li class="flex items-center gap-2">✓ Support Dédié Douala / Yaoundé</li>
                <li class="flex items-center gap-2">✓ Formation sur site des enseignants</li>
                <li class="flex items-center gap-2">✓ Hébergement dédié et SSO</li>
              </ul>
            </div>

            <button class="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs">
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
