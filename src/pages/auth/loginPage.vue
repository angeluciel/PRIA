<template>
  <div
    class="bg-[url('https://wallpaperbat.com/img/699029-green-blue-purple-blur-4k-2048x1152-resolution-hd-4k-wallpaper-image-background-photo-and-picture.jpg')] h-screen w-screen flex flex-col justify-center items-center"
  >
    <!--main box-->
    <div
      class="flex flex-col bg-zinc-950/90 opacity-85 rounded-lg p-14 gap-4 justify-center items-center w-[600px]"
    >
      <!--logo-->
      <div
        class="flex gap-1 justify-center items-center font-nunito font-bold tracking-[0.2em] text-[2rem]"
      >
        <span class="text-white font-raleway">PRI</span>
        <img src="/images/Subtract.svg" alt="din_logo" />
      </div>

      <!--forms-->
      <div class="flex flex-col gap-8 w-full">
        <!--entraID-->
        <div class="flex flex-col w-full">
          <button
            type="button"
            class="login-btn border-2 border-cyan-300 hover:bg-cyan-300/20 overflow-hidden"
            :disabled="submitting"
          >
            <span class="flex items-center transition-transform ease-in duration-300 gap-2">
              <img src="/images/azure.png" class="h-7 rounded-lg" alt="entra_logo" />
              <span class="font-nunito font-semibold text-cyan-300">Entrar com Azure</span>
            </span>
          </button>
        </div>
        <!--divider-->
        <div class="flex items-center p-5 text-white font-bold separator">ou</div>
      </div>
      <!-- actual forms -->
      <form
        class="flex flex-col gap-8 w-full font-nunito text-gray-200"
        @submit.prevent="loginUser"
      >
        <fieldset class="flex w-full flex-col gap-2">
          <label for="mail" class="ml-1 font-semibold tracking-wide">Email</label>
          <input
            type="email"
            id="mail"
            placeholder="email@company.com"
            required
            :disabled="submitting"
            class="w-full p-4 bg-black/90 rounded-sm h-default outline-hidden border-2 border-gray-700 focus:border-cyan-300 transition-all duration-300"
          />
        </fieldset>
        <button
          type="submit"
          class="login-btn bg-cyan-300 text-zinc-900 hover:bg-cyan-400"
          :disabled="submitting"
        >
          <!-- change to type="Submit" later-->
          Continuar com email
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const submitting = ref(false)

function loginUser() {
  console.info('login being implemented')
}

const loginWithEntraID = async () => {
  submitting.value = true
  error.value = ''
  success.value = ''

  try {
    // Simulate EntraID login process
    // Replace this with your actual EntraID integration
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // For demo purposes, just show success
    success.value = 'Login com EntraID simulado com sucesso!'

    // In a real app, you would:
    // 1. Redirect to Microsoft's OAuth endpoint
    // 2. Handle the callback
    // 3. Process the token
  } catch (err) {
    error.value = 'Erro ao conectar com EntraID. Tente novamente.'
    console.error('EntraID login error:', err)
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped></style>
