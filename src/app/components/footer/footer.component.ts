import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 space-y-12">
        
        <!-- Top Poster Callout Banner -->
        <div class="p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-blue-950 border border-emerald-500/40 flex flex-wrap items-center justify-between gap-6 shadow-2xl">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-2xl font-black text-white font-heading">Edu<span class="text-emerald-400">Pulse</span></span>
            </div>
            <p class="text-lg font-bold text-emerald-300 font-heading">
              EduPulse, ensemble pour l'avenir de nos enfants.
            </p>
            <p class="text-xs text-slate-300">Transformez la gestion de votre établissement dès aujourd'hui.</p>
          </div>

          <!-- App Store & Google Play Badges from Poster -->
          <div class="flex flex-wrap items-center gap-4">
            
            <!-- Google Play Mockup -->
            <a href="#hero" class="px-4 py-2 bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3 transition-colors">
              <span class="text-xl">▶</span>
              <div class="text-left leading-none">
                <span class="text-[9px] uppercase tracking-wider text-slate-400 block">Disponible sur</span>
                <span class="text-sm font-bold text-white">Google Play</span>
              </div>
            </a>

            <!-- App Store Mockup -->
            <a href="#hero" class="px-4 py-2 bg-slate-950 hover:bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3 transition-colors">
              <span class="text-xl"></span>
              <div class="text-left leading-none">
                <span class="text-[9px] uppercase tracking-wider text-slate-400 block">Télécharger dans</span>
                <span class="text-sm font-bold text-white">App Store</span>
              </div>
            </a>

            <!-- QR Code Box from Poster -->
            <div class="p-3 bg-white rounded-xl border border-slate-200 text-center text-slate-900 flex items-center gap-3">
              <div class="w-10 h-10 bg-slate-950 rounded p-1 text-white text-[7px] font-mono flex flex-col items-center justify-center">
                <span>SCAN</span>
                <span class="text-emerald-400">ME</span>
              </div>
              <div class="text-left">
                <span class="text-[10px] font-extrabold block text-slate-900 uppercase">Scanner pour découvrir</span>
                <span class="text-[9px] text-slate-600 block">l'application Mobile</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Links Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          
          <div class="space-y-3">
            <h4 class="text-sm font-bold text-white uppercase font-heading">À propos d'EduPulse</h4>
            <p class="text-slate-400 leading-relaxed">
              ERP SaaS Multi-tenant de gestion scolaire leader au Cameroun et en Afrique Subsaharienne. Développé pour la maternelle, le primaire et le secondaire.
            </p>
          </div>

          <div class="space-y-2">
            <h4 class="text-sm font-bold text-white uppercase font-heading">Bureaux Locaux</h4>
            <p>📍 <strong>Douala :</strong> Akwa, Blvd de la Liberté</p>
            <p>📍 <strong>Yaoundé :</strong> Bastos, Rue de l'Ambassade</p>
            <p>📞 <strong>Support :</strong> +237 690 00 11 22</p>
            <p>✉️ <strong>Email :</strong> contact&#64;edupulse.cm</p>
          </div>

          <div class="space-y-2">
            <h4 class="text-sm font-bold text-white uppercase font-heading">Produit & Features</h4>
            <p><a href="#hero" class="hover:text-emerald-400">Application Parent Mobile</a></p>
            <p><a href="#payment-sim" class="hover:text-emerald-400">Recouvrement Mobile Money</a></p>
            <p><a href="#teacher-sim" class="hover:text-emerald-400">Saisie des Notes Offline & IA</a></p>
            <p><a href="#bulletin-sim" class="hover:text-emerald-400">Bulletins Officiels MINESEC</a></p>
          </div>

          <div class="space-y-2">
            <h4 class="text-sm font-bold text-white uppercase font-heading">Ressources & Git</h4>
            <p><a href="https://github.com/LeFab70/eduPulze.git" target="_blank" class="hover:text-emerald-400 font-mono text-emerald-400">GitHub: LeFab70/eduPulze.git</a></p>
            <p><a href="#pricing" class="hover:text-emerald-400">Calculateur Tarifs FCFA</a></p>
            <p><a href="#modules" class="hover:text-emerald-400">Matrice des 13 Modules</a></p>
          </div>

        </div>

        <div class="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© 2026 EduPulse SaaS Africa — Tous droits réservés. Développé avec Angular 21 Signals.</p>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {}
