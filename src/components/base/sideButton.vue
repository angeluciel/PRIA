<template>
  <div
    class="flex gap-2 pl-[62px] pr-8 py-4 items-center justify-start rounded-r-full cursor-pointer"
    :class="[toggled ? 'text-white bg-red-500' : 'text-zinc-400 hover:bg-red-500/10']"
  >
    <component :is="iconComponent" v-if="iconComponent" />
    <span>{{ btnText }}</span>
  </div>
</template>

<script setup lang="ts">
import { Database, RotateCcw, LockKeyhole } from 'lucide-vue-next'
import { computed } from 'vue'

interface Props {
  toggled: boolean
  btnText: string
  iconName: string
}

const props = defineProps<Props>()

const iconMap = {
  Database,
  RotateCcw,
  LockKeyhole,
}

const iconComponent = computed(() => {
  return props.iconName ? iconMap[props.iconName as keyof typeof iconMap] : null
})
</script>

<style scoped></style>
