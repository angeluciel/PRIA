<template>
  <div class="flex flex-wrap w-full gap-4 p-4">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full font-gabarito">
      <!-- Company Section -->
      <div
        v-for="company in companies"
        :key="company.id"
        class="border border-emerald-500 rounded-lg bg-emerald-100"
        :class="[company.expanded ? 'h-fit' : 'h-20']"
      >
        <!-- Company Header -->
        <div
          class="flex items-center justify-between p-4 cursor-pointer"
          @click="toggleCompany(company.id)"
        >
          <div class="flex items-center gap-4">
            <!-- Collapse/Expand Arrow -->
            <ChevronDown
              :class="[
                'w-4 h-4 transition-transform text-emerald-900',
                company.expanded ? 'rotate-0' : '-rotate-90',
              ]"
            />
            <!-- Company Status Icon -->
            <div class="w-6 h-6 text-emerald-500 rounded-full flex items-center justify-center">
              <CircleCheckBig />
            </div>
            <!-- Company Info -->
            <div>
              <h3 class="font-semibold text-zinc-900">{{ company.name }}</h3>
              <p class="text-sm text-zinc-400">
                {{ company.description }} • {{ company.jobCount }} Jobs
              </p>
            </div>
          </div>

          <!-- Last Execution Info -->
          <div class="text-right">
            <p class="text-sm font-medium text-gray-700">Última Execução:</p>
            <div class="flex items-center gap-2">
              <p class="text-sm text-gray-500">{{ company.lastExecution }}</p>
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <!-- Jobs List (Collapsible) -->
        <div
          v-show="company.expanded"
          class="border-t w-full h-full px-8 py-4 border-green-200 bg-white/50"
        >
          <div
            v-for="job in company.jobs"
            :key="job.id"
            class="flex w-full items-center justify-between p-4 border-b border-gray-100 last:border-b-0"
          >
            <div class="flex items-center gap-3">
              <!-- Job Icon -->
              <div class="w-8 h-8 text-zinc-900 rounded flex items-center justify-center">
                <Server />
              </div>
              <!-- Job Status -->
              <div class="w-6 h-6 text-green-400 rounded-full flex items-center justify-center">
                <CircleCheckBig />
              </div>
              <!-- Job Info -->
              <div>
                <h4 class="font-medium text-gray-800">{{ job.name }}</h4>
                <p class="text-sm text-gray-500">{{ job.type }}</p>
              </div>
            </div>

            <!-- Job Status Info -->
            <div class="text-right">
              <p class="text-sm text-gray-600">Última execução: {{ job.lastExecution }}</p>
              <p class="text-sm font-medium" :class="getStatusColor(job.status)">
                Status: {{ job.status }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown, CircleCheckBig, Server } from 'lucide-vue-next'

interface Job {
  id: string
  name: string
  type: string
  lastExecution: string
  status: 'Sucesso' | 'Erro' | 'Aviso'
}

interface Company {
  id: string
  name: string
  description: string
  jobCount: number
  lastExecution: string
  expanded: boolean
  jobs: Job[]
}

const companies = ref<Company[]>([
  {
    id: '1',
    name: 'Empresa 1',
    description: 'Pensar numa legenda',
    jobCount: 8,
    lastExecution: '1 hora atrás',
    expanded: true,
    jobs: [
      {
        id: '1-1',
        name: 'host-VM-BZD-daily',
        type: 'Veeam Hyper-V',
        lastExecution: '2 horas atrás',
        status: 'Sucesso',
      },
      {
        id: '1-2',
        name: 'host-VM-BZD-daily',
        type: 'Veeam Hyper-V',
        lastExecution: '2 horas atrás',
        status: 'Sucesso',
      },
      {
        id: '1-3',
        name: 'host-VM-BZD-daily',
        type: 'Veeam Hyper-V',
        lastExecution: '2 horas atrás',
        status: 'Sucesso',
      },
      {
        id: '1-4',
        name: 'host-VM-BZD-daily',
        type: 'Veeam Hyper-V',
        lastExecution: '2 horas atrás',
        status: 'Sucesso',
      },
    ],
  },
  {
    id: '2',
    name: 'Empresa 2',
    description: 'Pensar numa legenda',
    jobCount: 8,
    lastExecution: '1 hora atrás',
    expanded: false,
    jobs: [
      {
        id: '2-1',
        name: 'backup-server-daily',
        type: 'Veeam VMware',
        lastExecution: '3 horas atrás',
        status: 'Sucesso',
      },
    ],
  },
  {
    id: '3',
    name: 'Empresa 3',
    description: 'Pensar numa legenda',
    jobCount: 1,
    lastExecution: '3 hora atrás',
    expanded: false,
    jobs: [
      {
        id: '2-1',
        name: 'backup-server-daily',
        type: 'Veeam VMware',
        lastExecution: '3 horas atrás',
        status: 'Erro',
      },
    ],
  },
])

const toggleCompany = (companyId: string) => {
  const company = companies.value.find((c) => c.id === companyId)
  if (company) {
    company.expanded = !company.expanded
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Sucesso':
      return 'text-green-600'
    case 'Erro':
      return 'text-red-600'
    case 'Aviso':
      return 'text-yellow-600'
    default:
      return 'text-gray-600'
  }
}
</script>
