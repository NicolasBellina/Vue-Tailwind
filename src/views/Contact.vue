<template>
  <div class="page-contact bg-gradient-to-br from-indigo-100 to-purple-100 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div class="text-center mb-12">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Contactez-nous</h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos projets.</p>
      </div>

      <div class="bg-white shadow-2xl rounded-lg overflow-hidden">
        <div class="md:flex">
          <div class="md:w-1/2 bg-indigo-600 p-8 text-white flex flex-col justify-center">
            <h2 class="text-3xl font-bold mb-4">Restons en contact</h2>
            <p class="mb-6">Remplissez le formulaire et notre équipe vous répondra dans les plus brefs délais.</p>
            <div class="flex items-center mb-4">
              <svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+33 1 23 45 67 89</span>
            </div>
            <div class="flex items-center mb-4">
              <svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contact@votreentreprise.com</span>
            </div>
            <div class="flex items-center">
              <svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>123 Rue du Commerce, 75000 Paris</span>
            </div>
          </div>

          <div class="md:w-1/2 p-8">
            <form @submit.prevent="soumettreFormulaire">
              <div class="grid grid-cols-1 gap-6">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label for="prenom" class="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                    <input v-model="formulaire.prenom" type="text" name="prenom" id="prenom" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  </div>
                  <div>
                    <label for="nom" class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <input v-model="formulaire.nom" type="text" name="nom" id="nom" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  </div>
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input v-model="formulaire.email" type="email" name="email" id="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </div>
                <div>
                  <label for="telephone" class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input v-model="formulaire.telephone" type="tel" name="telephone" id="telephone" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea v-model="formulaire.message" name="message" id="message" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                </div>
                <div>
                  <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">Envoyer</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'

const formulaire = reactive({
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  message: ''
})

const erreurs = ref({})
const soumissionReussie = ref(false)
const envoiEnCours = ref(false)

const validerFormulaire = () => {
  erreurs.value = {}
  if (!formulaire.prenom) erreurs.value.prenom = 'Le prénom est requis'
  if (!formulaire.nom) erreurs.value.nom = 'Le nom est requis'
  if (!formulaire.email) erreurs.value.email = 'L\'email est requis'
  else if (!/^\S+@\S+\.\S+$/.test(formulaire.email)) erreurs.value.email = 'L\'email n\'est pas valide'
  if (!formulaire.message) erreurs.value.message = 'Le message est requis'
  return Object.keys(erreurs.value).length === 0
}

const soumettreFormulaire = async () => {
  if (!validerFormulaire()) return

  envoiEnCours.value = true
  try {
    // Remplacez l'URL par celle de votre API
    await axios.post('https://votre-api.com/contact', formulaire)
    soumissionReussie.value = true
    // Réinitialiser le formulaire
    Object.keys(formulaire).forEach(key => formulaire[key] = '')
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error)
    alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.')
  } finally {
    envoiEnCours.value = false
  }
}
</script>