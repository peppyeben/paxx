<template>
    <div
        :class="[
            isOpen ? 'translate-x-0' : '-translate-x-full',
            'fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out z-40',
        ]"
    >
        <div class="p-4 text-lg">Sidebar Content</div>
        <ul>
            <li class="p-2 hover:bg-gray-700"><a href="#">Link 1</a></li>
            <li class="p-2 hover:bg-gray-700"><a href="#">Link 2</a></li>
            <li class="p-2 hover:bg-gray-700"><a href="#">Link 3</a></li>
            <li class="p-2 hover:bg-gray-700"><a href="#">Link 4</a></li>
        </ul>

        <!-- Button to close the sidebar -->
        <!-- <button
            @click="$emit('toggle-sidebar')"
            class="p-2 bg-blue-500 text-white"
        >
            Toggle Sidebar
        </button> -->
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
