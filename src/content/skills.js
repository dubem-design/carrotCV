const setup = {
    name: 'skills',
}
const menu = {
    title: 'Skills',
    hash: '#skills',
    icon: 'PhBarbell',
    snippets:
        'Anything and everything is learnable once you direct your interest to it, it must be mastered. - Dubem 2021',
}
const content = [
    {
        categoryName: 'Frontend',
        skills: ['Vuejs', 'React', 'Pug', 'Tailwind', 'Bootstrap', 'WordPress'], // color coded
    },
    {
        categoryName: 'Design',
        skills: ['Figma', 'Blender', 'Inkscape', 'Vectornator', 'Procreate'], // color coded
    },
    {
        categoryName: 'Product',
        skills: ['Notion Pro', 'Slack', 'Zapier', 'Google Sheets'], // color coded
    },
    {
        categoryName: 'Cloud',
        skills: ['GCP', 'Little AWS'], // color coded
    },
    {
        categoryName: 'Motion',
        skills: ['Blender', 'Lottie'], // color coded
    },
]

export default {
    setup,
    menu,
    content,
}
