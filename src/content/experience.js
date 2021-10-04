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
        company: 'Google Inc.',
        companyLogo: 'https://logo.clearbit.com/google.com',
        fromAndTo: '2018 till date',
        jobTitle: 'Fulltime - Head of Product',
        yourWorkThere:
            'I started my creative journey doodling all over the wall in my house, then I moved next to dismantling our electronics just to see how they work.',
        website: 'https://google.com',
        thumbnail:
            'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        companySector: 'Fintech', //e.g Fintech, education, goverment,
    },
    {
        company: 'Facebook',
        companyLogo: 'https://logo.clearbit.com/facebook.com',
        fromAndTo: 'Jan 2017 - Nov 2018',
        jobTitle: 'Fulltime - Head of Design',
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
