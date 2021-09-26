// sections
import welcome from './welcome'
import experience from './experience'
import education from './education'
import projects from './projects'
import skills from './skills'
import contact from './contact'

// bio
import bioInfo from './bio'
export const bio = bioInfo

// switch on or rearrange the section to effect:
// 1. Navigation
// 2. Sections
const sections = [welcome, experience, education, projects, skills, contact]
export default [...sections]

function toObject(arr) {
    var rv = {}
    for (var i = 0; i < arr.length; ++i) rv[arr[i].setup.name] = arr[i]
    return rv
}

const transformedSections = toObject(sections)

export const sectionObject = transformedSections
