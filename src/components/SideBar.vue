<template>
    <div
        :class="[
            isOpen ? 'translate-x-0' : '-translate-x-full',
            'fixed top-0 left-0 w-64 pt-20 px-3 h-full bg-[#543ec5] text-white transition-transform duration-300 ease-in-out z-40',
        ]"
    >
        <div class="flex relative h-screen"></div>
    </div>
</template>

<script>
export default {
    name: "SideBar",
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
    },
    setup() {},
};
</script>
