import { Injectable, signal, computed } from '@angular/core';

export interface GradeItem {
  subject: string;
  score: number;
  maxScore: number;
  classMin: number;
  classMax: number;
  coefficient: number;
  teacher: string;
  date: string;
  group: 'scientifique' | 'litteraire';
}

export interface Child {
  id: string;
  name: string;
  class: string;
  matricule: string;
  photoUrl: string;
  generalAverage: number;
  rank: string;
  totalStudents: number;
  absencesCount: number;
  unjustifiedAbsences: number;
  tuitionPaid: number;
  tuitionTotal: number;
  nextDueDate: string;
  nextDueAmount: number;
  grades: GradeItem[];
}

export interface ERPModule {
  id: number;
  title: string;
  subtitle: string;
  category: 'PEDAGOGY' | 'FINANCE' | 'ADMIN' | 'COMMUNICATION';
  icon: string;
  description: string;
  highlights: string[];
}

export interface RBACRole {
  code: 'SUPER_ADMIN' | 'SCHOOL_ADMIN' | 'ACCOUNTANT' | 'TEACHER' | 'PARENT' | 'STUDENT';
  name: string;
  targetUser: string;
  permissions: string[];
  badgeColor: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class EduPulseStateService {
  // 1. Mobile App - Children Signals
  readonly children = signal<Child[]>([
    {
      id: 'andy',
      name: 'Andy Kouonang',
      class: '5ᵉ A',
      matricule: '24EP-084',
      photoUrl: '/assets/andy-kouonang.jpg',
      generalAverage: 14.25,
      rank: '5 / 32',
      totalStudents: 32,
      absencesCount: 2,
      unjustifiedAbsences: 0,
      tuitionPaid: 150000,
      tuitionTotal: 200000,
      nextDueDate: '15 Novembre 2026',
      nextDueAmount: 50000,
      grades: [
        { subject: 'Mathématiques', score: 16, maxScore: 20, classMin: 6, classMax: 19, coefficient: 4, teacher: 'M. Ndongo', date: '10 Oct', group: 'scientifique' },
        { subject: 'Physique - Chimie', score: 14.5, maxScore: 20, classMin: 6, classMax: 17, coefficient: 2, teacher: 'Mme Tchakounte', date: '11 Oct', group: 'scientifique' },
        { subject: 'SVT', score: 13.5, maxScore: 20, classMin: 7, classMax: 16, coefficient: 2, teacher: 'M. Abena', date: '09 Oct', group: 'scientifique' },
        { subject: 'Français', score: 14, maxScore: 20, classMin: 7, classMax: 18, coefficient: 3, teacher: 'Mme Kamga', date: '08 Oct', group: 'litteraire' },
        { subject: 'Anglais', score: 13, maxScore: 20, classMin: 5, classMax: 17, coefficient: 3, teacher: 'Mr. John B.', date: '12 Oct', group: 'litteraire' },
        { subject: 'Histoire - Géo', score: 15, maxScore: 20, classMin: 8, classMax: 18, coefficient: 2, teacher: 'M. Etoa', date: '05 Oct', group: 'litteraire' }
      ]
    },
    {
      id: 'sarah',
      name: 'Sarah M.',
      class: '3ᵉ C (Sous-système Francophone)',
      matricule: '22EP-119',
      photoUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=240&h=240&fit=crop&crop=faces&q=85',
      generalAverage: 16.80,
      rank: '1 / 38',
      totalStudents: 38,
      absencesCount: 0,
      unjustifiedAbsences: 0,
      tuitionPaid: 200000,
      tuitionTotal: 200000,
      nextDueDate: 'Soldé',
      nextDueAmount: 0,
      grades: [
        { subject: 'Mathématiques', score: 19, maxScore: 20, classMin: 8, classMax: 19, coefficient: 5, teacher: 'M. Bikoue', date: '12 Oct', group: 'scientifique' },
        { subject: 'Informatique & Algorithmique', score: 18.5, maxScore: 20, classMin: 10, classMax: 19, coefficient: 2, teacher: 'M. Kouam', date: '13 Oct', group: 'scientifique' },
        { subject: 'Français', score: 16, maxScore: 20, classMin: 9, classMax: 18, coefficient: 4, teacher: 'Mme Fotso', date: '11 Oct', group: 'litteraire' },
        { subject: 'Anglais', score: 17, maxScore: 20, classMin: 7, classMax: 18, coefficient: 3, teacher: 'Mrs. Enow', date: '10 Oct', group: 'litteraire' },
        { subject: 'Histoire - Géo', score: 15.5, maxScore: 20, classMin: 8, classMax: 17, coefficient: 2, teacher: 'M. Mbida', date: '09 Oct', group: 'litteraire' }
      ]
    }
  ]);

  readonly selectedChildId = signal<string>('andy');

  readonly activeChild = computed(() => {
    return this.children().find(c => c.id === this.selectedChildId()) || this.children()[0];
  });

  readonly activeAppTab = signal<'notes' | 'absences' | 'paiements' | 'bulletins' | 'emploi'>('notes');

  // 2. Mobile Teacher Offline Simulation Signals
  readonly isTeacherOffline = signal<boolean>(false);
  readonly pendingOfflineGrades = signal<{ student: string; subject: string; score: number; coeff: number }[]>([]);

  // 3. Mobile Money Payment Simulation Signals
  readonly paymentProvider = signal<'MTN' | 'ORANGE' | 'MOOV' | 'VISA'>('ORANGE');
  readonly phoneNumber = signal<string>('699 00 11 22');
  readonly paymentAmount = signal<number>(50000);
  readonly paymentStatus = signal<'IDLE' | 'PROMPT' | 'PROCESSING' | 'SUCCESS'>('IDLE');
  readonly receiptPdfId = signal<string>('');

  // 4. SaaS B2B Pricing Calculator Signals
  readonly studentCount = signal<number>(450);

  readonly calculatedPricing = computed(() => {
    const count = this.studentCount();
    if (count < 300) {
      return {
        planName: 'Offre Starter',
        priceMonthly: 25000,
        priceAnnual: 250000, // 2 mois offerts
        perStudentCost: Math.round(25000 / count),
        description: 'Pour écoles maternelles et primaires (< 300 élèves)',
        features: ['Isolation Multi-tenant', 'Mode Offline Enseignant', 'Saisie Notes & Absences', 'Bulletins PDF MINESEC', 'Suivi Parents WhatsApp/Push']
      };
    } else if (count <= 800) {
      return {
        planName: 'Offre Pro',
        priceMonthly: 50000,
        priceAnnual: 500000, // 2 mois offerts
        perStudentCost: Math.round(50000 / count),
        description: 'Pour collèges et lycées (300 à 800 élèves) — Recommandé',
        features: ['Toutes les fonctions Starter', 'Recouvrement Mobile Money Direct', 'Module IA d\'appréciations', 'Relances SMS Automatisées', 'Dashboard Direction & Caisse']
      };
    } else {
      return {
        planName: 'Offre Enterprise',
        priceMonthly: 120000,
        priceAnnual: 1200000,
        perStudentCost: Math.round(120000 / count),
        description: 'Pour complexes scolaires & réseaux d\'établissements (> 800 élèves)',
        features: ['Multi-Établissements centralisé', 'Support Dédié 24/7 Douala/Yaoundé', 'API personnalisée & SSO', 'Sauvegarde Multi-Région', 'Formation sur site']
      };
    }
  });

  // 5. RBAC Matrix Signals
  readonly activeRole = signal<RBACRole['code']>('PARENT');

  readonly rolesList = signal<RBACRole[]>([
    {
      code: 'SUPER_ADMIN',
      name: 'Super Admin SaaS',
      targetUser: 'Équipe EduPulse Afrique',
      permissions: ['Gestion des écoles (tenants)', 'Abonnements B2B', 'Métriques système global', 'Audit des logs'],
      badgeColor: 'border-purple-500 bg-purple-950/40 text-purple-300',
      icon: 'shield-check'
    },
    {
      code: 'SCHOOL_ADMIN',
      name: 'Directeur / Secrétariat',
      targetUser: 'Administration de l\'École',
      permissions: ['Configuration établissement', 'Création des classes & matières', 'Gestion des coefficients', 'Affectation des enseignants', 'Publication des bulletins'],
      badgeColor: 'border-blue-500 bg-blue-950/40 text-blue-300',
      icon: 'building-library'
    },
    {
      code: 'ACCOUNTANT',
      name: 'Caisse & Comptabilité',
      targetUser: 'Comptable Scolaire',
      permissions: ['Encaissement manuel (Espèces/Virements)', 'Validation paiements Mobile Money', 'Suivi des échéanciers', 'Émission des reçus PDF', 'Relances impayés'],
      badgeColor: 'border-amber-500 bg-amber-950/40 text-amber-300',
      icon: 'banknotes'
    },
    {
      code: 'TEACHER',
      name: 'Corps Enseignant',
      targetUser: 'Professeurs & Répétiteurs',
      permissions: ['Saisie mobile des notes (Hors-ligne)', 'Appel de présence en classe', 'Suggestions d\'appréciations IA', 'Suivi du cahier de texte'],
      badgeColor: 'border-emerald-500 bg-emerald-950/40 text-emerald-300',
      icon: 'academic-cap'
    },
    {
      code: 'PARENT',
      name: 'Responsable Légal',
      targetUser: 'Parents d\'Élèves',
      permissions: ['Suivi en temps réel des notes & rangs', 'Notifications instantanées d\'absences', 'Paiement scolarité MTN MoMo / Orange Money', 'Téléchargement direct des bulletins PDF'],
      badgeColor: 'border-cyan-500 bg-cyan-950/40 text-cyan-300',
      icon: 'user-group'
    },
    {
      code: 'STUDENT',
      name: 'Élève',
      targetUser: 'Élève Collège / Lycée',
      permissions: ['Consultation devoirs & emploi du temps', 'Visualisation des notes & coefficients', 'Alertes examens & compositions'],
      badgeColor: 'border-rose-500 bg-rose-950/40 text-rose-300',
      icon: 'user'
    }
  ]);

  // 6. 13 Functional Modules
  readonly erpModules = signal<ERPModule[]>([
    {
      id: 1,
      title: 'Administration Établissement',
      subtitle: 'Structures & Années Académiques',
      category: 'ADMIN',
      icon: 'building',
      description: 'Configuration globale de l\'école, des années scolaires, séquences (1 à 6), trimestres, niveaux, classes, salles et sous-systèmes (Francophone / Anglophone).',
      highlights: ['Support MINESEC / MINEDUB', 'Gestion des coefficients par classe', 'Personnalisation logos & entêtes']
    },
    {
      id: 2,
      title: 'Gestion des Élèves',
      subtitle: 'Dossier Unique & Matricule',
      category: 'ADMIN',
      icon: 'id-card',
      description: 'Centralisation des dossiers élèves : photo, matricule unique, tuteurs, historique scolaire, transferts et réinscriptions automatisées.',
      highlights: ['Matricule automatique', 'Photos & pièces jointes', 'Archivage des parcours']
    },
    {
      id: 3,
      title: 'Inscriptions & Admissions',
      subtitle: 'Workflow complet',
      category: 'ADMIN',
      icon: 'clipboard-check',
      description: 'Gestion des préinscriptions en ligne ou au guichet, validation des dossiers, affectation aux classes et génération automatique de l\'échéancier des frais.',
      highlights: ['Validation en 1 clic', 'Génération d\'échéancier immédiat', 'Réinscription automatique N+1']
    },
    {
      id: 4,
      title: 'Gestion des Enseignants',
      subtitle: 'Affectations & Emplois du Temps',
      category: 'PEDAGOGY',
      icon: 'user-tie',
      description: 'Profils enseignants, matières enseignées, classes affectées, calcul du volume horaire et suivi des conseils de classe.',
      highlights: ['Multi-matières & multi-classes', 'Planning automatisé', 'Historique des cours']
    },
    {
      id: 5,
      title: 'Notes & Évaluations',
      subtitle: 'Saisie Mobile & Mode Offline',
      category: 'PEDAGOGY',
      icon: 'pencil-square',
      description: 'Devoirs, interrogations, compositions. Saisie ultra-rapide sur smartphone en mode déconnecté avec synchronisation automatique au retour d\'internet.',
      highlights: ['Saisie 100% Hors-Ligne', 'Calcul automatique moyennes & rangs', 'Module IA d\'appréciations']
    },
    {
      id: 6,
      title: 'Présences & Absences',
      subtitle: 'Appel en classe digital',
      category: 'PEDAGOGY',
      icon: 'check-circle',
      description: 'Appel en 30 secondes par le professeur sur mobile. Notification instantanée sur le téléphone des parents en cas d\'absence ou de retard non justifié.',
      highlights: ['Appel rapide mobile', 'Alerte Parent Push & SMS', 'Statistiques de discipline']
    },
    {
      id: 7,
      title: 'Bulletins de Notes PDF',
      subtitle: 'Format Officiel Homologué',
      category: 'PEDAGOGY',
      icon: 'document-text',
      description: 'Génération instantanée des bulletins individuels ou par classe (ZIP / PDF groupé) aux formats réglementaires avec QR code d\'authentification anti-fraude.',
      highlights: ['Conforme MINESEC/MINEDUB', 'Génération groupée 1-Click', 'Anti-fraude QR Code']
    },
    {
      id: 8,
      title: 'Espace Parent Mobile',
      subtitle: 'App Dedicated Flutter',
      category: 'COMMUNICATION',
      icon: 'smartphone',
      description: 'Application mobile fluide permettant aux parents de suivre en temps réel les notes, absences, devoirs, alertes et de régler les scolarités à tout moment.',
      highlights: ['Suivi multi-enfants', 'Historique des paiements', 'Bulletins en 1 clic']
    },
    {
      id: 9,
      title: 'Espace Élève',
      subtitle: 'Portail d\'Apprentissage',
      category: 'PEDAGOGY',
      icon: 'academic-cap',
      description: 'Accès sécurisé pour l\'élève : consultation de l\'emploi du temps, devoirs à rendre, notes d\'évaluations et conseils de révision.',
      highlights: ['Devoirs à rendre', 'Consultation des rangs', 'Planning examens']
    },
    {
      id: 10,
      title: 'Frais Scolaires & Échéanciers',
      subtitle: 'Configuration Flexible',
      category: 'FINANCE',
      icon: 'calculator',
      description: 'Paramétrage des tranches de scolarité, inscription, cantine, transport, tenue, examens. Gestion des remises (familles nombreuses, bourses).',
      highlights: ['Tranches paramétrables', 'Gestion des bourses', 'Échéancier personnalisé']
    },
    {
      id: 11,
      title: 'Finance & Paiement Mobile',
      subtitle: 'MTN MoMo & Orange Money',
      category: 'FINANCE',
      icon: 'credit-card',
      description: 'Encaissement direct In-App via MTN Mobile Money et Orange Money. Traitement synchrone des webhooks et émission instantanée de reçus PDF.',
      highlights: ['Agrégateur certifié', 'Reçus PDF automatisés', 'Zéro erreur de caisse']
    },
    {
      id: 12,
      title: 'Communication École → Parents',
      subtitle: 'SMS Local & Push Firebase',
      category: 'COMMUNICATION',
      icon: 'chat-bubble',
      description: 'Envoi d\'annonces globales, rappels de paiement, convocations et alertes météo/urgence directement sur WhatsApp ou par SMS local (Twilio/SMS.cm).',
      highlights: ['Relances d\'impayés', 'Notification Push instantanée', 'Canal d\'urgence direct']
    },
    {
      id: 13,
      title: 'Tableaux de Bord & Analytics',
      subtitle: 'Pilotage Stratégique',
      category: 'FINANCE',
      icon: 'chart-pie',
      description: 'Dashboards financiers et pédagogiques en temps réel pour le Directeur et le Comptable : taux de recouvrement, reste à recouvrer, taux de réussite.',
      highlights: ['Taux de recouvrement live', 'Statistiques de réussite', 'Export Excel & PDF']
    }
  ]);

  // Methods
  selectChild(id: string) {
    this.selectedChildId.set(id);
  }

  setAppTab(tab: 'notes' | 'absences' | 'paiements' | 'bulletins' | 'emploi') {
    this.activeAppTab.set(tab);
  }

  toggleTeacherOffline() {
    this.isTeacherOffline.update(v => !v);
  }

  addOfflineGrade(student: string, subject: string, score: number, coeff: number) {
    this.pendingOfflineGrades.update(list => [...list, { student, subject, score, coeff }]);
  }

  syncOfflineGrades() {
    this.pendingOfflineGrades.set([]);
    this.isTeacherOffline.set(false);
  }

  setStudentCount(count: number) {
    this.studentCount.set(count);
  }

  startMobileMoneyPayment(provider: 'MTN' | 'ORANGE' | 'MOOV' | 'VISA', phone: string, amount: number) {
    this.paymentProvider.set(provider);
    this.phoneNumber.set(phone);
    this.paymentAmount.set(amount);
    this.paymentStatus.set('PROMPT');

    // Simulate USSD validation flow after 2 seconds
    setTimeout(() => {
      this.paymentStatus.set('PROCESSING');
      setTimeout(() => {
        const refId = 'REC-EP-' + Math.floor(100000 + Math.random() * 900000);
        this.receiptPdfId.set(refId);
        this.paymentStatus.set('SUCCESS');

        // Update current child tuition paid
        const currentChildId = this.selectedChildId();
        this.children.update(list => {
          return list.map(c => {
            if (c.id === currentChildId) {
              const newPaid = Math.min(c.tuitionTotal, c.tuitionPaid + amount);
              return {
                ...c,
                tuitionPaid: newPaid,
                nextDueAmount: Math.max(0, c.tuitionTotal - newPaid)
              };
            }
            return c;
          });
        });
      }, 2500);
    }, 2000);
  }

  resetPayment() {
    this.paymentStatus.set('IDLE');
  }
}
