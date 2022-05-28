<script>
    import ProConTable from '$lib/ProConTable.svelte'
    import Title from '$lib/Title.svelte'
    import Component from '$lib/preprocessing/Component.svelte'
</script>

<Title>Stylus (Preprocessing)</Title>
<Component />
<ProConTable
    pros={['Less verbose', 'Faster to edit', 'Less duplication']}
    cons={['Build steps required', 'Global', 'Bad defaults', 'CSS and HTML are separated', 'What about unused styles']}
/>
