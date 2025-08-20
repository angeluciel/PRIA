<template>
  <div
    class="bg-[url('https://wallpaperbat.com/img/699029-green-blue-purple-blur-4k-2048x1152-resolution-hd-4k-wallpaper-image-background-photo-and-picture.jpg')] h-screen w-screen flex flex-col justify-center items-center"
  >
    <!--main box-->
    <div
      class="flex flex-col bg-zinc-950/90 opacity-85 rounded-lg p-14 gap-4 justify-center items-center w-[600px]"
    >
      <!--logo-->
      <priaLogo />

      <!--forms-->
      <div class="flex flex-col gap-8 w-full">
        <!--entraID-->
        <div class="flex flex-col w-full items-center">
          <button
            type="button"
            class="login-btn border-2 border-cyan-300 overflow-hidden"
            :class="{ 'w-full': !isClicked }"
            :disabled="submitting"
            ref="buttonEl"
            @mouseenter="azureME"
            @mouseleave="azureML"
            @click="azureClick"
          >
            <span class="flex items-center transition-transform gap-2 relative">
              <img
                class="h-7 opacity-0 absolute -left-[40px]"
                ref="logoEl"
                src="/images/azure.png"
                alt="sla"
              />
              <span class="text-white" ref="btnTextEl">Entrar com Azure</span>
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
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { useRouter } from 'vue-router'
import priaLogo from '@/components/priaLogo.vue'

const router = useRouter()
const submitting = ref(false)
const isClicked = ref(false)

const buttonEl = ref<HTMLButtonElement | null>(null)
const logoEl = ref<HTMLImageElement | null>(null)
const btnTextEl = ref<HTMLSpanElement | null>(null)

let hoverTl: gsap.core.Timeline
let clickTl: gsap.core.Timeline

onMounted(() => {
  if (!buttonEl.value || !logoEl.value || !btnTextEl.value) return

  gsap.set(logoEl.value, { opacity: 0, x: -40, scale: 0.8 })
  gsap.defaults({ overwrite: 'auto' })

  hoverTl = gsap
    .timeline({ paused: true })
    .to(btnTextEl.value, { x: 15, duration: 0.3, ease: 'power2.out' }, 0)
    .to(logoEl.value, { opacity: 1, x: 12, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }, 0.1)

  clickTl = gsap
    .timeline({
      paused: true,
      onComplete: () => {
        router.push('/dashboard')
      },
    })
    .to(btnTextEl.value, { opacity: 0, duration: 0.3, ease: 'power2.in' }, 0)
    .to(logoEl.value, { x: 0, scale: 1.2, duration: 0.3, ease: 'back.out' }, 0)
    .to(
      buttonEl.value,
      { width: '48px', borderRadius: '50%', duration: 0.6, ease: 'back.out(1.4)' },
      0.4,
    )
    .to(logoEl.value, { scale: 1, x: 51, duration: 0.3, ease: 'back.out(1.4)' }, 0.6)
    .to(logoEl.value, { rotation: 3650, duration: 0.6, ease: 'back.out' }, 0.8)
})

function loginUser() {
  console.info('login being implemented')
}

const azureME = () => {
  if (!isClicked.value) hoverTl.timeScale(1).play()
}
const azureML = () => {
  if (!isClicked.value) hoverTl.timeScale(1.4).reverse()
} // fixed casing
const azureClick = () => {
  if (!isClicked.value && buttonEl.value) {
    const w = buttonEl.value.offsetWidth
    gsap.set(buttonEl.value, { width: w })

    isClicked.value = true
    clickTl.play()
  }
}

/*
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
*/
</script>

<style scoped></style>
