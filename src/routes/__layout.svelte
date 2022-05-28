<script>
    import { onMount } from 'svelte'

    let dark = false

    function toggleDarkmode() {
        dark = !dark

        if (dark) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }
    }

    onMount(async () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
            dark = true
        else dark = false
    })
</script>

<div style="display: flex; flex-direction: column; align-items: center; width: 100%;">
    <div style="width: 100%; display: flex; justify-content: space-between; padding: 10px 0; background-color: #999; margin-bottom: 4rem;">
        <a href="/" style="margin-left: 10px;">Homepage</a>
        <button on:click={toggleDarkmode} style="margin-right: 10px;">Toggle Dark Mode</button>
    </div>

    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <slot />
    </div>
</div>
