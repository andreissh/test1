<script setup lang="ts">
import { ref, computed } from 'vue'
import { tableData } from '@/data/tableData'
import { tableHeaders } from '@/data/tableData'
import StatusComponent from './StatusComponent.vue'

const data = ref(tableData)

const rowsPerPage = 10
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(data.value.length / rowsPerPage))

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage
  return data.value.slice(start, start + rowsPerPage)
})

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const visiblePages = computed(() => {
  if (totalPages.value <= 6) {
    return Array.from({ length: totalPages.value }, (_, i) => i + 1)
  }

  if (currentPage.value <= 3) {
    return Array.from({ length: 5 }, (_, i) => i + 1)
  }

  if (currentPage.value >= totalPages.value - 2) {
    return Array.from({ length: 5 }, (_, i) => i + totalPages.value - 4)
  }

  if (currentPage.value > 3 && currentPage.value < totalPages.value - 2) {
    return Array.from({ length: 3 }, (_, i) => i + currentPage.value - 1)
  }

  return Array.from({ length: 5 }, (_, i) => i + currentPage.value - 2)
})
</script>

<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr class="striped">
          <th v-for="header in tableHeaders" :key="header.text">{{ header.text }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in paginatedData"
          :key="row.id"
          :class="{ striped: index % 2 === 1 }"
        >
          <td>{{ row.datetime }}</td>
          <td><StatusComponent :status="row.status" /></td>
          <td>{{ row.module }}</td>
          <td>{{ row.sessionType }}</td>
          <td>{{ row.room }}</td>
          <td>{{ row.group }}</td>
        </tr>
      </tbody>
    </table>

    <div class="pagination striped">
      <button @click="prevPage" :disabled="currentPage === 1">{{ '<' }}</button>
      <button v-if="totalPages > 6 && currentPage > 3" @click="changePage(1)">
        {{ 1 }}
      </button>
      <span v-if="totalPages > 6 && currentPage > 3">...</span>
      <button
        v-for="page in visiblePages"
        :key="page"
        @click="changePage(page)"
        :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>
      <span v-if="totalPages > 6 && currentPage <= totalPages - 3">...</span>
      <button v-if="totalPages > 6 && currentPage < totalPages - 2" @click="changePage(totalPages)">
        {{ totalPages }}
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages">{{ '>' }}</button>
    </div>
  </div>
</template>

<style scoped>
.table-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  border: 1px solid #e8eaec;
  border-radius: 0.75rem;
  padding: 0;
}

.table {
  width: 100%;
}

.table thead {
  background-color: #f5f5f5;
  font-weight: bold;
  display: flex;
  max-height: 52px;
  border-radius: 0.75rem 0.75rem 0 0;
}

.table thead tr {
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 2fr 4fr 2fr 2fr 2fr;
  grid-template-rows: 1.75rem;
  align-items: center;
  border-radius: 0.75rem;
}

.table thead tr th {
  text-align: left;
}

.table tbody {
  display: block;
  max-height: calc(100vh - 238px);
  overflow-y: auto;
}

.table tbody tr {
  display: grid;
  grid-template-columns: 2fr 2fr 4fr 2fr 2fr 2fr;
}

.table th,
.table td,
.table thead tr,
.table thead td {
  padding: 0.75rem;
  border: none;
  text-align: left;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
}

.striped {
  background-color: #f5f7f9;
}

.pagination {
  display: flex;
  padding: 0.75rem 1rem;
  border-top: 1px solid #e8eaec;
  border-radius: 0 0 0.75rem 0.75rem;
}

.pagination button {
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  margin: 0 0.25rem;
  cursor: pointer;
  background-color: white;
  border-radius: 0.5rem;
}

.page-left button {
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  margin: 0 0.25rem;
  cursor: pointer;
  background-color: white;
  border-radius: 0.5rem;
}

.pagination span {
  padding: 0.375rem 0.75rem;
  margin: 0 0.25rem;
  cursor: context-menu;
  background-color: white;
  border-radius: 0.5rem;
}

.pagination button:hover {
  background-color: #e0e0e0;
}

.pagination button.active {
  color: #3761f3;
  border: 1px solid #3761f3;
  background-color: #fff;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
