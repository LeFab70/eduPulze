import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-architecture-tech',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-white border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span class="text-xs font-extrabold uppercase tracking-widest text-ep-navy bg-slate-100 px-3 py-1 rounded-full">
            Fiable, même quand le réseau lâche
          </span>
          <h2 class="text-3xl sm:text-4xl font-black text-ep-navy font-heading">
            Une plateforme solide, pensée pour l'Afrique
          </h2>
          <p class="text-slate-600 text-sm sm:text-base">
            Données isolées par école, paiements sécurisés, et fonctionnement hors ligne pour les enseignants.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xl">
              ☕
            </div>
            <h3 class="text-base font-bold text-ep-navy font-heading">Backend & Core API</h3>
            <ul class="space-y-1.5 text-xs text-slate-600 font-semibold">
              <li>✔ Java 21 / Spring Boot 3.x</li>
              <li>✔ Spring Security & JWT</li>
              <li>✔ Contrôle d'accès RBAC</li>
              <li>✔ Flyway DB Migrations</li>
            </ul>
          </div>

          <div class="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl">
              🐘
            </div>
            <h3 class="text-base font-bold text-ep-navy font-heading">Base de Données</h3>
            <ul class="space-y-1.5 text-xs text-slate-600 font-semibold">
              <li>✔ PostgreSQL Multi-Tenant</li>
              <li>✔ Isolation par tenant_id / Schema</li>
              <li>✔ High Availability & Indexing</li>
              <li>✔ Redis Cache & Sessions</li>
            </ul>
          </div>

          <div class="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-100 text-ep-green flex items-center justify-center font-bold text-xl">
              📱
            </div>
            <h3 class="text-base font-bold text-ep-navy font-heading">Applications Clients</h3>
            <ul class="space-y-1.5 text-xs text-slate-600 font-semibold">
              <li>✔ Mobile: Flutter (iOS/Android)</li>
              <li>✔ Web: Angular 21 (Signals)</li>
              <li>✔ Offline First (SQLite/IndexedDB)</li>
              <li>✔ Sync bidirectionnelle</li>
            </ul>
          </div>

          <div class="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl">
              ⚡
            </div>
            <h3 class="text-base font-bold text-ep-navy font-heading">Intégrations Africaines</h3>
            <ul class="space-y-1.5 text-xs text-slate-600 font-semibold">
              <li>✔ Maviance / TouchPay / Bizao</li>
              <li>✔ MTN MoMo & Orange Money</li>
              <li>✔ Firebase Push Notifications</li>
              <li>✔ Gateway SMS Local (SMS.cm)</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ArchitectureTechComponent {}
