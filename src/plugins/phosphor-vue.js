import * as Icons from 'phosphor-vue'

const icons = [
    // menu
    'PhHandWaving',
    'PhFolderOpen',
    'PhProjectorScreen',
    'PhBook',
    'PhGraduationCap',
    'PhBarbell',
    'PhChatsTeardrop',
    //social
    'PhGithubLogo',
    'PhDribbbleLogo',
    'PhMegaphoneSimple',
    'PhFacebookLogo',
    'PhTwitterLogo',
    'PhInstagramLogo',
    'PhLinkedinLogo',
    'PhYoutubeLogo',
    'PhMediumLogo',
    // Others
    'PhGlobe',
    'PhEnvelope',
    'PhArrowRight',
]

export default function registerIcons(app) {
    icons.forEach((component) => {
        app.component(component, Icons[component])
    })
}
