<template>
    <div id="app">
        <Search/>
        <List/> 
    </div>
</template>

<script>
import axios from 'axios'
import List from './components/List'
import Search from './components/Search'
export default {
    components: {List, Search},
    name:"App",
}
</script>
<style>
</style>