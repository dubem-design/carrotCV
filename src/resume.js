const bio = {
	firstname: "",
	lastname: "",
	middlename: "",
	logoLightUrl: "",
	logoDarkUrl: "",
	tagline: "", // e.g Building Product Experiences
}

// empty fields won't render
const sections = {
  intro: {
    greeting: "",
    whatYouDo: "",
    ctaButtonLink: "",
    auxButtonLink: "",
  },
  story: {
    title: "",
    bodyHTML: "",
  },
  experience: {
    title: "Experience",
		thumbnail: "",
    layout: "horizontal", //vertical, carousel, sticky
		content: [
      {
        company: "",
        fromAndTo: "",
        jobTitle: "",
        yourWorkThere: ""
				website: "",
        thumbnail: "",
        companySector: "", //e.g Fintech, education, goverment, 
      }
    ]
  },
  education: {
    title: "Education",
    thumbnail: "",
    content: [
      {
        school: "",
        certificationName: "",
        fromAndTo: "2019 - 2020",
        snippet: "little about your schooling experience"
      }
    ]
  },
  projects: {
    title: "Experience",
		thumbnail: "",
    content: {
      name: "",
      fromAndTo: "2019 - 2020",
      status: "Live", // deployed, in-use, closed
      projectRole: "",
      about: "",
      website: "",
      industry: "open-source" // voluntaring, business, community
    }
  },
  skills: {
    title: "",
    snippet: "",
    content: [
      {
        categoryName: "",
        skills: ["Figma", "Javascript"] // color coded
      }
    ]
  },
  contact: {
    title: "",
    ctas: [
      {
        icon: "email",
        info: "contact me via email, I reply in 24hrs",
      }
    ],
    socials: ["links", "links", "links"]
  }
}