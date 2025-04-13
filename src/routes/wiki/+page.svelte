<script lang="ts">
	import Markdown from "../../components/wiki/Markdown.svelte";
</script>

<div class="container flex justify-center relative min-w-screen h-screen">
    <div class="content flex justify-center w-[80vw] h-screen overflow-y-scroll bg-gray-900">
        <div class="w-5/6 pt-16">
            <Markdown urlSource={true} markdown='https://raw.githubusercontent.com/Quantum-Pi/genshin-summary/refs/heads/main/guide.md'/>    
        </div>
    </div>
    <span class="bg fixed w-screen h-screen top-0 left-0 -z-10"></span>
</div>

<style>
    .container {
        & .bg {
            background-image: url(/wiki-bg.jpg);
            position: fixed;
        }
    }
</style>