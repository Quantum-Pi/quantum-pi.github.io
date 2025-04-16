<script lang="ts">
	import Markdown from "../../components/wiki/Markdown.svelte";
	import Sitemap from "../../components/wiki/Sitemap.svelte";
	import WikiControl from "../../components/wiki/WikiControl.svelte";

    let formState = $state({
        checkArchonQuests: true,
        checkWorldQuests: true,
        checkStoryQuests: true,
        checkEventQuests: true,
    });

    const toggleSection = (sectionName: string, flag: boolean) => {
        [...document.querySelectorAll('h3')].filter((el) => el.innerText === sectionName).forEach((el) => {
           if (flag) {
                el.classList.remove('hidden');
                el.nextElementSibling?.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
                el.nextElementSibling?.classList.add('hidden');
            }
        });
    }

    $effect(() => {
       const checkArchonQuests = formState.checkArchonQuests;
       toggleSection('Archon Quest', checkArchonQuests);
    });
    
    $effect(() => {
       const checkWorldQuests = formState.checkWorldQuests;
       toggleSection('World Quest', checkWorldQuests);
    });

    $effect(() => {
       const checkStoryQuests = formState.checkStoryQuests;
       toggleSection('Story Quest', checkStoryQuests);
    });

    $effect(() => {
       const checkEventQuests = formState.checkEventQuests;
       toggleSection('Event', checkEventQuests);
    });

    let version = $state('1.0');

</script>

<div class="container flex justify-center relative min-w-screen h-screen">
    <div class="content flex justify-center w-[80vw] h-screen overflow-y-scroll bg-gray-900">
        <div class="w-5/6 pt-16">
            <WikiControl bind:formState={formState}/>
            <Markdown urlSource={true} markdown='https://raw.githubusercontent.com/Quantum-Pi/genshin-summary/refs/heads/main/guide.md'/>    
        </div>
    </div>
    <span class="bg fixed w-screen h-screen top-0 left-0 -z-10"></span>
    <Sitemap bind:version={version}/>
</div>

<style>
    .container {
        & .bg {
            background-image: url(/wiki-bg.jpg);
            position: fixed;
        }
    }
</style>