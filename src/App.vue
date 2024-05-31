
<template>
  <div>
    <Button label="Submit" @click="test" />
    <Button label="Submit" @click="test2" />
    <div class="card">
        <Chip class="pl-0 pr-3">
            <span class="bg-primary border-circle w-2rem h-2rem flex align-items-center justify-content-center">P</span>
            <span class="ml-2 font-medium">PRIME</span>
        </Chip>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePrimeVue } from "primevue/config";

const PrimeVue = usePrimeVue();
// console.log(PrimeVue.changeTheme);
//切换主题色
const test = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/src/themes/soho-light/theme.css";
  document.head.appendChild(link);
};
const test2 = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "/src/themes/arya-purple/theme.css";
  document.head.appendChild(link);
};
</script>
