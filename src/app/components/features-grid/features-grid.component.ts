import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-slate-900/60 border-y border-slate-800 relative">
      
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span class="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
            Piliers de l'Application Parent
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Toutes les fonctionnalités pour sérénité et réussite
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Découvrez les 4 piliers clés pensés pour simplifier le quotidien des familles et des directeurs d'écoles.
          </p>
        </div>

        <!-- 4 Circular Icon Cards from Poster -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <!-- Card 1: SUIVI EN TEMPS RÉEL -->
          <div class="glass-card p-6 rounded-2xl border border-slate-800 text-center hover:border-emerald-500/50 transition-all group">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white uppercase tracking-tight mb-2">Suivi en temps réel</h3>
            <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Notes, absences, bulletins, comportement, annonces de l'établissement...
            </p>
          </div>

          <!-- Card 2: PAIEMENT FACILE -->
          <div class="glass-card p-6 rounded-2xl border border-slate-800 text-center hover:border-blue-500/50 transition-all group">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white uppercase tracking-tight mb-2">Paiement facile</h3>
            <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Frais de scolarité, inscriptions, examens, activités extrascolaires...
            </p>
          </div>

          <!-- Card 3: RECEVEZ DES ALERTES -->
          <div class="glass-card p-6 rounded-2xl border border-slate-800 text-center hover:border-amber-500/50 transition-all group">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v1.341C7.67 7.165 6 9.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white uppercase tracking-tight mb-2">Recevez des alertes</h3>
            <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Absences instantanées, nouvelles notes, événements, rappels de paiement...
            </p>
          </div>

          <!-- Card 4: TABLEAUX DE BORD -->
          <div class="glass-card p-6 rounded-2xl border border-slate-800 text-center hover:border-purple-500/50 transition-all group">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-white uppercase tracking-tight mb-2">Tableaux de bord</h3>
            <p class="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Des statistiques claires pour mieux accompagner votre enfant au quotidien.
            </p>
          </div>

        </div>

        <!-- Poster Section: CONÇU POUR NOS RÉALITÉS -->
        <div class="pt-8 border-t border-slate-800">
          <div class="text-center mb-10">
            <h3 class="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider font-heading">
              CONÇU POUR <span class="text-emerald-400">NOS RÉALITÉS</span>
            </h3>
            <p class="text-slate-400 text-sm mt-1">Adapté aux contraintes réseau et administratives de l'Afrique Subsaharienne</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <!-- Realité 1 -->
            <div class="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div class="w-10 h-10 rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center font-bold">
                ☁️
              </div>
              <h4 class="text-base font-bold text-white">Saisie des notes même hors ligne</h4>
              <p class="text-slate-400 text-xs leading-relaxed">
                Les enseignants saisissent les notes même sans connexion internet. Synchronisation automatique dès le retour du réseau.
              </p>
            </div>

            <!-- Realité 2 -->
            <div class="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div class="w-10 h-10 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold">
                🛡️
              </div>
              <h4 class="text-base font-bold text-white">Sécurité avancée</h4>
              <p class="text-slate-400 text-xs leading-relaxed">
                Vos données et celles de vos enfants sont protégées avec des standards de sécurité élevés et isolation multi-tenant.
              </p>
            </div>

            <!-- Realité 3 -->
            <div class="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div class="w-10 h-10 rounded-lg bg-amber-950 text-amber-400 flex items-center justify-center font-bold">
                🖥️
              </div>
              <h4 class="text-base font-bold text-white">Gestion centralisée</h4>
              <p class="text-slate-400 text-xs leading-relaxed">
                Toutes les informations de l'école centralisées, accessibles à tout moment, partout sur Web et Mobile.
              </p>
            </div>

            <!-- Realité 4 -->
            <div class="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div class="w-10 h-10 rounded-lg bg-purple-950 text-purple-400 flex items-center justify-center font-bold">
                💬
              </div>
              <h4 class="text-base font-bold text-white">Communication facilitée</h4>
              <p class="text-slate-400 text-xs leading-relaxed">
                École, enseignants et parents connectés en permanence pour le succès et l'épanouissement de chaque élève.
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  `
})
export class FeaturesGridComponent {}
