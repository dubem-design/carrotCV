const setup = {
    name: 'projects',
}
const menu = {
    title: 'Projects',
    hash: '#projects',
    icon: 'PhProjectorScreen',
}
const content = [
    {
        name: 'Modula',
        fromAndTo: '2019 - 2020',
        status: 'Live', // deployed, in-use, closed
        projectRole: 'Designer',
        about: 'I noticed email template UIs where scarce on Figma, so I created mine and shared to the commmunity.',
        website: 'https://website.com',
        industry: 'open-source', // voluntaring, business, community
    },
]

export default {
    setup,
    menu,
    content,
}
