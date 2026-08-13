import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { BulletinGeneratorComponent } from '../simulators/bulletin-generator/bulletin-generator.component';

@Component({
  selector: 'app-demo-gallery',
  standalone: true,
  imports: [CommonModule, RevealDirective, BulletinGeneratorComponent],
  template: `
    <section id="demo" class="py-16 bg-white border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

        <div class="text-center max-w-3xl mx-auto space-y-3" epReveal>
          <span class="text-xs font-bold uppercase tracking-widest text-ep-green bg-ep-lightGreen px-3 py-1 rounded-full">L'application en images</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-ep-navy font-heading">Toute l'école, sur le téléphone</h2>
          <p class="text-slate-500">Parent, enseignant, caisse, direction — notes, absences, conseil de classe et alertes. Sans simulation.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 items-start">
          <!-- Parent phone -->
          <div class="space-y-4 phone-stage" epReveal="scale" [epDelay]="0">
            <div class="phone-frame-light">
              <div class="phone-notch-light"></div>
              <div class="pt-7 px-4 pb-2 bg-white">
                <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Mes enfants</div>
                <div class="mt-1 flex items-center gap-2">
                  <img src="/assets/andy-kouonang.jpg" alt="Andy Kouonang" class="w-8 h-8 rounded-full object-cover border-2 border-ep-green" />
                  <div>
                    <div class="font-extrabold text-xs text-ep-navy">Andy Kouonang</div>
                    <div class="text-[10px] text-slate-500">Classe : 5ᵉ A</div>
                  </div>
                </div>
              </div>
              <div class="px-3 pb-2 grid grid-cols-5 gap-1 text-center">
                <div class="p-1.5 rounded-lg bg-ep-green text-white text-[8px] font-extrabold">Notes</div>
                <div class="p-1.5 rounded-lg bg-slate-50 text-slate-600 text-[8px] font-extrabold">Absences</div>
                <div class="p-1.5 rounded-lg bg-slate-50 text-slate-600 text-[8px] font-extrabold">Paiements</div>
                <div class="p-1.5 rounded-lg bg-slate-50 text-slate-600 text-[8px] font-extrabold">Bulletins</div>
                <div class="p-1.5 rounded-lg bg-slate-50 text-slate-600 text-[8px] font-extrabold">Emploi</div>
              </div>
              <div class="px-3.5 pb-4 space-y-2 min-h-[280px] bg-white">
                <div class="grid grid-cols-2 gap-2">
                  <div class="p-2.5 bg-slate-50 rounded-xl">
                    <div class="text-[9px] font-bold text-slate-500 uppercase">Moyenne</div>
                    <div class="text-lg font-black text-ep-green font-heading">14,25 <span class="text-[10px] text-slate-400">/ 20</span></div>
                    <div class="h-1.5 bg-slate-200 rounded-full mt-1"><div class="h-full w-[71%] bg-ep-green rounded-full"></div></div>
                  </div>
                  <div class="p-2.5 bg-slate-50 rounded-xl">
                    <div class="text-[9px] font-bold text-slate-500 uppercase">Rang</div>
                    <div class="text-lg font-black text-ep-navy font-heading">5 / 32</div>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="p-2 rounded-xl bg-emerald-50 border border-emerald-100">
                    <div class="text-[8px] font-extrabold text-emerald-700 uppercase">Groupe sci.</div>
                    <div class="text-sm font-black text-ep-navy font-heading">15,00</div>
                    <div class="text-[9px] font-bold text-emerald-700">Rang 4 / 32</div>
                  </div>
                  <div class="p-2 rounded-xl bg-blue-50 border border-blue-100">
                    <div class="text-[8px] font-extrabold text-blue-700 uppercase">Groupe litt.</div>
                    <div class="text-sm font-black text-ep-navy font-heading">13,88</div>
                    <div class="text-[9px] font-bold text-blue-700">Rang 8 / 32</div>
                  </div>
                </div>
                @for (g of parentGrades; track g.s) {
                  <div class="px-2 py-1.5 bg-slate-50 rounded-md flex justify-between text-[11px]">
                    <span class="font-bold text-slate-800">{{ g.s }}</span>
                    <span class="font-black text-ep-navy">{{ g.n }}/20</span>
                  </div>
                }
              </div>
              <div class="px-3 py-2.5 bg-white border-t border-slate-100 flex justify-around text-[8px] font-bold text-slate-400">
                <span class="text-ep-green">Accueil</span><span>Enfants</span><span>Alertes</span><span>Profil</span>
              </div>
            </div>
            <p class="text-center text-sm font-bold text-ep-navy font-heading">Espace parent</p>
          </div>

          <!-- Teacher phone -->
          <div class="space-y-4 phone-stage" style="animation-delay: 0.4s" epReveal="scale" [epDelay]="80">
            <div class="phone-frame-light">
              <div class="phone-notch-light"></div>
              <div class="pt-7 px-4 pb-3 bg-ep-navy text-white">
                <div class="text-[10px] font-bold uppercase tracking-wider text-emerald-300">Espace enseignant</div>
                <div class="font-extrabold text-sm mt-0.5">Saisie des notes</div>
                <div class="text-[10px] text-slate-300">5ᵉ A · Mathématiques</div>
              </div>
              <div class="px-3.5 py-3 space-y-2 min-h-[340px] bg-slate-50">
                @for (s of teacherRows; track s.name) {
                  <div class="p-2.5 bg-white rounded-xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <div class="text-[11px] font-extrabold text-ep-navy">{{ s.name }}</div>
                      <div class="text-[9px] text-slate-400">{{ s.mat }}</div>
                    </div>
                    <div class="text-sm font-black text-ep-green font-heading">{{ s.note }}<span class="text-[9px] text-slate-400">/20</span></div>
                  </div>
                }
                <div class="p-2.5 rounded-xl bg-ep-lightGreen text-ep-green text-[10px] font-bold text-center">
                  Synchronisé · réseau 4G
                </div>
              </div>
            </div>
            <p class="text-center text-sm font-bold text-ep-navy font-heading">Espace enseignant</p>
          </div>

          <!-- Payment phone -->
          <div class="space-y-4 phone-stage" style="animation-delay: 0.8s" epReveal="scale" [epDelay]="160">
            <div class="phone-frame-light">
              <div class="phone-notch-light"></div>
              <div class="pt-7 px-4 pb-2 bg-white">
                <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Scolarité</div>
                <div class="font-extrabold text-sm text-ep-navy">Andy Kouonang · 5ᵉ A</div>
              </div>
              <div class="px-3.5 pb-0 space-y-2.5 min-h-[340px] bg-white flex flex-col overflow-hidden">
                <div class="p-2.5 rounded-xl bg-slate-50">
                  <div class="text-[10px] text-slate-500 font-bold uppercase">Tranche 2</div>
                  <div class="text-xl font-black text-ep-navy font-heading">50 000 <span class="text-sm">FCFA</span></div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="p-2 rounded-lg bg-ep-momoYellow text-[10px] font-black text-center">MTN MoMo</div>
                  <div class="p-2 rounded-lg bg-ep-orangeMoney text-white text-[10px] font-black text-center">Orange</div>
                </div>
                <div class="p-2.5 rounded-xl bg-ep-lightGreen border border-ep-green/20 text-center">
                  <div class="text-ep-green font-black text-xs">Paiement confirmé ✓</div>
                  <div class="text-[9px] text-slate-600 mt-0.5">Reçu généré — voir ci-dessous</div>
                </div>

                <div class="mt-auto relative -mx-1.5 pt-1">
                  <div class="bg-[#fffdf8] border border-amber-200 rounded-t-xl px-3 pt-3 pb-8 shadow-md font-mono text-slate-800">
                    <div class="text-center border-b border-dashed border-slate-300 pb-2 mb-2">
                      <div class="text-[8px] uppercase tracking-widest text-slate-500">Collège Bilingue de l'Excellence</div>
                      <div class="text-[11px] font-black font-heading text-ep-navy">REÇU DE CAISSE</div>
                      <div class="text-[9px] font-bold text-slate-600">N° REC-EP-884211</div>
                    </div>
                    <div class="text-[9px] space-y-0.5 mb-2">
                      <div class="flex justify-between"><span>Élève</span><strong>Andy Kouonang</strong></div>
                      <div class="flex justify-between"><span>Mode</span><strong>MTN MoMo</strong></div>
                      <div class="flex justify-between"><span>Tranche 2</span><strong>50 000 F</strong></div>
                    </div>
                    <div class="text-[10px] space-y-0.5 border-t border-dashed border-slate-300 pt-2">
                      <div class="flex justify-between font-black text-ep-green">
                        <span>Total payé</span><span>150 000 F</span>
                      </div>
                      <div class="flex justify-between font-black text-ep-navy">
                        <span>Reste</span><span>50 000 F</span>
                      </div>
                    </div>
                    <p class="text-[8px] text-center text-slate-400 mt-2">EduPulse · reçu numérique</p>
                  </div>
                  <div class="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
            <p class="text-center text-sm font-bold text-ep-navy font-heading">Paiement Mobile Money</p>
          </div>

          <!-- Conseil de classe -->
          <div class="space-y-4 phone-stage" style="animation-delay: 1.2s" epReveal="scale" [epDelay]="240">
            <div class="phone-frame-light">
              <div class="phone-notch-light"></div>
              <div class="pt-7 px-4 pb-3 bg-ep-navy text-white">
                <div class="text-[10px] font-bold uppercase tracking-wider text-emerald-300">Conseil de classe</div>
                <div class="font-extrabold text-sm mt-0.5">Statistiques 5ᵉ A</div>
                <div class="text-[10px] text-slate-300">Trimestre 1 · 32 élèves</div>
              </div>
              <div class="px-3.5 py-3 space-y-2.5 min-h-[340px] bg-slate-50">
                <div class="grid grid-cols-2 gap-2">
                  <div class="p-2.5 bg-white rounded-xl border border-slate-100">
                    <div class="text-[8px] font-bold text-slate-500 uppercase">Moy. classe</div>
                    <div class="text-lg font-black text-ep-green font-heading">12,40</div>
                  </div>
                  <div class="p-2.5 bg-white rounded-xl border border-slate-100">
                    <div class="text-[8px] font-bold text-slate-500 uppercase">1ʳᵉ / dernière</div>
                    <div class="text-sm font-black text-ep-navy font-heading">16,80 · 8,25</div>
                  </div>
                </div>
                <div class="p-2.5 bg-white rounded-xl border border-slate-100 space-y-1.5">
                  <div class="text-[9px] font-extrabold text-ep-navy uppercase">Mentions</div>
                  <div class="flex justify-between text-[10px]"><span>Tableau d'honneur</span><strong class="text-ep-green">8</strong></div>
                  <div class="flex justify-between text-[10px]"><span>Encouragements</span><strong>11</strong></div>
                  <div class="flex justify-between text-[10px]"><span>Avertissement</span><strong class="text-amber-600">5</strong></div>
                  <div class="flex justify-between text-[10px]"><span>Blâme</span><strong class="text-rose-600">2</strong></div>
                </div>
                <div class="p-2.5 bg-amber-50 rounded-xl border border-amber-100">
                  <div class="text-[9px] font-extrabold text-amber-800 uppercase mb-1">À suivre</div>
                  <div class="text-[10px] text-slate-700 font-semibold">Mbi Theresse · 8,90 — soutien Math</div>
                  <div class="text-[10px] text-slate-700 font-semibold">Brigitte W. · absences élevées</div>
                </div>
                <div class="h-16 rounded-xl bg-white border border-slate-100 px-2 py-2 flex items-end gap-1">
                  <div class="flex-1 bg-ep-green/80 rounded-t" style="height:70%"></div>
                  <div class="flex-1 bg-ep-green/60 rounded-t" style="height:55%"></div>
                  <div class="flex-1 bg-ep-green rounded-t" style="height:85%"></div>
                  <div class="flex-1 bg-ep-green/70 rounded-t" style="height:62%"></div>
                  <div class="flex-1 bg-amber-400 rounded-t" style="height:40%"></div>
                  <div class="flex-1 bg-rose-400 rounded-t" style="height:28%"></div>
                </div>
              </div>
            </div>
            <p class="text-center text-sm font-bold text-ep-navy font-heading">Conseil de classe</p>
          </div>

          <!-- Bilan absences -->
          <div class="space-y-4 phone-stage" style="animation-delay: 0.2s" epReveal="scale" [epDelay]="320">
            <div class="phone-frame-light">
              <div class="phone-notch-light"></div>
              <div class="pt-7 px-4 pb-3 bg-white border-b border-slate-100">
                <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Vie scolaire</div>
                <div class="font-extrabold text-sm text-ep-navy">Bilan des absences</div>
                <div class="text-[10px] text-slate-500">Andy Kouonang · Trimestre 1</div>
              </div>
              <div class="px-3.5 py-3 space-y-2.5 min-h-[340px] bg-slate-50">
                <div class="grid grid-cols-3 gap-1.5">
                  <div class="p-2 bg-white rounded-xl text-center border border-slate-100">
                    <div class="text-[8px] font-bold text-slate-500 uppercase">Total</div>
                    <div class="text-base font-black text-ep-navy font-heading">6 h</div>
                  </div>
                  <div class="p-2 bg-white rounded-xl text-center border border-slate-100">
                    <div class="text-[8px] font-bold text-slate-500 uppercase">Justifiées</div>
                    <div class="text-base font-black text-ep-green font-heading">4 h</div>
                  </div>
                  <div class="p-2 bg-rose-50 rounded-xl text-center border border-rose-100">
                    <div class="text-[8px] font-bold text-rose-600 uppercase">Non just.</div>
                    <div class="text-base font-black text-rose-600 font-heading">2 h</div>
                  </div>
                </div>
                @for (a of absences; track a.date) {
                  <div class="p-2.5 bg-white rounded-xl border border-slate-100 flex items-center justify-between gap-2">
                    <div>
                      <div class="text-[11px] font-extrabold text-ep-navy">{{ a.date }}</div>
                      <div class="text-[9px] text-slate-500">{{ a.matiere }} · {{ a.duree }}</div>
                    </div>
                    <span class="text-[9px] font-black uppercase px-2 py-0.5 rounded-full"
                      [class.bg-ep-lightGreen]="a.ok"
                      [class.text-ep-green]="a.ok"
                      [class.bg-rose-100]="!a.ok"
                      [class.text-rose-700]="!a.ok">
                      {{ a.ok ? 'Justifiée' : 'Non just.' }}
                    </span>
                  </div>
                }
                <div class="p-2.5 rounded-xl bg-ep-navy text-white text-[10px] font-bold text-center">
                  Alerte parent si &gt; 8 h non justifiées
                </div>
              </div>
            </div>
            <p class="text-center text-sm font-bold text-ep-navy font-heading">Bilan des absences</p>
          </div>

          <!-- Emploi du temps -->
          <div class="space-y-4 phone-stage" style="animation-delay: 0.6s" epReveal="scale" [epDelay]="400">
            <div class="phone-frame-light">
              <div class="phone-notch-light"></div>
              <div class="pt-7 px-4 pb-3 bg-ep-green text-white">
                <div class="text-[10px] font-bold uppercase tracking-wider text-white/80">Emploi du temps</div>
                <div class="font-extrabold text-sm mt-0.5">Jeudi · 5ᵉ A</div>
                <div class="text-[10px] text-white/80">13 août 2026</div>
              </div>
              <div class="px-3.5 py-3 space-y-2 min-h-[340px] bg-slate-50">
                @for (slot of timetable; track slot.heure) {
                  <div class="p-2.5 bg-white rounded-xl border border-slate-100 flex gap-2.5 items-start"
                    [class.ring-2]="slot.now"
                    [class.ring-ep-green]="slot.now">
                    <div class="text-[10px] font-black text-ep-navy w-11 shrink-0 pt-0.5">{{ slot.heure }}</div>
                    <div class="min-w-0">
                      <div class="text-[11px] font-extrabold text-ep-navy">{{ slot.matiere }}</div>
                      <div class="text-[9px] text-slate-500">{{ slot.salle }} · {{ slot.prof }}</div>
                    </div>
                    @if (slot.now) {
                      <span class="ml-auto text-[8px] font-black uppercase text-ep-green bg-ep-lightGreen px-1.5 py-0.5 rounded">Maintenant</span>
                    }
                  </div>
                }
              </div>
            </div>
            <p class="text-center text-sm font-bold text-ep-navy font-heading">Emploi du temps</p>
          </div>

          <!-- Alertes / direction -->
          <div class="space-y-4 phone-stage" style="animation-delay: 1s" epReveal="scale" [epDelay]="480">
            <div class="phone-frame-light">
              <div class="phone-notch-light"></div>
              <div class="pt-7 px-4 pb-3 bg-ep-navy text-white">
                <div class="text-[10px] font-bold uppercase tracking-wider text-emerald-300">Direction</div>
                <div class="font-extrabold text-sm mt-0.5">Alertes & recouvrement</div>
                <div class="text-[10px] text-slate-300">Tableau de bord du jour</div>
              </div>
              <div class="px-3.5 py-3 space-y-2.5 min-h-[340px] bg-slate-50">
                <div class="grid grid-cols-2 gap-2">
                  <div class="p-2.5 bg-white rounded-xl border border-slate-100">
                    <div class="text-[8px] font-bold text-slate-500 uppercase">Recouvré</div>
                    <div class="text-base font-black text-ep-green font-heading">88 %</div>
                  </div>
                  <div class="p-2.5 bg-white rounded-xl border border-slate-100">
                    <div class="text-[8px] font-bold text-slate-500 uppercase">Impayés</div>
                    <div class="text-base font-black text-amber-600 font-heading">42</div>
                  </div>
                </div>
                @for (al of alerts; track al.title) {
                  <div class="p-2.5 bg-white rounded-xl border border-slate-100 flex gap-2">
                    <span class="w-2 h-2 rounded-full mt-1.5 shrink-0"
                      [class.bg-ep-green]="al.level === 'ok'"
                      [class.bg-amber-500]="al.level === 'warn'"
                      [class.bg-rose-500]="al.level === 'alert'"></span>
                    <div>
                      <div class="text-[11px] font-extrabold text-ep-navy">{{ al.title }}</div>
                      <div class="text-[9px] text-slate-500">{{ al.detail }}</div>
                    </div>
                  </div>
                }
                <div class="p-2.5 rounded-xl bg-[#25D366] text-white text-[10px] font-extrabold text-center">
                  12 SMS de relance envoyés aujourd'hui
                </div>
              </div>
            </div>
            <p class="text-center text-sm font-bold text-ep-navy font-heading">Alertes direction</p>
          </div>
        </div>

        <!-- Class analytics curve -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" epReveal>
          <div class="lg:col-span-5 space-y-3">
            <span class="text-xs font-bold uppercase tracking-widest text-ep-green bg-ep-lightGreen px-3 py-1 rounded-full">Conseil de classe</span>
            <h3 class="text-2xl sm:text-3xl font-black text-ep-navy font-heading">Analyse de la 5ᵉ A</h3>
            <p class="text-slate-500 text-sm leading-relaxed">La courbe suit la moyenne de la classe sur l'année. La direction voit tout de suite qui décroche, et où intervenir.</p>
            <div class="grid grid-cols-3 gap-3 pt-2">
              <div class="p-3 rounded-2xl bg-slate-50">
                <div class="text-[10px] font-bold text-slate-500 uppercase">1ʳᵉ moy.</div>
                <div class="text-lg font-black text-ep-navy font-heading">16,80</div>
              </div>
              <div class="p-3 rounded-2xl bg-slate-50">
                <div class="text-[10px] font-bold text-slate-500 uppercase">Dernière</div>
                <div class="text-lg font-black text-ep-navy font-heading">8,25</div>
              </div>
              <div class="p-3 rounded-2xl bg-ep-lightGreen">
                <div class="text-[10px] font-bold text-ep-green uppercase">Classe</div>
                <div class="text-lg font-black text-ep-green font-heading">12,40</div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-7 p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-100">
            <svg viewBox="0 0 560 220" class="w-full h-auto" role="img" aria-label="Courbe des moyennes de la classe">
              <defs>
                <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#00A651" stop-opacity="0.28"/>
                  <stop offset="100%" stop-color="#00A651" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <line x1="48" y1="20" x2="48" y2="180" stroke="#CBD5E1" stroke-width="1"/>
              <line x1="48" y1="180" x2="540" y2="180" stroke="#CBD5E1" stroke-width="1"/>
              <text x="8" y="28" fill="#64748B" font-size="11">20</text>
              <text x="8" y="104" fill="#64748B" font-size="11">12</text>
              <text x="14" y="184" fill="#64748B" font-size="11">0</text>
              <path d="M48,92 C120,108 180,70 240,84 C300,98 360,118 420,96 C480,74 520,88 540,80 L540,180 L48,180 Z" fill="url(#curveFill)"/>
              <path d="M48,92 C120,108 180,70 240,84 C300,98 360,118 420,96 C480,74 520,88 540,80" fill="none" stroke="#00A651" stroke-width="3.5" stroke-linecap="round"/>
              <circle cx="48" cy="92" r="5" fill="#0B2545"/>
              <circle cx="240" cy="84" r="5" fill="#00A651"/>
              <circle cx="420" cy="96" r="5" fill="#00A651"/>
              <circle cx="540" cy="80" r="5" fill="#0B2545"/>
              <text x="40" y="204" fill="#64748B" font-size="11">S1</text>
              <text x="228" y="204" fill="#64748B" font-size="11">S3</text>
              <text x="408" y="204" fill="#64748B" font-size="11">S5</text>
              <text x="520" y="204" fill="#64748B" font-size="11">S6</text>
            </svg>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" epReveal="left">
          <div class="lg:col-span-5 space-y-3">
            <span class="text-xs font-bold uppercase tracking-widest text-ep-green bg-ep-lightGreen px-3 py-1 rounded-full">Reçu de caisse</span>
            <h3 class="text-2xl sm:text-3xl font-black text-ep-navy font-heading">Ce que le parent reçoit</h3>
            <p class="text-slate-500 text-sm leading-relaxed">Après chaque Mobile Money, le reçu montre le total déjà payé et le reste à régler. Plus d'erreur de caisse.</p>
            <div class="relative rounded-2xl overflow-hidden h-40">
              <img
                src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=1000&q=80"
                alt="Parent consultant son reçu de scolarité"
                class="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div class="lg:col-span-7">
            <div class="max-w-md mx-auto bg-[#fffdf8] border border-amber-200 shadow-poster rounded-sm p-6 font-mono text-slate-800">
              <div class="text-center border-b border-dashed border-slate-400 pb-3 mb-3">
                <div class="text-[10px] uppercase tracking-widest text-slate-500">Collège Bilingue de l'Excellence</div>
                <div class="text-sm font-black font-heading text-ep-navy mt-1">REÇU DE CAISSE</div>
                <div class="text-[11px] font-bold">N° REC-EP-884211</div>
              </div>
              <div class="text-[11px] space-y-1 mb-3">
                <div class="flex justify-between"><span>Élève</span><strong>Andy Kouonang · 5ᵉ A</strong></div>
                <div class="flex justify-between"><span>Date</span><strong>13 août 2026</strong></div>
                <div class="flex justify-between"><span>Mode</span><strong>MTN Mobile Money</strong></div>
              </div>
              <div class="text-[11px] space-y-1 border-y border-dashed border-slate-400 py-3">
                <div class="flex justify-between"><span>Scolarité annuelle</span><span>200 000 F</span></div>
                <div class="flex justify-between"><span>Tranche 1 (payée)</span><span>100 000 F</span></div>
                <div class="flex justify-between"><span>Tranche 2 (ce reçu)</span><span>50 000 F</span></div>
              </div>
              <div class="text-[12px] space-y-1.5 pt-3">
                <div class="flex justify-between font-black text-ep-green">
                  <span>Total payé</span><span>150 000 FCFA</span>
                </div>
                <div class="flex justify-between font-black text-ep-navy">
                  <span>Reste à payer</span><span>50 000 FCFA</span>
                </div>
              </div>
              <p class="text-[9px] text-center text-slate-500 mt-4">Reçu généré automatiquement · EduPulse</p>
            </div>
          </div>
        </div>

        <app-bulletin-generator></app-bulletin-generator>
      </div>
    </section>
  `
})
export class DemoGalleryComponent {
  parentGrades = [
    { s: 'Mathématiques', n: 16 },
    { s: 'Français', n: 14 },
    { s: 'Anglais', n: 13 },
    { s: 'Histoire - Géo', n: 15 },
  ];

  teacherRows = [
    { name: 'Brigitte W.', mat: '24EP-091', note: 13 },
    { name: 'Mauryn K.', mat: '24EP-077', note: 11 },
    { name: 'Gisele Ymele', mat: '24EP-102', note: 18 },
    { name: 'Mbi Theresse', mat: '24EP-088', note: 14 },
    { name: 'Regina F.', mat: '24EP-084', note: 16 },
  ];

  absences = [
    { date: '12 août', matiere: 'Mathématiques', duree: '2 h', ok: true },
    { date: '05 août', matiere: 'Français', duree: '1 h', ok: true },
    { date: '28 juil.', matiere: 'EPS', duree: '2 h', ok: false },
    { date: '15 juil.', matiere: 'SVT', duree: '1 h', ok: true },
  ];

  timetable = [
    { heure: '07:30', matiere: 'Mathématiques', salle: 'Salle 12', prof: 'M. Ndongo', now: false },
    { heure: '09:00', matiere: 'Français', salle: 'Salle 08', prof: 'Mme Kamga', now: true },
    { heure: '10:30', matiere: 'Physique', salle: 'Labo 2', prof: 'Mme Tchakounte', now: false },
    { heure: '12:00', matiere: 'Pause déjeuner', salle: 'Réfectoire', prof: '—', now: false },
    { heure: '13:30', matiere: 'Anglais', salle: 'Salle 05', prof: 'Mr. John B.', now: false },
  ];

  alerts = [
    { level: 'alert' as const, title: '3 absences non justifiées', detail: '5ᵉ A · alerte parents envoyée' },
    { level: 'warn' as const, title: 'Retard de scolarité', detail: '42 familles · relance SMS' },
    { level: 'ok' as const, title: 'Bulletins T1 prêts', detail: '32 / 32 générés · PDF OK' },
    { level: 'warn' as const, title: 'Conseil demain 14 h', detail: '5ᵉ A · salle des profs' },
  ];
}
