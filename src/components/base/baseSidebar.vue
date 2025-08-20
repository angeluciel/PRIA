<template>
  <div class="flex flex-col justify-between pt-20 pb-16 bg-black items-start h-screen">
    <!--top part-->
    <div class="flex flex-col w-full gap-20 items-start justify-start">
      <!--logo-->
      <div class="flex w-full px-16">
        <priaLogo />
      </div>
      <!--options-->
      <div class="flex flex-col gap-7 font-gabarito">
        <sideButton btnText="Backup & Replication" :toggled="true" iconName="Database" />
        <sideButton btnText="Patches & Update" :toggled="false" iconName="RotateCcw" />
        <sideButton btnText="To be done" :toggled="false" iconName="LockKeyhole" />
      </div>
    </div>
    <div class="w-full flex gap-2 px-[62px] text-white font-gabarito cursor-pointer">
      <ChevronsLeft />
      <span>Recolher Menu</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronsLeft } from 'lucide-vue-next'
import priaLogo from '../priaLogo.vue'
import sideButton from './sideButton.vue'
</script>

<style scoped></style>
