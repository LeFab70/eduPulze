import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-white border-t border-slate-200 text-slate-700 pt-12 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <!-- Poster Bottom Callout Banner -->
        <div class="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-6 shadow-sm">
          
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-2xl shadow-sm shrink-0">
              🏫
            </div>
            <div>
              <div class="text-xl font-black text-ep-navy font-heading">
                EduPulse, ensemble pour l'avenir de nos enfants.
              </div>
              <p class="text-xs text-slate-500">La solution complète pour les établissements scolaires du Cameroun et d'Afrique Subsaharienne.</p>
            </div>
          </div>

          <!-- App Store & Google Play Badges + QR Code Box from Poster -->
          <div class="flex flex-wrap items-center gap-4">
            
            <!-- Google Play Badge -->
            <a href="#hero" class="px-4 py-2 bg-black hover:bg-slate-900 text-white rounded-xl flex items-center gap-3 transition-colors shadow-sm">
              <span class="text-xl">▶</span>
              <div class="text-left leading-none">
                <span class="text-[9px] uppercase tracking-wider text-slate-300 block">Disponible sur</span>
                <span class="text-sm font-extrabold font-heading">Google Play</span>
              </div>
            </a>

            <!-- App Store Badge -->
            <a href="#hero" class="px-4 py-2 bg-black hover:bg-slate-900 text-white rounded-xl flex items-center gap-3 transition-colors shadow-sm">
              <span class="text-xl"></span>
              <div class="text-left leading-none">
                <span class="text-[9px] uppercase tracking-wider text-slate-300 block">Télécharger dans</span>
                <span class="text-sm font-extrabold font-heading">App Store</span>
              </div>
            </a>

            <!-- QR Code Scanner Box from Poster -->
            <div class="p-3 bg-white rounded-xl border border-slate-300 flex items-center gap-3 shadow-xs">
              <div class="w-10 h-10 bg-ep-navy rounded-lg p-1 text-white text-[7px] font-mono flex flex-col items-center justify-center leading-none">
                <span>SCAN</span>
                <span class="text-ep-green font-bold">ME</span>
              </div>
              <div class="text-left leading-tight">
                <span class="text-[10px] font-black uppercase text-ep-navy block">SCANNER POUR DÉCOUVRIR</span>
                <span class="text-[9px] text-slate-500 block font-semibold">L'APPLICATION MOBILE</span>
              </div>
            </div>

          </div>

        </div>

        <!-- Footer Links Grid -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs pt-4 border-t border-slate-200">
          
          <div class="space-y-2">
            <h4 class="text-sm font-bold text-ep-navy uppercase font-heading">À propos d'EduPulse</h4>
            <p class="text-slate-600 leading-relaxed">
              ERP / SaaS Multi-Tenant de Gestion Scolaire. Numérisation complète de la maternelle au secondaire au Cameroun et en Afrique Subsaharienne.
            </p>
          </div>

          <div class="space-y-2">
            <h4 class="text-sm font-bold text-ep-navy uppercase font-heading">Bureaux & Contacts</h4>
            <p>📍 <strong>Douala :</strong> Akwa, Blvd de la Liberté</p>
            <p>📍 <strong>Yaoundé :</strong> Bastos, Rue de l'Ambassade</p>
            <p>📞 <strong>Téléphone :</strong> +237 690 00 11 22</p>
            <p>✉️ <strong>Email :</strong> contact&#64;edupulse.cm</p>
          </div>

          <div class="space-y-2">
            <h4 class="text-sm font-bold text-ep-navy uppercase font-heading">Modules Clés</h4>
            <p><a href="#hero" class="hover:text-ep-green font-semibold">Application Parent Mobile</a></p>
            <p><a href="#payment-sim" class="hover:text-ep-green font-semibold">Recouvrement Mobile Money</a></p>
            <p><a href="#teacher-sim" class="hover:text-ep-green font-semibold">Saisie des Notes Offline & IA</a></p>
            <p><a href="#bulletin-sim" class="hover:text-ep-green font-semibold">Bulletins Officiels MINESEC</a></p>
          </div>

          <div class="space-y-2">
            <h4 class="text-sm font-bold text-ep-navy uppercase font-heading">GitHub Repository</h4>
            <p><a href="https://github.com/LeFab70/eduPulze.git" target="_blank" class="hover:text-ep-green font-mono font-bold text-ep-green">github.com/LeFab70/eduPulze.git</a></p>
            <p><a href="#pricing" class="hover:text-ep-green font-semibold">Tarification B2B FCFA</a></p>
            <p><a href="#modules" class="hover:text-ep-green font-semibold">Les 13 Modules ERP</a></p>
          </div>

        </div>

        <div class="pt-6 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
          <p>© 2026 EduPulse SaaS Africa — Tous droits réservés. Construit avec Angular 21 Signals & Tailwind CSS.</p>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {}
