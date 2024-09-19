<template>
    <div
        :class="[
            isOpen ? 'translate-x-0' : '-translate-x-full',
            'fixed top-0 left-0 w-64 pt-20 px-3 h-full bg-[#543ec5] text-white transition-transform duration-300 ease-in-out z-40',
        ]"
    >
        <div class="flex flex-col relative h-full pt-6">
            <section
                class="rounded-lg p-2 flex justify-center items-center space-x-2 bg-[#cac2f2]"
            >
                <span class="text-[#fefefe]">7EcDh...SYGxX</span>
                <span
                    ><img src="assets/phantom.svg" alt="earnings" class="w-6"
                /></span>
            </section>
            <section
                class="flex justify-start items-start text-left flex-col space-y-3 py-6 px-3"
            >
                <router-link
                    :to="{ name: 'home' }"
                    class="font-bold text-lg"
                    :class="{
                        'text-[#d36332]': isActive('home'),
                        'text-white': !isActive('home'),
                    }"
                >
                    Home
                </router-link>

                <router-link
                    :to="{ name: 'transactions' }"
                    class="font-bold text-lg"
                    :class="{
                        'text-[#d36332]': isActive('transactions'),
                        'text-white': !isActive('transactions'),
                    }"
                >
                    Transactions
                </router-link>

                <router-link
                    :to="{ name: 'earnings' }"
                    class="font-bold text-lg"
                    :class="{
                        'text-[#d36332]': isActive('earnings'),
                        'text-white': !isActive('earnings'),
                    }"
                >
                    Earnings
                </router-link>

                <router-link
                    :to="{ name: 'create' }"
                    class="font-bold text-lg"
                    :class="{
                        'text-[#d36332]': isActive('create'),
                        'text-white': !isActive('create'),
                    }"
                >
                    Create
                </router-link>
            </section>
            <section class="mt-auto absolute bottom-0 py-6 px-3">
                <p class="rounded-lg flex border border-white space-x-3 p-2">
                    <span
                        ><img
                            src="assets/paxx-sol.svg"
                            alt="earnings"
                            class="w-6"
                    /></span>
                    <span>Paxx.solbrain</span>
                </p>
            </section>
        </div>
    </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
    name: "SideBar",
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
    },
    setup() {
        const router = useRouter();

        const isActive = (routeName) => {
            return router.currentRoute.value.name === routeName;
        };

        return {
            isActive,
        };
    },
};
</script>
