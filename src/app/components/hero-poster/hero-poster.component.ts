import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduPulseStateService } from '../../services/edupulse-state.service';

@Component({
  selector: 'app-hero-poster',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="relative pt-6 pb-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      
      <!-- Background Ambient Glow Effects -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600/10 blur-[140px] rounded-full pointer-events-none"></div>
      <div class="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        
        <!-- Grid layout: Text & Poster Content Left / Phone Mockup Right -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Side: Poster Catchy Text Content -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <!-- Security & Sub-system Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wide uppercase shadow-lg">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>ERP & SaaS Multi-Tenant Scolaire (Cameroun & Afrique)</span>
            </div>

            <!-- Poster Main Catchy Headline -->
            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] font-heading">
              PAYER DE CHEZ VOUS SANS PLUS FAIRE <span class="gradient-text-green underline decoration-emerald-500/50 decoration-4">LE RANG À L'ÉCOLE</span>
            </h1>

            <!-- Sub-headline from poster -->
            <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900/80 to-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-bold text-base sm:text-xl leading-snug">
              PAYEZ À VOTRE RYTHME, SUIVEZ LE RYTHME DE VOTRE ENFANT EN TOUT TEMPS
            </div>

            <!-- Description -->
            <p class="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              <strong class="text-white font-semibold">EduPulse</strong> est la solution complète pour une école connectée, des parents rassurés et des élèves qui réussissent. Numérisez inscriptions, présence mobile, bulletins officiels MINESEC et paiement par Mobile Money.
            </p>

            <!-- Key Feature Badges Row -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div class="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-bold">
                <div class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </div>
                <span>Mode Hors-Ligne Pro</span>
              </div>

              <div class="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-bold">
                <div class="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <span>MTN MoMo & Orange</span>
              </div>

              <div class="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 text-xs font-bold col-span-2 sm:col-span-1">
                <div class="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <span>Bulletins PDF Officiels</span>
              </div>
            </div>

            <!-- CTA Row -->
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#payment-sim" class="pulse-button px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/30 flex items-center gap-2 border border-emerald-400/40">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                <span>Simuler un Paiement Mobile Money</span>
              </a>

              <a href="#bulletin-sim" class="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm sm:text-base border border-slate-700 flex items-center gap-2 transition-colors">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                <span>Générer un Bulletin PDF</span>
              </a>
            </div>

          </div>

          <!-- Right Side: Interactive Mobile App Mockup (Exact Poster Phone Representation) -->
          <div class="lg:col-span-5 flex justify-center" id="mobile-app">
            
            <div class="w-full max-w-[370px]">
              
              <!-- Interactive Controls Above Phone -->
              <div class="flex items-center justify-between mb-3 px-2 text-xs text-slate-400">
                <span class="font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Application Parent Live
                </span>
                <span>Cliquer pour basculer :</span>
              </div>

              <!-- Child Selector Pills -->
              <div class="grid grid-cols-2 gap-2 mb-4">
                @for (child of state.children(); track child.id) {
                  <button 
                    (click)="state.selectChild(child.id)"
                    [class]="state.selectedChildId() === child.id 
                      ? 'bg-emerald-600 text-white font-bold border-emerald-400 shadow-md' 
                      : 'bg-slate-900 text-slate-400 hover:text-white border-slate-800'"
                    class="px-3 py-2 rounded-xl border text-xs flex items-center justify-center gap-2 transition-all">
                    <img [src]="child.photoUrl" [alt]="child.name" class="w-5 h-5 rounded-full object-cover border border-white/30" />
                    <span>{{ child.name }} ({{ child.class }})</span>
                  </button>
                }
              </div>

              <!-- Phone Device Outer Shell -->
              <div class="phone-frame bg-slate-950 text-slate-900 font-sans shadow-2xl">
                
                <!-- Notch -->
                <div class="phone-notch"></div>

                <!-- Phone Top Bar -->
                <div class="pt-8 px-5 pb-3 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded-md bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center">EP</div>
                    <span class="font-bold text-sm tracking-tight text-white">EduPulse</span>
                  </div>
                  <div class="relative">
                    <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    <span class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-rose-500"></span>
                  </div>
                </div>

                <!-- Phone Content Area -->
                <div class="p-4 bg-slate-100 text-slate-800 space-y-3.5 min-h-[460px]">
                  
                  <!-- Children Select Header in App -->
                  <div>
                    <span class="text-[11px] font-bold uppercase tracking-wider text-slate-500">Mes enfants</span>
                    <div class="mt-1 flex items-center justify-between p-2.5 bg-white rounded-xl shadow-sm border border-slate-200">
                      <div class="flex items-center gap-2.5">
                        <img [src]="state.activeChild().photoUrl" [alt]="state.activeChild().name" class="w-9 h-9 rounded-full object-cover border-2 border-emerald-500" />
                        <div>
                          <div class="font-extrabold text-sm text-slate-900">{{ state.activeChild().name }}</div>
                          <div class="text-[11px] font-medium text-slate-500">Classe : {{ state.activeChild().class }}</div>
                        </div>
                      </div>
                      <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">Actif</span>
                    </div>
                  </div>

                  <!-- Quick Tab Icons Row from Poster (Notes, Absences, Paiements, Bulletins, Emploi du temps) -->
                  <div class="grid grid-cols-5 gap-1 text-center">
                    <button 
                      (click)="state.setAppTab('notes')"
                      [class]="state.activeAppTab() === 'notes' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-50'"
                      class="p-2 rounded-lg border border-slate-200 text-[10px] font-bold flex flex-col items-center gap-1 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      <span>Notes</span>
                    </button>

                    <button 
                      (click)="state.setAppTab('absences')"
                      [class]="state.activeAppTab() === 'absences' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-50'"
                      class="p-2 rounded-lg border border-slate-200 text-[10px] font-bold flex flex-col items-center gap-1 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>Absences</span>
                    </button>

                    <button 
                      (click)="state.setAppTab('paiements')"
                      [class]="state.activeAppTab() === 'paiements' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-50'"
                      class="p-2 rounded-lg border border-slate-200 text-[10px] font-bold flex flex-col items-center gap-1 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 00-2 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                      <span>Paiements</span>
                    </button>

                    <button 
                      (click)="state.setAppTab('bulletins')"
                      [class]="state.activeAppTab() === 'bulletins' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-50'"
                      class="p-2 rounded-lg border border-slate-200 text-[10px] font-bold flex flex-col items-center gap-1 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      <span>Bulletins</span>
                    </button>

                    <button 
                      (click)="state.setAppTab('emploi')"
                      [class]="state.activeAppTab() === 'emploi' ? 'bg-emerald-600 text-white shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-50'"
                      class="p-2 rounded-lg border border-slate-200 text-[10px] font-bold flex flex-col items-center gap-1 transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      <span>Emploi</span>
                    </button>
                  </div>

                  <!-- Dynamic Tab View -->
                  @switch (state.activeAppTab()) {

                    <!-- 1. NOTES TAB (Poster Mockup) -->
                    @case ('notes') {
                      <!-- Moyenne Card from Poster -->
                      <div class="p-3.5 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
                        <div>
                          <div class="text-[11px] font-bold text-slate-500 uppercase">Moyenne générale</div>
                          <div class="text-xl font-black text-emerald-600">
                            {{ state.activeChild().generalAverage }} <span class="text-xs text-slate-400 font-bold">/ 20</span>
                          </div>
                          <!-- Progress Bar -->
                          <div class="w-28 h-2 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                            <div class="h-full bg-emerald-500 rounded-full" [style.width.%]="(state.activeChild().generalAverage / 20) * 100"></div>
                          </div>
                        </div>

                        <div class="text-right pl-3 border-l border-slate-100">
                          <div class="text-[11px] font-bold text-slate-500 uppercase">Rang</div>
                          <div class="text-lg font-black text-slate-900">{{ state.activeChild().rank }}</div>
                          <div class="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded mt-1">Très Bien</div>
                        </div>
                      </div>

                      <!-- Dernières Notes List -->
                      <div>
                        <div class="flex items-center justify-between mb-1.5">
                          <span class="text-[11px] font-extrabold text-slate-700 uppercase">Dernières notes</span>
                          <span class="text-[10px] text-slate-500">Trimestre 1</span>
                        </div>

                        <div class="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
                          @for (grade of state.activeChild().grades; track grade.subject) {
                            <div class="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between shadow-2xs hover:border-emerald-300 transition-colors">
                              <div class="flex items-center gap-2">
                                <div class="w-6 h-6 rounded bg-blue-50 text-blue-600 font-bold text-[10px] flex items-center justify-center">
                                  {{ grade.subject.substring(0,2).toUpperCase() }}
                                </div>
                                <div>
                                  <div class="text-xs font-bold text-slate-900 leading-tight">{{ grade.subject }}</div>
                                  <div class="text-[9px] text-slate-400 font-medium">Coeff {{ grade.coefficient }} • {{ grade.teacher }}</div>
                                </div>
                              </div>
                              <div class="text-xs font-extrabold" [class.text-emerald-600]="grade.score >= 14" [class.text-amber-600]="grade.score < 14 && grade.score >= 10" [class.text-rose-600]="grade.score < 10">
                                {{ grade.score }} <span class="text-[9px] text-slate-400">/ 20</span>
                              </div>
                            </div>
                          }
                        </div>
                      </div>
                    }

                    <!-- 2. ABSENCES TAB -->
                    @case ('absences') {
                      <div class="p-3.5 bg-white rounded-xl shadow-sm border border-slate-200 space-y-3">
                        <div class="flex items-center justify-between">
                          <span class="text-xs font-bold text-slate-800">Total Absences Trimestre</span>
                          <span class="px-2 py-0.5 bg-rose-100 text-rose-700 text-xs font-extrabold rounded-full">{{ state.activeChild().absencesCount }} h</span>
                        </div>
                        <div class="p-2.5 bg-emerald-50 text-emerald-900 rounded-lg text-xs font-semibold">
                          ✔ Toutes les absences ont été présentées et justifiées par le parent.
                        </div>
                        <div class="text-[11px] text-slate-500">
                          Notification SMS envoyée immédiatement au parent lors de l'appel du professeur.
                        </div>
                      </div>
                    }

                    <!-- 3. PAIEMENTS TAB -->
                    @case ('paiements') {
                      <div class="p-3.5 bg-white rounded-xl shadow-sm border border-slate-200 space-y-2.5">
                        <div class="text-xs font-bold text-slate-900">Scolarité 2026 - 2027</div>
                        <div class="flex justify-between text-xs">
                          <span class="text-slate-500">Payé :</span>
                          <span class="font-extrabold text-emerald-600">{{ state.activeChild().tuitionPaid | number }} FCFA</span>
                        </div>
                        <div class="flex justify-between text-xs">
                          <span class="text-slate-500">Reste à payer :</span>
                          <span class="font-extrabold text-rose-600">{{ state.activeChild().nextDueAmount | number }} FCFA</span>
                        </div>
                        <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div class="bg-emerald-500 h-full" [style.width.%]="(state.activeChild().tuitionPaid / state.activeChild().tuitionTotal) * 100"></div>
                        </div>

                        <a href="#payment-sim" class="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1 shadow-sm transition-colors">
                          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                          <span>Payer tranche via Mobile Money</span>
                        </a>
                      </div>
                    }

                    <!-- 4. BULLETINS TAB -->
                    @case ('bulletins') {
                      <div class="p-3.5 bg-white rounded-xl shadow-sm border border-slate-200 text-center space-y-2">
                        <div class="w-10 h-10 mx-auto rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        </div>
                        <div class="text-xs font-bold text-slate-900">Bulletin Trimestre 1 - Disponible</div>
                        <div class="text-[10px] text-slate-500">Signé par le Proviseur & Conforme MINESEC</div>
                        <a href="#bulletin-sim" class="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-bold inline-block hover:bg-slate-800">
                          Télécharger le PDF
                        </a>
                      </div>
                    }

                    <!-- 5. EMPLOI DU TEMPS TAB -->
                    @case ('emploi') {
                      <div class="p-3.5 bg-white rounded-xl shadow-sm border border-slate-200 space-y-2 text-xs">
                        <div class="font-bold text-slate-900 border-b pb-1">Aujourd'hui (Jeudi)</div>
                        <div class="flex justify-between text-slate-600">
                          <span>07h30 - 09h30</span>
                          <span class="font-semibold text-slate-900">Mathématiques (Salle 12)</span>
                        </div>
                        <div class="flex justify-between text-slate-600">
                          <span>10h00 - 12h00</span>
                          <span class="font-semibold text-slate-900">Physique - Chimie</span>
                        </div>
                      </div>
                    }
                  }

                </div>

                <!-- Phone Bottom Bar Navigation -->
                <div class="px-4 py-2 bg-slate-900 text-slate-400 flex items-center justify-around border-t border-slate-800 text-[10px] font-bold">
                  <div class="flex flex-col items-center text-emerald-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    <span>Accueil</span>
                  </div>
                  <div class="flex flex-col items-center hover:text-white">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    <span>Enfants</span>
                  </div>
                  <div class="flex flex-col items-center hover:text-white">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    <span>Alertes</span>
                  </div>
                  <div class="flex flex-col items-center hover:text-white">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    <span>Profil</span>
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
export class HeroPosterComponent {
  state = inject(EduPulseStateService);
}
