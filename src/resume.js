// empty fields won't render
export default {
    bio: {
        firstname: 'firstname',
        middlename: '',
        lastname: 'design',
        logoLightUrl: '',
        logoDarkUrl: '',
        tagline: 'Building Product Experiences', // e.g Building Product Experiences
    },
    intro: {
        photo: 'https://source.boringavatars.com/pixel/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51',
        greeting: 'Hello there',
        whatYouDo:
            'I help startups build great product experiences & junior creatives level up',
        ctaButtonLink: '',
        auxButtonLink: '',
    },
    story: {
        title: 'Once upon a time...',
        bodyHTML: `I started my creative journey doodling all over the wall in my house, then I moved next to dismantling our electronics just to see how they work. I decided I would study comupter science in school so I would know how to command machines. 

                At university, it didn’t work out, so I had to study real estate. I kept my computer science friends close so I could learn from them. Fast forward to graudation, I was shipping out websites for businesses run by friends.

                I resumed my professional career as a Graphics designer, but I also prepared myself for a Frontend role. I got the opportunity and was able to build one of the most powerful fintech platforms in Africa, alongside a formidable team of engineers.

                These days, I work as a product manager helping to build an experience @google. I also coach young creatives on how they can get active in the tech industry.....`,
    },
    experience: {
        title: 'Experience',
        thumbnail: '',
        layout: 'horizontal', //vertical, carousel, sticky
        content: [
            {
                company: '',
                fromAndTo: '',
                jobTitle: '',
                yourWorkThere: '',
                website: '',
                thumbnail: '',
                companySector: '', //e.g Fintech, education, goverment,
            },
        ],
    },
    education: {
        title: 'Education',
        thumbnail: '',
        content: [
            {
                school: '',
                certificationName: '',
                fromAndTo: '2019 - 2020',
                snippet: 'little about your schooling experience',
            },
        ],
    },
    projects: {
        title: 'Experience',
        thumbnail: '',
        content: {
            name: '',
            fromAndTo: '2019 - 2020',
            status: 'Live', // deployed, in-use, closed
            projectRole: '',
            about: '',
            website: '',
            industry: 'open-source', // voluntaring, business, community
        },
    },
    skills: {
        title: '',
        snippet: '',
        content: [
            {
                categoryName: '',
                skills: ['Figma', 'Javascript'], // color coded
            },
        ],
    },
    contact: {
        title: '',
        ctas: [
            {
                icon: 'email',
                info: 'contact me via email, I reply in 24hrs',
            },
        ],
        socials: [
            'https://github.com/firstname-design/',
            'https://dribbble.com/firstname-design',
            'https://twitter.com/firstname-design',
            'https://www.instagram.com/firstname.design/',
            'https://facebook.com/lastname.firstname',
            'https://www.youtube.com/channel/UCGfjvsbY2zW9OQpfL02xxqQ',
            'https://medium.com/@firstname-design',
        ],
    },
}
