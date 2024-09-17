<template>
    <div class="flex pt-16">
        <button
            @click="toggleSidebar"
            class="bg-[#543ec5] shadow-1 shadow-[#ab9aff] text-white fixed top-4 left-4 z-50 rounded-full w-14 h-14"
        >
            =
        </button>
        <SideBar :isOpen="isOpen" @toggle-sidebar="toggleSidebar" />

        <MainSection :isOpen="isOpen" />
    </div>
</template>

<script>
import { ref } from "vue";
import SideBar from "@/components/SideBar.vue";
import MainSection from "@/components/MainSection.vue";

export default {
    components: {
        SideBar,
        MainSection,
    },
    setup() {
        const isOpen = ref(true);

        const toggleSidebar = () => {
            isOpen.value = !isOpen.value;
        };

        return {
            isOpen,
            toggleSidebar,
        };
    },
};
</script>

<style>
/* Add custom styles if needed */
</style>
