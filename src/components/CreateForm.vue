<template>
    <div
        class="rounded-xl flex flex-col space-y-8 h-max justify-start items-center bg-white bg-opacity-30 backdrop-blur-md shadow-lg border border-white border-opacity-20 py-6 pt-10"
        :class="{
            'flex-1': isOpen,
            'w-full': !isOpen,
            'ml-64': isOpen,
            'ml-0': !isOpen,
        }"
        style="transition: margin-left 0.3s, width 0.3s"
    >
        <p class="font-bold text-2xl text-center">
            What type of account would you like to create?
        </p>
        <form
            class="flex flex-col justify-start items-start space-y-6 w-full px-[30%]"
            ref="createForm"
            @click="submitForm"
        >
            <section
                class="flex flex-col justify-start items-start space-y-3 w-full"
            >
                <label
                    for="options"
                    class="block text-xl font-bold text-[#2c2c2c]"
                    >Country</label
                >
                <select
                    id="options"
                    class="mt-1 py-4 px-4 block w-full bg-transparent appearance-none border border-[#2c2c2c] rounded-md shadow-sm focus:outline-none sm:text-sm"
                >
                    <option value="" selected disabled>Select a country</option>
                    <option value="Zamfara">Zamfara</option>
                </select>
            </section>
            <section
                class="flex flex-col justify-center items-start space-y-3 w-full"
            >
                <label
                    for="options"
                    class="block text-xl font-bold text-[#2c2c2c]"
                    >Select account type
                </label>
                <button
                    class="p-4 w-full flex flex-col space-y-2 border border-[#2c2c2c] rounded-md shadow-sm hover:bg-white hover:bg-opacity-5 hover:backdrop-blur-md"
                    type="button"
                >
                    <span class="font-medium">Business account </span>
                    <span class="text-sm"
                        >For freelancers, start ups, traders and sole owners
                    </span>
                </button>
                <button
                    class="p-4 w-full flex flex-col space-y-2 border border-[#2c2c2c] rounded-md shadow-sm hover:bg-white hover:bg-opacity-5 hover:backdrop-blur-md"
                    type="button"
                >
                    <span class="font-medium">Other entities </span>
                    <span class="text-sm"
                        >For charities, non-profits & religious institutions.
                    </span>
                </button>
            </section>
            <section
                class="flex flex-col justify-start items-start space-y-3 w-full"
            >
                <label
                    for="password"
                    class="block text-xl font-bold text-[#2c2c2c]"
                >
                    Password
                </label>
                <div class="relative w-full">
                    <input
                        :type="passwordVisible ? 'text' : 'password'"
                        name="password"
                        id="password"
                        class="mt-1 py-4 px-4 block w-full bg-transparent placeholder-[#2c2c2c] text-[#2c2c2c] appearance-none border border-[#2c2c2c] rounded-md shadow-sm focus:outline-none sm:text-sm"
                        placeholder="Input password"
                    />

                    <div
                        @click="togglePasswordVisibility"
                        id="togglePassword"
                        class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    >
                        <svg
                            v-if="passwordVisible"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-[#2c2c2c]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>

                        <svg
                            v-else
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-[#2c2c2c]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.27-2.944-9.543-7a9.965 9.965 0 012.388-4.54M4.422 4.422A9.959 9.959 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.963 9.963 0 01-3.203 4.779M9.88 9.88a3 3 0 104.24 4.24"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 3l18 18"
                            />
                        </svg>
                    </div>
                </div>
            </section>
            <section
                class="flex flex-col justify-start items-start space-y-3 w-full"
            >
                <button
                    class="w-full p-3 text-white bg-[#7656c9] rounded-lg font-bold hover:bg-opacity-80"
                    type="submit"
                >
                    Create Account
                </button>
            </section>
        </form>
        <p class="flex space-x-2 text-center">
            <span>Already have an account?</span>
            <span class="text-[#e27625] cursor-pointer hover:text-[#c05402]">
                Login here</span
            >
        </p>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: "CreateForm",
    props: {
        isOpen: {
            type: Boolean,
            required: true,
        },
    },
    setup() {
        const createForm = ref(null);
        const passwordVisible = ref(false);

        async function submitForm(e) {
            e.preventDefault();
        }

        const togglePasswordVisibility = () => {
            passwordVisible.value = !passwordVisible.value;
        };

        return {
            createForm,
            submitForm,
            togglePasswordVisibility,
            passwordVisible,
        };
    },
};
</script>
