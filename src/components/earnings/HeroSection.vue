<template>
    <div class="flex justify-center items-start flex-col p-3 space-y-3 w-full">
        <p class="text-lg text-left font-bold text-[#1e1e1e]">Earnings</p>
        <p class="font-medium text-left text-[#494949]">Summary</p>

        <section class="flex justify-center items-start pt-8 space-x-4">
            <p
                class="flex space-x-3 justify-start items-center border border-[#543ec5] rounded-xl p-2"
            >
                <span
                    ><img src="assets/earnings.svg" alt="earnings" class="w-6"
                /></span>
                <span>Earnings this week</span>
                <span class="font-bold">$2,500</span>
            </p>
            <p
                class="flex space-x-3 justify-start items-center border border-[#543ec5] rounded-xl p-2"
            >
                <span
                    ><img src="assets/pending.svg" alt="pending" class="w-6"
                /></span>
                <span>Pending approvals</span>
                <span class="font-bold">$500</span>
            </p>
        </section>
    </div>
</template>

<script>
export default {
    name: "HeroSection",
};
</script>
