const setup = {
    name: 'experience',
    portfolioSlide: true,
    floatingPreview: true,
}
const menu = {
    title: 'Experience',
    hash: '#experience',
    icon: 'PhFolderOpen',
}
const content = [
    {
        company: 'Atlan',
        companyLogo:
            'https://s3.eu-west-3.amazonaws.com/dubem.design/atlan.jpg',
        fromAndTo: 'Sept 2021 - present',
        jobTitle: 'Frontend Developer',
        yourWorkThere:
            'Working with an awesome team of frontend engineers to build interfaces that deliver the strength the Atlan ecosystem to data teams.',
        website: 'https://atlan.com',
        thumbnail:
            'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        companySector: 'Data catalogue & more', //e.g Fintech, education, goverment,
    },
    {
        company: 'Jetseed (ex-pettysave)',
        companyLogo:
            'https://s3.eu-west-3.amazonaws.com/dubem.design/jetseed.png',
        fromAndTo: 'Jan 2017 - Nov 2018',
        jobTitle: 'Head of Product & Frontend Developer',
        yourWorkThere:
            'I started my creative journey doodling all over the wall in my house, then I moved next to dismantling our electronics just to see how they work.',
        website: 'https://facebook.com',
        thumbnail:
            'https://images.pexels.com/photos/6162932/pexels-photo-6162932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        companySector: 'Fintech', //e.g Fintech, education, goverment,
    },
]

export default {
    setup,
    menu,
    content,
}
