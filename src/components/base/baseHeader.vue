<template>
  <div
    class="flex w-full justify-between items-center pt-12 pr-20 pb-6 pl-10 border-b-2 border-zinc-300"
  >
    <div class="flex flex-col gap-3 items-start justify-start">
      <h1 class="font-nunito text-4xl font-extrabold">Backup Dashboard</h1>
      <h3 class="font-gabarito text-zinc-400">
        Monitore e Gerencie o status do backup dos clientes
      </h3>
    </div>
    <!-- left -->
    <div class="flex gap-8 font-gabarito">
      <div class="flex flex-col items-center">
        <span class="text-2xl font-bold text-green-600">{{ Success || 0 }}</span>
        <span class="text-zinc-400">Success</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-2xl font-bold text-amber-400">{{ Warning || 0 }}</span>
        <span class="text-zinc-400">Success</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-2xl font-bold text-red-500">{{ ErrorN || 0 }}</span>
        <span class="text-zinc-400">Success</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  ErrorN?: number
  Warning?: number
  Success?: number
}

const props = defineProps<Props>()
</script>

<style scoped></style>
