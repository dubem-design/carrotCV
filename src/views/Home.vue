<template lang="pug">
div 
  Bio(class="lg:hidden")
  WelcomeSection
  ExperienceSection
  EducationSection
  ProjectsSection
  SkillsSection
  ContactSection
</template>

<script setup>
import Bio from '@comp/layout/Bio.vue'
import WelcomeSection from '@comp/sections/Welcome.vue'
import ExperienceSection from '@comp/sections/Experience.vue'
import EducationSection from '@comp/sections/Education.vue'
import ProjectsSection from '@comp/sections/Projects.vue'
import SkillsSection from '@comp/sections/Skills.vue'
import ContactSection from '@comp/sections/Contact.vue'
</script>
