const setup = {
    name: 'skills',
}
const menu = {
    title: 'Skills',
    hash: '#skills',
    icon: 'PhBarbell',
    snippets:
        'I noticed email template UIs where scarce on Figma, so I created mine and shared to the commmunity.',
}
const content = [
    {
        categoryName: 'Cloud',
        skills: ['HTML', 'Javascript', 'AWS Elastic Beans'], // color coded
    },
    {
        categoryName: 'Design',
        skills: ['Figma', 'Adobe XD', 'Invision'], // color coded
    },
]

export default {
    setup,
    menu,
    content,
}
