<template>
  <block-section id="skills" :title="$t('skillsPage')" @loaded="isLoaded = true">
    <div class="skills">
      <div class="grid-row">
        <div v-for="block in blocks" :key="block.id">
          <h3>{{ block.label }}</h3>
          <div class="description">
            <div class="skill-block">
              <template v-for="skill in block.skills" :key="skill.id">
                <div>{{ skill.label }} <span :data-tooltip="skill.help_text">
                    <font-awesome-icon :icon="icon"/>
                  </span></div>
                <div class="progress"><span :style="{width: !isLoaded ? 0 : skill.value + '%'}"></span></div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </block-section>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import {
    faCircleInfo,
  } from '@fortawesome/free-solid-svg-icons'
  import BlockSection from './block-section.vue'

  export default {
    name: 'SkillsPage',
    components: { FontAwesomeIcon, BlockSection },
    data: function () {
      return {
        icon: faCircleInfo,
        isLoaded: false,
      }
    },
    computed: {
      blocks: function () {
        return [{
          id: 'hardSkills',
          label: 'Hard skills',
          skills: [{
            id: 'html',
            label: 'HTML/CSS',
            value: 95,
            help_text: 'семантическая разметка, SCSS, BEM',
          }, {
            id: 'javaScript',
            label: 'JavaScript',
            value: 85,
            help_text: 'модули, промисы, async/await',
          }, {
            id: 'vue',
            label: 'Vue.js',
            value: 90,
            help_text: 'Composition API, Vue Router',
          }, {
            id: 'ux',
            label: 'UI/UX',
            value: 80,
            help_text: 'понимание доступности (a11y), Figma',
          }, {
            id: 'performance',
            label: 'Web Performance',
            value: 80,
            help_text: 'оптимизация загрузки, lazy loading',
          }, {
            id: 'testing',
            label: 'Testing',
            value: 80,
            help_text: 'Jest, Playwright',
          }, {
            id: 'buildTools',
            label: 'Build Tools',
            value: 85,
            help_text: 'Vite, Webpack',
          }]
        }, {
          id: 'softSkills',
          label: 'Soft skills',
          skills: [{
            id: 'communication',
            label: 'Коммуникация',
            value: 60,
            help_text: 'объяснение сложных вещей простыми словами',
          }, {
            id: 'mind',
            label: 'Проблемное мышление',
            value: 89,
            help_text: 'умение находить решения',
          }, {
            id: 'organization',
            label: 'Самоорганизация',
            value: 97,
            help_text: 'планирование задач, дедлайны',
          }, {
            id: 'teamwork',
            label: 'Работа в команде',
            value: 90,
            help_text: 'кодревью, обсуждение идей',
          }, {
            id: 'creative',
            label: 'Креативность',
            value: 80,
            help_text: 'поиск нестандартных решений',
          }, {
            id: 'adaptive',
            label: 'Адаптивность',
            value: 96,
            help_text: 'умение быстро учиться новому',
          }, {
            id: 'attention',
            label: 'Внимание к деталям',
            value: 85,
            help_text: 'чистый код, pixel perfect',
          }]
        }].map(this.addTranslate)
      }
    },
    methods: {
      addTranslate: function (block) {
        const translate = this.$t,
          newSkills = block.skills.map(function (skill) {
            return Object.assign({}, skill, {
              label: translate('skills.' + block.id + '.skills.' + skill.id + '.label'),
              help_text: translate('skills.' + block.id + '.skills.' + skill.id + '.help_text'),
            })
          })

        return Object.assign({}, block, {
          label: translate('skills.' + block.id + '.label'),
          skills: newSkills,
        })
      }
    }
  }
</script>
