<template lang="pug">
ul.relative.text-center(:class="{'flex justify-center': isHorizontal}")
  li.relative.overflow-hidden.text-gray-700(v-for="(social,index) in sections.contact.socials" :key="social" style="height:55px")
    a.p-4.rounded-2xl.inline-block.transition-margin.duration-500(:style="{ marginTop: mounted ? '0px' : '56px', transitionDelay: `${index * 100}ms` }" :href="social" target="_blank" style="height:56px" :title="social" :class="`hover:text-${layoutSettings.primary}-600`" v-if="socialInfo(social)")
      component.inline(:is="resolveIcon(socialInfo(social).x)" :size="24" weight="duotone") 
      //- p {{socialInfo(social).x}}
</template>

<script>
import { SocialLinks, ProfileMatch, TYPE_MOBILE } from 'social-links'
import { inject, ref } from 'vue'
const supportedSocials = [
    'linkedin',
    'facebook',
    'instagram',
    'dribbble',
    'github',
    'twitter',
    'youtube',
    'medium',
]

export default {
    props: {
        isHorizontal: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const socialLinks = new SocialLinks()
        const socialInfo = (link) => {
            let returnVal
            supportedSocials.find((x) => {
                const isValid = socialLinks.isValid(x, link)
                if (isValid) {
                    const profileId = socialLinks.getProfileId(x, link)
                    const sanitize = socialLinks.sanitize(x, link)
                    // console.log(isValid, profileId, sanitize, x)
                    returnVal = { isValid, profileId, sanitize, x }
                    return true
                } else false
            })
            return returnVal
        }

        const resolveIcon = (social) => {
            switch (social) {
                case 'github':
                    return 'PhGithubLogo'
                case 'dribbble':
                    return 'PhDribbbleLogo'
                case 'instagram':
                    return 'PhInstagramLogo'
                case 'twitter':
                    return 'PhTwitterLogo'
                case 'linkedin':
                    return 'PhLinkedinLogo'
                case 'youtube':
                    return 'PhYoutubeLogo'
                case 'facebook':
                    return 'PhFacebookLogo'
                case 'medium':
                    return 'PhMediumLogo'
                default:
                    return 'PhMegaphoneSimple'
            }
        }

        const sections = inject('sections')
        const layoutSettings = inject('layoutSettings')

        let mounted = ref(false)
        setTimeout(() => {
            mounted.value = true
        }, 1500)

        return { mounted, sections, layoutSettings, resolveIcon, socialInfo }
    },
}
</script>
