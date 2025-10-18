import React, { useState, useEffect, useRef } from "react";
import {
  Leaf, Droplets, Brain, TrendingUp, Camera, MessageSquare, Bell, BarChart3,
  Thermometer, Wind, Sun, Activity, Zap, Shield, ChevronRight, Menu, X, Play, Plus, Phone, Mail, MapPin, Clock, Users, Video, Calendar
} from 'lucide-react';

import AgroImage from './assets/agro.jpg';
import Logo from './assets/Logo.png';
import emailjs from '@emailjs/browser';
export default function AgroTechLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModule, setActiveModule] = useState(0);
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_3pi2lsm', // remplace avec ton Service ID
      'template_lk002xq', // remplace avec ton Template ID
      e.target,
      '8a7exoWhjzdF6InIn' // remplace avec ta Public Key
    ).then(
      (result) => {
        console.log(result.text);
        setSubmitted(true);
        e.target.reset(); // vide le formulaire
      },
      (error) => {
        console.log(error.text);
        alert("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    );
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    { icon: Activity, title: "Monitoring Temps Réel", description: "Surveillance continue des paramètres agro-environnementaux avec alertes intelligentes", color: "from-emerald-500 to-teal-600", stats: "Données 24/7" },
    { icon: Brain, title: "Intelligence Artificielle", description: "Recommandations optimisées pour irrigation, fertigation et gestion climatique", color: "from-blue-500 to-indigo-600", stats: "IA Prédictive" },
    { icon: Camera, title: "Vision Artificielle", description: "Détection automatique des maladies, ravageurs et suivi de croissance", color: "from-purple-500 to-pink-600", stats: "Analyse Images" },
    { icon: TrendingUp, title: "Gestion Économique", description: "Simulation et optimisation de la rentabilité des exploitations", color: "from-orange-500 to-red-600", stats: "ROI Optimisé" },
    { icon: MessageSquare, title: "Chatbot IA 24/7", description: "Assistant conversationnel multilingue avec support technique intelligent", color: "from-cyan-500 to-blue-600", stats: "Support Continu" },
    { icon: Bell, title: "Alertes Intelligentes", description: "Détection précoce des risques et notifications multi-canaux", color: "from-rose-500 to-red-600", stats: "Prévention Active" },
  ];

  const modules = [
    { title: "Monitoring & Historisation", icon: BarChart3, points: ["Collecte multi-protocoles", "Variables air, sol, système en temps réel", "TimescaleDB haute performance", "Dashboards interactifs et cartes géolocalisées"] },
    { title: "Alertes Intelligentes", icon: Bell, points: ["Moteur de règles et ML", "Détection stress hydrique et thermique", "Prévention phytosanitaire", "Notifications multi-canaux"] },
    { title: "IA & Recommandations", icon: Brain, points: ["Modèles prédictifs besoins hydriques", "Optimisation fertigation NPK", "Gestion climatique intelligente", "Algorithmes génétiques"] },
    { title: "Vision Artificielle", icon: Camera, points: ["Détection maladies foliaires", "Suivi croissance et biométrie", "Comptage fruits et rendements", "Classification qualité récolte"] },
    { title: "Gestion Économique", icon: TrendingUp, points: ["Modèles technico-économiques", "Scénarios what-if", "KPIs techniques et économiques", "Benchmarking sectoriel"] },
    { title: "Chatbot IA Conversationnel", icon: MessageSquare, points: ["RAG (Retrieval-Augmented Generation)", "Multilingue : Français, Arabe, Pulaar", "Accès direct aux données", "Support 24/7"] },
  ];

  const stats = [
    { value: "100%", label: "Temps Réel", icon: Zap },
    { value: "10 ans", label: "Historique", icon: Activity },
    { value: "24/7", label: "Monitoring", icon: Shield },
    { value: "Multi-IoT", label: "Protocoles", icon: Thermometer },
  ];


  const colors = {
    primary: "#0AB998",
    secondary: "#009100",
    accent: "#FFBD1F",
    white: "#FFFFFF",
  };


  return (
    <div className="font-sans text-white overflow-x-hidden ">

      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="w-500 h-500 flex items-center justify-center p-4 ">
              <img
                src={Logo}
                alt="AgroTech Logo"
                className="w-20 h-20 object-contain"
              />
            </div>

            <span className="text-3xl md:text-4xl font-extrabold text-[#0AB998]">
              AgroTech
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-[#0AB998] text-lg transition-colors">Fonctionnalités</a>
            <a href="#modules" className="text-gray-700 hover:text-[#0AB998] text-lg transition-colors">Modules</a>
            <a href="#benefits" className="text-gray-700 hover:text-[#0AB998] text-lg transition-colors">Avantages</a>
            <button className="px-6 py-3 bg-[#0AB998] text-white rounded-full text-lg hover:shadow-lg transition-transform">
              Contact
            </button>
          </div>

          {/* Menu Mobile */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-lg md:hidden pt-24 flex flex-col items-center gap-8 p-8">
            <a href="#features" className="text-xl text-gray-700 hover:text-[#0AB998] transition-colors">Fonctionnalités</a>
            <a href="#modules" className="text-xl text-gray-700 hover:text-[#0AB998] transition-colors">Modules</a>
            <a href="#benefits" className="text-xl text-gray-700 hover:text-[#0AB998] transition-colors">Avantages</a>
            <button className="px-8 py-3 bg-[#0AB998] text-white rounded-full text-lg">
              Contact
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white pt-20"
        style={{ backgroundImage: `url(${AgroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Révolutionnez Votre Ferme avec <br />
            <span className="text-[#FFBD1F]">Smart Agro-Tech Solutions</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-100 mb-8">
            Exploitez les données en temps réel, IA et IoT pour augmenter vos rendements, réduire le gaspillage et prendre des décisions durables.
          </p>
          <button className="bg-[#FFBD1F] text-gray-900 font-semibold px-6 py-3 rounded-md shadow hover:brightness-95 transition">
            Obtenir une Démo Gratuite
          </button>
        </div>
      </section>
      {/* FEATURES */}
      {/* FEATURES */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-b from-white from-60% via-green-50 via-80% to-white">        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-[#0AB998] bg-clip-text text-transparent">
          Fonctionnalités
          <span className="block text-gray-900 mt-2">Complètes & Intégrées</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Une suite d'outils puissants pour transformer votre exploitation agricole en ferme intelligente et connectée.
        </p>
      </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#0AB998]/30 hover:scale-105 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-[#0AB998]/10"
            >
              {/* Effet de fond au survol */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-[#0AB998]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Ligne décorative en haut */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#0AB998] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icône avec effet amélioré */}
              <div
                className={`relative z-10 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg`}
              >
                <feature.icon className="w-8 h-8 text-white" />
                {/* Effet de brillance sur l'icône */}
                <div className="absolute inset-0 bg-white/20 rounded-2xl transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </div>

              {/* Contenu */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#0AB998] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Ligne de séparation stylisée */}
                <div className="border-t border-gray-100 pt-4 mt-4 group-hover:border-[#0AB998]/20 transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold bg-gradient-to-r from-[#0AB998] to-green-600 bg-clip-text text-transparent">
                      {feature.stats}
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-500 group-hover:text-[#0AB998] transition-colors duration-300">
                        Découvrir
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#0AB998] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Effet de bordure lumineuse au survol */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#0AB998] to-green-400 opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Section CTA en bas */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
        </div>
      </section>
      {/* Comment Agrotech Fonctionne */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comment Fonctionne Agrotech
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez l'intégration transparente de la technologie du champ au tableau de bord. Voyez comment<br />
              notre plateforme simplifie l'agriculture à fort impact en quelques étapes seulement.
            </p>
          </div>

          {/* Grille des étapes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Étape 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#0AB998] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Inscription & Connexion</h3>
              <p className="text-gray-600 leading-relaxed">
                Enregistrez votre exploitation en ligne et connectez vos champs, appareils ou capteurs en quelques minutes.
              </p>
            </div>

            {/* Étape 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#0AB998] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Déployez les Capteurs Intelligents</h3>
              <p className="text-gray-600 leading-relaxed">
                Placez des capteurs IoT ou saisissez vos données agricoles existantes pour démarrer la surveillance en temps réel.
              </p>
            </div>

            {/* Étape 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#0AB998] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Surveillez & Analysez les Données</h3>
              <p className="text-gray-600 leading-relaxed">
                Suivez facilement l'état du sol, de la météo et des cultures. Recevez des alertes et insights instantanés.
              </p>
            </div>

            {/* Étape 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#0AB998] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">
                4
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Obtenez des Insights Intelligents</h3>
              <p className="text-gray-600 leading-relaxed">
                Nos algorithmes analysent vos données terrain et fournissent des conseils actionnables pour les rendements, les économies et la réduction des risques.
              </p>
            </div>

          </div>

          {/* Bouton CTA */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-[#0AB998] text-white rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Commencez Votre Avenir Agricole Intelligent
            </button>
          </div>
        </div>
      </section>




















































      <section id="contact" className="py-20 px-6 relative overflow-hidden bg-gradient-to-br from-[#00C896] via-[#32D44A] to-[#FFDD4C]
">
        {/* Background dégradé élégant */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/40 via-blue-50/30 to-purple-50/20"></div>

        {/* Éléments décoratifs flottants */}
        <div className="absolute top-10 left-5 w-80 h-80 bg-[#0AB998]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-5 right-5 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="max-w-full mx-auto relative z-10"> {/* Supprimé la limitation de width */}

          {/* En-tête */}
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-[#0AB998]/20 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-[#0AB998] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#0AB998] uppercase tracking-wide">Contactez-Nous</span>
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Prêt à <span className="text-[#0AB998]">Transformer</span> Votre Ferme ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discutons de vos besoins et découvrez comment notre technologie peut révolutionner votre exploitation agricole.
            </p>
          </div>

          <div className="flex justify-center"> {/* Centrer le contenu mais avec formulaire large */}
            <div className="w-full max-w-5xl"> {/* Formulaire plus large */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0AB998] to-green-600 rounded-2xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Envoyez-nous un message</h3>
                    <p className="text-gray-600">Nous vous répondons dans les 24 heures</p>
                  </div>
                </div>
                <form className="space-y-8" ref={form} onSubmit={handleSubmit}>
                  {/* Nom et Prénom */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                        Prénom <span className="text-[#0AB998]">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0AB998]/30 focus:border-[#0AB998] transition-all duration-300 outline-none text-gray-900 placeholder-gray-500 text-lg"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                        Nom <span className="text-[#0AB998]">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0AB998]/30 focus:border-[#0AB998] transition-all duration-300 outline-none text-gray-900 placeholder-gray-500 text-lg"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  {/* Email et Téléphone */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                        Email <span className="text-[#0AB998]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0AB998]/30 focus:border-[#0AB998] transition-all duration-300 outline-none text-gray-900 placeholder-gray-500 text-lg"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0AB998]/30 focus:border-[#0AB998] transition-all duration-300 outline-none text-gray-900 placeholder-gray-500 text-lg"
                        placeholder="********"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                      Message <span className="text-[#0AB998]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-4 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#0AB998]/30 focus:border-[#0AB998] transition-all duration-300 outline-none resize-none text-gray-900 placeholder-gray-500 text-lg"
                      placeholder="Décrivez vos besoins, vos objectifs et comment nous pouvons vous aider à transformer votre exploitation agricole..."
                    ></textarea>
                  </div>

                  {/* Bouton d'envoi */}
                  <button
                    type="submit"
                    className="w-full py-5 bg-gradient-to-r from-[#0AB998] to-green-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#0AB998]/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 group"
                  >
                    <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    Envoyer le Message
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    * Champs obligatoires. Vos données sont sécurisées et confidentielles.
                  </p>
                </form>
              </div>

              {/* Informations de Contact en dessous du formulaire */}
              <div className="mt-12 grid md:grid-cols-3 gap-8">
                {/* Téléphone */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0AB998] to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Téléphone</h4>
                  <p className="text-gray-600 text-lg mb-1">+222 45565555</p>
                  {/* <p className="text-gray-500 text-sm">Lun-Ven: 9h-18h</p> */}
                </div>

                {/* Email */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0AB998] to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600 text-lg mb-1">contact@agrotech.com</p>
                  <p className="text-gray-500 text-sm">Réponse sous 24h</p>
                </div>

                {/* Adresse */}
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0AB998] to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Siège Social</h4>
                  <p className="text-gray-600 text-sm">123 Avenue</p>
                  <p className="text-gray-600 text-sm">Nouakchott</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>









      {/* Footer */}
      < footer className="py-12 px-6 border-t border-gray-200 bg-gray-50" >
        <div className="max-w-6xl mx-auto text-center text-gray-700">
          <div className="flex items-center justify-center gap-3 mb-4">

            <span className="text-xl font-bold" style={{ color: colors.primary }}>
              AgroTech Mauritanie
            </span>
          </div>
          <p>© 2025 AgriTech Mauritanie. Tous droits réservés.</p>
          <p className="mt-2 text-sm">Innovation agricole pour un avenir durable en Mauritanie</p>
        </div>
      </footer >
    </div >
  );
}