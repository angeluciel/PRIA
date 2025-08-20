<template>
  <div class="relative">
    <aside
      class="transition-transform fixed left-0 top-0 duration-300 ease-in-out h-dvh w-[18rem] z-50 bg-zinc-950"
    >
      <baseSidebar />
    </aside>
    <div class="flex-1 ml-[18rem]">
      <header>
        <baseHeader :Success="8" :Warning="3" :ErrorN="1" />
      </header>
      <main>
        <baseAccordion />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import baseSidebar from '@/components/base/baseSidebar.vue'
import baseHeader from '@/components/base/baseHeader.vue'
import baseAccordion from '@/components/base/backup/baseAccordion.vue'
</script>

<style scoped></style>
