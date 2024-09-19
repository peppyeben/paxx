<template>
    <div class="flex pt-16">
        <button
            @click="toggleSidebar"
            class="bg-[#543ec5] shadow-1 shadow-[#ab9aff] text-white fixed top-4 left-4 z-50 rounded-full w-14 h-14"
        >
            =
        </button>
        <SideBar :isOpen="isOpen" @toggle-sidebar="toggleSidebar" />
    </div>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
import { computed } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import { useStore } from "vuex";

export default {
    name: "TransactionsView",
    components: {
        SideBar,
    },
    setup() {
        const store = useStore();

        onBeforeRouteLeave(() => {
            store.commit("SET_SIDEBAR_STATUS", false);
        });

        const isOpen = computed(() => {
            return store.getters.GET_SIDEBAR_STATUS;
        });

        const toggleSidebar = () => {
            store.commit("SET_SIDEBAR_STATUS");
        };

        return {
            isOpen,
            toggleSidebar,
        };
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
