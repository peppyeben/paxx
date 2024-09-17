<template>
    <div
        :class="[
            isOpen ? 'translate-x-0' : '-translate-x-full',
            'fixed top-0 left-0 w-64 pt-20 px-3 h-full bg-[#543ec5] text-white transition-transform duration-300 ease-in-out z-40',
        ]"
    >
        <div class="flex relative h-full">
            <section
                class="flex justify-start items-start text-left flex-col space-y-3 py-6 px-3"
            >
                <p class="font-bold text-lg text-white">Home</p>
                <p class="font-bold text-lg text-white">Transactions</p>
                <p class="font-bold text-lg text-[#d36332]">Earnings</p>
            </section>
            <section class="mt-auto absolute bottom-0 py-6 px-3">
                <p class="rounded-lg flex border border-white space-x-3 p-2">
                    <span>ic</span>
                    <span>Paxx.solbrain</span>
                </p>
            </section>
        </div>
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
