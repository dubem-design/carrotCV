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
        logo: 'https://logo.clearbit.com/spotify.com',
        fromAndTo: '2021',
        status: 'Live', // deployed, in-use, closed
        projectRole: 'Designer',
        about: 'I like to think I designed the user interface for the spotify app. Just pretent I did. Thank you.',
        website: 'https://spotify.com',
        industry: 'not-open-source', // voluntaring, business, community
    },
    {
        name: 'Gradicons',
        logo: 'https://logo.clearbit.com/youtube.com',
        fromAndTo: '2021',
        status: 'Live', // deployed, in-use, closed
        projectRole: 'Illustrator',
        about: 'If Youtbe had plenty illustrations, I would design them. Hence this project lives in my dreams.',
        website: 'https://youtube.com',
        industry: 'open-source', // voluntaring, business, community
    },
]

export default {
    setup,
    menu,
    content,
}
