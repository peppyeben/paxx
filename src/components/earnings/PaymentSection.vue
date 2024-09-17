<template>
    <div class="flex justify-center items-start flex-col p-3 w-full">
        <p class="text-lg text-left font-bold text-[#1e1e1e] py-3">
            Payment history
        </p>
        <div class="flex flex-col w-full">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table
                            class="min-w-full text-left text-sm font-light text-[#787878] border border-[#d4d4d4] rounded-2xl overflow-hidden"
                        >
                            <thead
                                class="border border-[#d4d4d4] rounded-2xl font-medium uppercase bg-[#f5f6f9]"
                            >
                                <tr>
                                    <th scope="col" class="px-6 py-4">
                                        txn id
                                    </th>
                                    <th scope="col" class="px-6 py-4">
                                        Payment method
                                    </th>
                                    <th scope="col" class="px-6 py-4">
                                        Payment amount
                                    </th>
                                    <th scope="col" class="px-6 py-4">
                                        Payment date
                                    </th>
                                    <th scope="col" class="px-6 py-4">
                                        STATUS
                                    </th>
                                    <th scope="col" class="px-6 py-4">
                                        actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-[#d4d4d4]">
                                    <td
                                        class="whitespace-nowrap px-6 py-4 font-medium"
                                    >
                                        Txd53...
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        <p
                                            class="flex space-x-2 justify-start items-center"
                                        >
                                            <span
                                                ><img
                                                    src="assets/phantom.svg"
                                                    alt="earnings"
                                                    class="w-6"
                                            /></span>
                                            <span
                                                class="font-bold text-gray-900"
                                                >Phantom</span
                                            >
                                        </p>
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        $2500
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        09/25/2024
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        <span
                                            class="text-blue-600 bg-blue-300 rounded-lg font-medium py-[0.33rem] px-[0.6rem]"
                                        >
                                            Ready to process
                                        </span>
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        ...
                                    </td>
                                </tr>
                                <tr class="border-b border-[#d4d4d4]">
                                    <td
                                        class="whitespace-nowrap px-6 py-4 font-medium"
                                    >
                                        Txd53...
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        <p class="flex space-x-2">
                                            <img
                                                src="assets/glow.svg"
                                                alt="earnings"
                                                class="w-6"
                                            />
                                            <span
                                                class="font-bold text-gray-900"
                                                >Glow</span
                                            >
                                        </p>
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        $2500
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        09/25/2024
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        <span
                                            class="text-red-600 bg-red-300 rounded-lg font-medium py-[0.33rem] px-[0.6rem]"
                                        >
                                            Rejected
                                        </span>
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        ...
                                    </td>
                                </tr>
                                <tr class="border-b border-[#d4d4d4]">
                                    <td
                                        class="whitespace-nowrap px-6 py-4 font-medium"
                                    >
                                        Txd53...
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        <p class="flex space-x-2">
                                            <img
                                                src="assets/ledger.svg"
                                                alt="earnings"
                                                class="w-6"
                                            />
                                            <span
                                                class="font-bold text-gray-900"
                                                >Ledger</span
                                            >
                                        </p>
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        $2500
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        09/25/2024
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        <span
                                            class="text-green-600 bg-green-300 rounded-lg font-medium py-[0.33rem] px-[0.6rem]"
                                        >
                                            Approved
                                        </span>
                                    </td>
                                    <td class="whitespace-nowrap px-6 py-4">
                                        ...
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PaymentSection",
};
</script>
