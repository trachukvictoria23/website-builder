<template>
    <div class="draft">
        <sidebar />
        <main-content />
    </div>
</template>

<script>
import Sidebar from "@/components/Draft/Sidebar"
import MainContent from "@/components/Draft/MainContent"

export default {
    components: {
        Sidebar,
        MainContent
    }
}
</script>

<style lang="scss" scoped>
    .draft {
        display: flex;
        height: 100%;
        width: 100%;
    }
</style>