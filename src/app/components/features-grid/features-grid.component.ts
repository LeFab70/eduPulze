import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-white border-y border-slate-200">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span class="text-xs font-extrabold uppercase tracking-widest text-ep-green bg-ep-lightGreen px-3 me.5 py-1 rounded-full border border-ep-green/30">
            Fonctionnalités Clés
          </span>
          <h2 class="text-3xl sm:text-4xl font-black text-ep-navy font-heading">
            Toutes les fonctionnalités pour sérénité et réussite
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            Les 4 piliers d'excellence pensés pour les établissements scolaires et les familles.
          </p>
        </div>

        <!-- 4 Circular Icon Cards directly from Poster -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          
          <!-- Card 1: SUIVI EN TEMPS RÉEL (Green Circle) -->
          <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center hover:border-ep-green transition-all shadow-sm hover:shadow-md group">
            <div class="w-20 h-20 mx-auto mb-5 rounded-full bg-ep-green text-white flex items-center justify-center shadow-lg shadow-ep-green/30 group-hover:scale-105 transition-transform">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="text-lg font-black text-ep-navy uppercase tracking-tight mb-2 font-heading">SUIVI EN TEMPS RÉEL</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Notes, absences, bulletins, comportement, annonces de l'école...
            </p>
          </div>

          <!-- Card 2: PAIEMENT FACILE (Blue Circle) -->
          <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center hover:border-blue-500 transition-all shadow-sm hover:shadow-md group">
            <div class="w-20 h-20 mx-auto mb-5 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="text-lg font-black text-ep-navy uppercase tracking-tight mb-2 font-heading">PAIEMENT FACILE</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Frais de scolarité, inscriptions, examens, activités extrascolaires...
            </p>
          </div>

          <!-- Card 3: RECEVEZ DES ALERTES (Yellow/Orange Circle) -->
          <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center hover:border-amber-500 transition-all shadow-sm hover:shadow-md group">
            <div class="w-20 h-20 mx-auto mb-5 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </div>
            <h3 class="text-lg font-black text-ep-navy uppercase tracking-tight mb-2 font-heading">RECEVEZ DES ALERTES</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Absences, nouvelles notes, événements, rappels de paiement...
            </p>
          </div>

          <!-- Card 4: TABLEAUX DE BORD (Purple Circle) -->
          <div class="bg-slate-50 p-6 rounded-3xl border border-slate-200 text-center hover:border-purple-500 transition-all shadow-sm hover:shadow-md group">
            <div class="w-20 h-20 mx-auto mb-5 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h3 class="text-lg font-black text-ep-navy uppercase tracking-tight mb-2 font-heading">TABLEAUX DE BORD</h3>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Des statistiques claires pour mieux accompagner votre enfant.
            </p>
          </div>

        </div>

        <!-- Poster Section: CONÇU POUR NOS RÉALITÉS (Dark Blue Poster Banner) -->
        <div class="bg-ep-navy text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10">
          <div class="text-center">
            <h3 class="text-2xl sm:text-4xl font-black uppercase tracking-wider font-heading text-white">
              CONÇU POUR <span class="text-ep-green">NOS RÉALITÉS</span>
            </h3>
            <p class="text-slate-300 text-sm mt-2 font-medium">Adapté aux infrastructures et besoins du Cameroun et d'Afrique Subsaharienne</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <!-- Pillar 1 -->
            <div class="space-y-3 text-center sm:text-left border-b sm:border-b-0 sm:border-r border-slate-700/80 pb-6 sm:pb-0 sm:pr-4">
              <div class="w-12 h-12 mx-auto sm:mx-0 rounded-2xl bg-white/10 text-ep-green flex items-center justify-center text-2xl font-bold">
                ☁️
              </div>
              <h4 class="text-base font-extrabold uppercase font-heading text-white">SAISIE DES NOTES MÊME HORS LIGNE</h4>
              <p class="text-slate-300 text-xs leading-relaxed">
                Les enseignants saisissent les notes même sans connexion. Synchronisation automatique dès le retour.
              </p>
            </div>

            <!-- Pillar 2 -->
            <div class="space-y-3 text-center sm:text-left border-b sm:border-b-0 lg:border-r border-slate-700/80 pb-6 sm:pb-0 sm:pr-4">
              <div class="w-12 h-12 mx-auto sm:mx-0 rounded-2xl bg-white/10 text-blue-400 flex items-center justify-center text-2xl font-bold">
                🛡️
              </div>
              <h4 class="text-base font-extrabold uppercase font-heading text-white">SÉCURITÉ AVANCÉE</h4>
              <p class="text-slate-300 text-xs leading-relaxed">
                Vos données et celles de vos enfants sont protégées avec des standards de sécurité élevés.
              </p>
            </div>

            <!-- Pillar 3 -->
            <div class="space-y-3 text-center sm:text-left border-b sm:border-b-0 sm:border-r border-slate-700/80 pb-6 sm:pb-0 sm:pr-4">
              <div class="w-12 h-12 mx-auto sm:mx-0 rounded-2xl bg-white/10 text-amber-400 flex items-center justify-center text-2xl font-bold">
                🖥️
              </div>
              <h4 class="text-base font-extrabold uppercase font-heading text-white">GESTION CENTRALISÉE</h4>
              <p class="text-slate-300 text-xs leading-relaxed">
                Toutes les informations de l'école centralisées, accessibles à tout moment, partout.
              </p>
            </div>

            <!-- Pillar 4 -->
            <div class="space-y-3 text-center sm:text-left">
              <div class="w-12 h-12 mx-auto sm:mx-0 rounded-2xl bg-white/10 text-purple-400 flex items-center justify-center text-2xl font-bold">
                👥
              </div>
              <h4 class="text-base font-extrabold uppercase font-heading text-white">COMMUNICATION FACILITÉE</h4>
              <p class="text-slate-300 text-xs leading-relaxed">
                École, enseignants et parents connectés pour le succès de chaque élève.
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  `
})
export class FeaturesGridComponent {}
