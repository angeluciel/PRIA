<template>
  <div
    class="bg-[url('https://wallpaperbat.com/img/699029-green-blue-purple-blur-4k-2048x1152-resolution-hd-4k-wallpaper-image-background-photo-and-picture.jpg')] h-screen w-screen flex flex-col justify-center items-center"
  >
    <!--main box-->
    <div
      class="flex flex-col bg-zinc-950/90 opacity-85 rounded-xl p-14 gap-8 justify-center items-center w-[600px]"
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
        <div class="flex flex-col gap-8 w-full">
          <button class="login-btn gap-6">
            <img src="/images/entra.png" class="h-8 rounded-lg" alt="entra_logo" />
            <span class="font-nunito font-semibold text-zinc-900">Entrar com EntraID</span>
          </button>
        </div>
        <!--divider-->
        <div class="flex items-center p-5 text-white font-bold separator">ou</div>
      </div>
      <!-- actual forms -->
      <form class="flex flex-col gap-8 w-full font-nunito text-gray-200" @submit.prevent>
        <fieldset class="flex w-full flex-col gap-2">
          <label for="mail" class="ml-1 font-semibold tracking-wide">Email</label>
          <input
            type="email"
            id="mail"
            placeholder="email@company.com"
            class="w-full p-4 bg-black/90 rounded-lg outline-hidden border-2 border-gray-700 focus:border-cyan-300 transition-all duration-300"
          />
        </fieldset>
        <button type="button" class="login-btn" @click="$router.push({ name: 'dashboardteste' })">
          <!-- change to type="Submit" later-->
          Continuar com email
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
