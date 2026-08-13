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
          <h2 class="text-3xl sm:text-4xl font-extrabold text-ep-navy font-heading">Trois écrans, toute l'école</h2>
          <p class="text-slate-500">Parent, enseignant, caisse — ce que vous voyez sur le téléphone, sans simulation.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start" epReveal>
          <!-- Parent phone -->
          <div class="space-y-4">
            <div class="phone-frame-light">
              <div class="phone-notch-light"></div>
              <div class="pt-7 px-4 pb-2 bg-white">
                <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Mes enfants</div>
                <div class="mt-1 flex items-center gap-2">
                  <img src="https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=80&h=80&fit=crop" alt="Kevin" class="w-8 h-8 rounded-full object-cover border-2 border-ep-green" />
                  <div>
                    <div class="font-extrabold text-xs text-ep-navy">Kevin D.</div>
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
          <div class="space-y-4">
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
          <div class="space-y-4">
            <div class="phone-frame-light">
              <div class="phone-notch-light"></div>
              <div class="pt-7 px-4 pb-3 bg-white">
                <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Scolarité</div>
                <div class="font-extrabold text-sm text-ep-navy">Kevin D. · 5ᵉ A</div>
              </div>
              <div class="px-3.5 pb-4 space-y-3 min-h-[340px] bg-white">
                <div class="p-3 rounded-xl bg-slate-50">
                  <div class="text-[10px] text-slate-500 font-bold uppercase">Tranche 2</div>
                  <div class="text-2xl font-black text-ep-navy font-heading">50 000 <span class="text-sm">FCFA</span></div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="p-2 rounded-lg bg-ep-momoYellow text-[10px] font-black text-center">MTN MoMo</div>
                  <div class="p-2 rounded-lg bg-ep-orangeMoney text-white text-[10px] font-black text-center">Orange</div>
                </div>
                <div class="p-3 rounded-xl bg-ep-lightGreen border border-ep-green/20 text-center">
                  <div class="text-ep-green font-black text-sm">Paiement confirmé</div>
                  <div class="text-[10px] text-slate-600 mt-1">Reçu envoyé au parent</div>
                </div>
              </div>
            </div>
            <p class="text-center text-sm font-bold text-ep-navy font-heading">Paiement Mobile Money</p>
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
    { name: 'Kevin D.', mat: '24EP-084', note: 16 },
    { name: 'Amina T.', mat: '24EP-091', note: 13 },
    { name: 'Brice N.', mat: '24EP-077', note: 11 },
    { name: 'Sarah M.', mat: '24EP-102', note: 18 },
    { name: 'Joel K.', mat: '24EP-088', note: 14 },
  ];
}
