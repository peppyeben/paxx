<template>
    <transition name="fade" mode="out-in">
        <router-view />
    </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    @apply transition-opacity duration-1000;
}

.fade-enter-from,
.fade-leave-to {
    @apply opacity-0;
}

/* Slide transition */
/* .slide-enter-active,
.slide-leave-active {
    @apply transition-transform duration-500;
}

.slide-enter-from {
    @apply translate-x-full;
}

.slide-leave-to {
    @apply -translate-x-full;
} */
</style>
