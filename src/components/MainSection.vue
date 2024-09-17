<template>
    <div
        :class="[
            isOpen ? 'ml-64' : 'ml-0',
            'transition-all duration-300 ease-in-out flex-1 p-4',
        ]"
    >
        <HeroSection></HeroSection>
        <PaymentSection></PaymentSection>
    </div>
</template>

<script>
import HeroSection from "./earnings/HeroSection.vue";
import PaymentSection from "./earnings/PaymentSection.vue";

export default {
    name: "MainSection",
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
    },
    components: {
        HeroSection,
        PaymentSection,
    },
};
</script>
