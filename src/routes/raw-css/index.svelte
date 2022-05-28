<script>
    import ProConTable from '$lib/ProConTable.svelte'
    import Title from '$lib/Title.svelte'
    import Component from '$lib/raw-css/Component.svelte'
</script>

<Title>Raw CSS</Title>
<Component />
<ProConTable
    pros={['Browser native', 'No build steps']}
    cons={['Verbose (slow to edit)', 'Global', 'Bad defaults', 'CSS and HTML are separated', 'What about unused styles']}
/>
