import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService } from '../../services/edupulse-state.service';

@Component({
  selector: 'app-hero-poster',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="bg-gradient-to-b from-white via-ep-lightBg to-white py-10 lg:py-16 relative overflow-hidden">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Top Poster Header Grid: Main Headline Left / Interactive Phone Right -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Poster Main Catchy Headlines -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ep-lightGreen text-ep-green font-extrabold text-xs tracking-wider uppercase border border-ep-green/30">
              <span class="w-2.5 h-2.5 rounded-full bg-ep-green animate-pulse"></span>
              <span>ERP & SaaS Multi-Tenant Scolaire (Cameroun & Afrique)</span>
            </div>

            <!-- Big Catchy Headline from Poster -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-ep-navy tracking-tight leading-[1.08] font-heading">
              PAYER DE CHEZ VOUS SANS PLUS FAIRE <span class="text-ep-green block sm:inline">LE RANG À L'ÉCOLE</span>
            </h1>

            <!-- Subheader from Poster -->
            <div class="p-4 sm:p-5 rounded-2xl bg-white border-2 border-ep-green/40 shadow-sm text-ep-navy font-extrabold text-base sm:text-xl leading-snug">
              <span class="text-ep-green uppercase block text-xs font-black tracking-widest mb-1">Engagé avec les parents</span>
              PAYEZ À VOTRE RYTHME, SUIVEZ LE RYTHME DE VOTRE ENFANT EN TOUT TEMPS
            </div>

            <!-- Intro text -->
            <p class="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              <strong class="text-ep-navy font-semibold">EduPulse</strong> est la solution complète pour une école connectée, des parents rassurés et des élèves qui réussissent.
            </p>

            <!-- Real-life Photo Image Card Representation of Parents -->
            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&auto=format&fit=crop&q=80" 
                alt="Parents EduPulse" 
                class="w-16 h-16 rounded-xl object-cover border-2 border-ep-green shrink-0" 
              />
              <div class="text-xs text-slate-700">
                <div class="font-extrabold text-sm text-ep-navy">Parents Connectés en Temps Réel</div>
                <p class="text-slate-500">"Plus besoin de se déplacer aux guichets de l'école. Les notes, les absences et les frais de scolarité sont consultables et réglables à tout moment."</p>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#payment-sim" class="px-6 py-3.5 rounded-xl bg-ep-green hover:bg-ep-greenHover text-white font-extrabold text-sm sm:text-base shadow-lg shadow-ep-green/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                <span>Payer par Mobile Money</span>
              </a>

              <a href="#bulletin-sim" class="px-6 py-3.5 rounded-xl bg-ep-navy hover:bg-ep-navyDark text-white font-bold text-sm sm:text-base shadow-md flex items-center gap-2 transition-all">
                <svg class="w-5 h-5 text-ep-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                <span>Voir Bulletin Officiel PDF</span>
              </a>
            </div>

          </div>

          <!-- Right Column: Interactive Smartphone Mockup (Identical to Poster Image) -->
          <div class="lg:col-span-5 flex justify-center" id="mobile-app">
            
            <div class="w-full max-w-[360px]">
              
              <!-- Child Selector Bar Above Phone -->
              <div class="flex items-center justify-between mb-2 px-1 text-xs text-slate-500 font-bold">
                <span>Changer d'enfant :</span>
                <span class="text-ep-green flex items-center gap-1">
                  <span class="w-2 h-2 rounded-full bg-ep-green animate-ping"></span>
                  Signal Actif
                </span>
              </div>

              <div class="grid grid-cols-2 gap-2 mb-3">
                @for (child of state.children(); track child.id) {
                  <button 
                    (click)="state.selectChild(child.id)"
                    [class]="state.selectedChildId() === child.id 
                      ? 'bg-ep-navy text-white font-bold border-ep-navy shadow' 
                      : 'bg-white text-slate-600 hover:bg-slate-100 border-slate-300'"
                    class="px-3 py-1.5 rounded-xl border text-xs flex items-center justify-center gap-2 transition-all">
                    <img [src]="child.photoUrl" [alt]="child.name" class="w-5 h-5 rounded-full object-cover" />
                    <span>{{ child.name }} ({{ child.class }})</span>
                  </button>
                }
              </div>

              <!-- Phone Outer Shell (Light White / Dark Slate Rim matching Poster) -->
              <div class="phone-frame-light">
                
                <!-- Phone Notch -->
                <div class="phone-notch-light"></div>

                <!-- Phone Top Bar -->
                <div class="pt-7 px-4 pb-2.5 bg-ep-navy text-white flex items-center justify-between border-b border-ep-navyDark">
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-md bg-ep-green text-white font-black text-xs flex items-center justify-center">EP</div>
                    <span class="font-extrabold text-sm tracking-tight text-white font-heading">EduPulse</span>
                  </div>
                  <div class="relative">
                    <svg class="w-5 h-5 text-ep-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    <span class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500"></span>
                  </div>
                </div>

                <!-- Phone Screen Content Area -->
                <div class="p-3.5 bg-slate-50 text-slate-900 space-y-3 min-h-[440px]">
                  
                  <!-- Mes Enfants Header in App -->
                  <div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Mes enfants</span>
                    <div class="mt-1 flex items-center justify-between p-2 bg-white rounded-xl shadow-xs border border-slate-200">
                      <div class="flex items-center gap-2">
                        <img [src]="state.activeChild().photoUrl" [alt]="state.activeChild().name" class="w-8 h-8 rounded-full object-cover border-2 border-ep-green" />
                        <div>
                          <div class="font-extrabold text-xs text-ep-navy leading-tight">{{ state.activeChild().name }}</div>
                          <div class="text-[10px] font-medium text-slate-500">Classe : {{ state.activeChild().class }}</div>
                        </div>
                      </div>
                      <span class="px-2 py-0.5 rounded-full bg-ep-lightGreen text-ep-green text-[9px] font-extrabold">Actif</span>
                    </div>
                  </div>

                  <!-- Quick Navigation Icons Bar from Poster (Notes, Absences, Paiements, Bulletins, Emploi du temps) -->
                  <div class="grid grid-cols-5 gap-1 text-center">
                    <button 
                      (click)="state.setAppTab('notes')"
                      [class]="state.activeAppTab() === 'notes' ? 'bg-ep-green text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100'"
                      class="p-1.5 rounded-lg border border-slate-200 text-[9px] font-extrabold flex flex-col items-center gap-1 transition-colors">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      <span>Notes</span>
                    </button>

                    <button 
                      (click)="state.setAppTab('absences')"
                      [class]="state.activeAppTab() === 'absences' ? 'bg-ep-green text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100'"
                      class="p-1.5 rounded-lg border border-slate-200 text-[9px] font-extrabold flex flex-col items-center gap-1 transition-colors">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>Absences</span>
                    </button>

                    <button 
                      (click)="state.setAppTab('paiements')"
                      [class]="state.activeAppTab() === 'paiements' ? 'bg-ep-green text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100'"
                      class="p-1.5 rounded-lg border border-slate-200 text-[9px] font-extrabold flex flex-col items-center gap-1 transition-colors">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 00-2 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                      <span>Paiements</span>
                    </button>

                    <button 
                      (click)="state.setAppTab('bulletins')"
                      [class]="state.activeAppTab() === 'bulletins' ? 'bg-ep-green text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100'"
                      class="p-1.5 rounded-lg border border-slate-200 text-[9px] font-extrabold flex flex-col items-center gap-1 transition-colors">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      <span>Bulletins</span>
                    </button>

                    <button 
                      (click)="state.setAppTab('emploi')"
                      [class]="state.activeAppTab() === 'emploi' ? 'bg-ep-green text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100'"
                      class="p-1.5 rounded-lg border border-slate-200 text-[9px] font-extrabold flex flex-col items-center gap-1 transition-colors">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      <span>Emploi</span>
                    </button>
                  </div>

                  <!-- Dynamic Tab Area -->
                  @switch (state.activeAppTab()) {
                    @case ('notes') {
                      <!-- Moyenne Card from Poster (14,25 / 20 & Rang 5 / 32) -->
                      <div class="p-3 bg-white rounded-xl shadow-xs border border-slate-200 flex items-center justify-between">
                        <div>
                          <div class="text-[10px] font-bold text-slate-500 uppercase">Moyenne générale</div>
                          <div class="text-xl font-black text-ep-green font-heading">
                            {{ state.activeChild().generalAverage }} <span class="text-xs text-slate-400 font-bold">/ 20</span>
                          </div>
                          <!-- Green Progress Bar -->
                          <div class="w-24 h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden">
                            <div class="h-full bg-ep-green rounded-full" [style.width.%]="(state.activeChild().generalAverage / 20) * 100"></div>
                          </div>
                        </div>

                        <div class="text-right pl-3 border-l border-slate-100">
                          <div class="text-[10px] font-bold text-slate-500 uppercase">Rang</div>
                          <div class="text-base font-black text-ep-navy font-heading">{{ state.activeChild().rank }}</div>
                        </div>
                      </div>

                      <!-- Dernières Notes List from Poster -->
                      <div>
                        <div class="flex items-center justify-between mb-1">
                          <span class="text-[10px] font-extrabold text-slate-700 uppercase">Dernières notes</span>
                          <span class="text-[9px] text-slate-400">Trimestre 1</span>
                        </div>

                        <div class="space-y-1 max-h-[190px] overflow-y-auto pr-0.5">
                          @for (grade of state.activeChild().grades; track grade.subject) {
                            <div class="p-2 bg-white rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                              <div class="flex items-center gap-1.5">
                                <div class="w-5 h-5 rounded bg-blue-50 text-blue-600 font-bold text-[9px] flex items-center justify-center">
                                  {{ grade.subject.substring(0,2).toUpperCase() }}
                                </div>
                                <span class="font-bold text-slate-800 text-[11px]">{{ grade.subject }}</span>
                              </div>
                              <div class="font-black text-ep-navy text-[11px]">
                                {{ grade.score }} <span class="text-[9px] text-slate-400 font-normal">/ 20</span>
                              </div>
                            </div>
                          }
                        </div>
                      </div>
                    }

                    @case ('absences') {
                      <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-2">
                        <div class="font-bold text-slate-900">Total Absences : {{ state.activeChild().absencesCount }} h</div>
                        <p class="text-[10px] text-slate-500">Toutes les absences sont justifiées par le tuteur.</p>
                      </div>
                    }

                    @case ('paiements') {
                      <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-2">
                        <div class="font-bold text-slate-900">Paiement Scolarité</div>
                        <div class="text-[11px] text-emerald-600 font-bold">Payé : {{ state.activeChild().tuitionPaid | number }} FCFA</div>
                        <a href="#payment-sim" class="block text-center py-1.5 bg-ep-green text-white rounded font-bold text-[10px]">Payer tranche</a>
                      </div>
                    }

                    @case ('bulletins') {
                      <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs text-center space-y-1.5">
                        <div class="font-bold text-slate-900">Bulletin T1 Disponible</div>
                        <a href="#bulletin-sim" class="inline-block px-3 py-1 bg-ep-navy text-white text-[10px] font-bold rounded">Télécharger PDF</a>
                      </div>
                    }

                    @case ('emploi') {
                      <div class="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
                        <div class="font-bold text-slate-900">Aujourd'hui</div>
                        <p class="text-[10px] text-slate-600">07h30 - 09h30 : Mathématiques</p>
                      </div>
                    }
                  }

                </div>

                <!-- Phone Bottom Bar -->
                <div class="px-4 py-2 bg-ep-navy text-slate-400 flex items-center justify-around text-[9px] font-bold">
                  <span class="text-ep-green">Accueil</span>
                  <span>Enfants</span>
                  <span>Alertes</span>
                  <span>Profil</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  `
})
export class HeroPosterComponent {
  state = inject(EduPulseStateService);
}
