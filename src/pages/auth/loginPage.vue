<template>
  <div
    class="bg-[url('https://wallpaperbat.com/img/699029-green-blue-purple-blur-4k-2048x1152-resolution-hd-4k-wallpaper-image-background-photo-and-picture.jpg')] h-screen w-screen flex flex-col justify-center items-center"
  >
    <!--main box-->
    <div
      class="flex flex-col bg-gray-900 opacity-85 rounded-4xl p-14 gap-8 justify-center items-center w-[600px]"
    >
      <!--logo-->
      <div
        class="flex gap-1.5 justify-center items-center font-nunito font-bold tracking-[0.2em] text-[2rem]"
      >
        <span class="text-white font-raleway">PRI</span>
        <img src="../../../public/images/Subtract.svg" alt="din_logo" />
      </div>
      <!--forms-->
      <div class="flex flex-col gap-8 w-full">
        <!--entraID-->
        <div class="flex flex-col gap-8 w-full">
          <button class="bg-cyan-300 rounded-lg p-3 gap-6 flex justify-center items-center">
            <img src="../../../public/images/entra.png" class="h-8 rounded-lg" alt="entra_logo" />
            <span class="font-nunito font-extrabold text-xl">Entrar com EntraID</span>
          </button>
        </div>
        <!--divider-->
        <div class="flex items-center p-5 text-white font-bold">ou</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
