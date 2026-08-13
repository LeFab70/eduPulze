import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-architecture-tech',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-slate-950 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span class="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/30">
            Ingénierie & Robustesse Enterprise
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Architecture Technique EduPulse
          </h2>
          <p class="text-slate-400 text-sm sm:text-base">
            Conçue selon les meilleures pratiques pour supporter des millions de requêtes et garantir une isolation stricte des données d'écoles.
          </p>
        </div>

        <!-- Tech Stack Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Stack 1: Backend -->
          <div class="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
              ☕
            </div>
            <h3 class="text-lg font-bold text-white">Backend & Core API</h3>
            <ul class="space-y-2 text-xs text-slate-300">
              <li class="flex items-center gap-2">✔ Java 21 / Spring Boot 3.x</li>
              <li class="flex items-center gap-2">✔ Spring Security & JWT</li>
              <li class="flex items-center gap-2">✔ Controle d'accès RBAC</li>
              <li class="flex items-center gap-2">✔ Flyway DB Migrations</li>
            </ul>
          </div>

          <!-- Stack 2: Database -->
          <div class="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div class="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
              🐘
            </div>
            <h3 class="text-lg font-bold text-white">Base de Données</h3>
            <ul class="space-y-2 text-xs text-slate-300">
              <li class="flex items-center gap-2">✔ PostgreSQL Multi-Tenant</li>
              <li class="flex items-center gap-2">✔ Isolation par tenant_id / Schema</li>
              <li class="flex items-center gap-2">✔ High Availability & Indexing</li>
              <li class="flex items-center gap-2">✔ Redis Cache & Sessions</li>
            </ul>
          </div>

          <!-- Stack 3: Clients Mobile & Web -->
          <div class="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
              📱
            </div>
            <h3 class="text-lg font-bold text-white">Applications Clients</h3>
            <ul class="space-y-2 text-xs text-slate-300">
              <li class="flex items-center gap-2">✔ Mobile: Flutter (iOS/Android)</li>
              <li class="flex items-center gap-2">✔ Web: Angular 21 (Signals)</li>
              <li class="flex items-center gap-2">✔ Offline First (SQLite/IndexedDB)</li>
              <li class="flex items-center gap-2">✔ Sync automatique bidirectionnelle</li>
            </ul>
          </div>

          <!-- Stack 4: Integrations Tierces -->
          <div class="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              ⚡
            </div>
            <h3 class="text-lg font-bold text-white">Intégrations Africaines</h3>
            <ul class="space-y-2 text-xs text-slate-300">
              <li class="flex items-center gap-2">✔ Maviance / TouchPay / Bizao</li>
              <li class="flex items-center gap-2">✔ MTN MoMo & Orange Money</li>
              <li class="flex items-center gap-2">✔ Firebase Push Notifications</li>
              <li class="flex items-center gap-2">✔ Gateway SMS Local (SMS.cm/Twilio)</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ArchitectureTechComponent {}
