<template>
  <section id="timeline" class="align-items-center">
    <div class="container">
      <h2 class="page-title">{{ $t('timeLine') }}</h2>
      <div class="timeline-categories">
        <button v-for="cat in categories" :title="cat.id" :class="{'_active': cat.isActive}" :data-label="cat.label"
                @click="toggleCat(cat)">
          <font-awesome-icon :icon="cat.icon"/>
        </button>
      </div>
      <transition-group name="timeline" tag="div" class="timeline">
        <div
          v-for="(event) in events"
          :key="event.id"
          class="timeline-item"
        >
          <div class="icon">
            <font-awesome-icon :icon="event.icon"/>
          </div>
          <span class="date">{{ convertDate(event.date) }}</span>
          <div class="content">
            <h3>{{ event.title }}</h3>
            <p>{{ event.description }}</p>
            <a v-if="event.proofs" :href="event.proofs" target="_blank">Ссылка</a>
          </div>
        </div>
      </transition-group>
    </div>
  </section>

</template>

<script>
  import '../styles/time-line.scss'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import {
    faBaby,
    faSchool,
    faSchoolCircleCheck,
    faTrophy,
    faWindowMaximize,
    faUserTie,
    faPlane,
    faWifi,
    faUsersLine,
    faCode,
    faDna,
    faBriefcase,
    faCalendar,
    faPersonRunning
  } from '@fortawesome/free-solid-svg-icons'

  export default {
    name: 'TimeLine',
    components: { FontAwesomeIcon },
    data: function () {
      return {
        aCategories: ['frontend', 'life', 'work'],
      }
    },
    computed: {
      categories: function () {
        return [{
          id: 'life',
          label: 'Жизнь',
          icon: faDna,
        }, {
          id: 'frontend',
          label: 'Frontend',
          icon: faCode,
        }, {
          id: 'work',
          label: 'Работа',
          icon: faBriefcase,
        }].map((item) => Object.assign({}, item, {
          label: this.$t('cat.' + item.id),
          isActive: this.aCategories.includes(item.id)
        }))
      },
      events: function () {
        const activeCat = this.aCategories,
          items = [{
            'id': 'burn',
            'date': '1990-08-18',
            'title': 'Родился в Томске',
            'description': 'Небольшой уютный город в Сибири с населением чуть больше 500 тысяч человек.',
            'icon': faBaby,
            'category': ['life']
          }, {
            'id': 'school_start',
            'date': '1997-09-01',
            'title': 'Первый день в школе',
            'description': 'Тогда я еще не знал, что впереди меня ждут код и пиксели.',
            'icon': faSchool,
            'category': ['life']
          }, {
            'id': 'internet',
            'date': '2005-11-01',
            'title': 'Открытие интернета',
            'description': 'Когда у меня появился интернет, я начал экспериментировать с HTML и CSS, переделывая готовые страницы под себя. А потом увлекся Macromedia Flash и познакомился с ActionScript — дальним родственником JavaScript.',
            'icon': faWifi,
            'category': ['life', 'frontend']
          }, {
            'id': 'young_talents',
            'date': '2008-02-20',
            'title': 'Победа в конкурсе «Юные дарования»',
            'description': 'Занял 1-е место на городской научно-практической конференции по информатике среди школьников.',
            'icon': faTrophy,
            'category': ['frontend']
          }, {
            'id': 'macromedia',
            'date': '2008-02-20',
            'title': 'Проект в Macromedia Flash',
            'description': 'Получил Почетную грамоту декана за мультимедийный проект. Тогда я понял, что люблю создавать интерактивные вещи.',
            'icon': faTrophy,
            'category': ['frontend']
          }, {
            'id': 'school_end',
            'date': '2008-05-31',
            'title': 'Окончил школу',
            'description': 'Между электроникой и веб-разработкой выбрал первое. Но со временем всё изменилось.',
            'icon': faSchoolCircleCheck,
            'category': ['life']
          }, {
            'id': 'tusur_start',
            'date': '2008-09-01',
            'title': 'Поступил в ТУСУР',
            'description': 'Учился в Томском государственном университете систем управления и радиоэлектроники, но не переставал увлекаться веб-разработкой.',
            'icon': faSchool,
            'category': ['life']
          }, {
            'id': 'urban_tom_ru',
            'date': '2008-10-01',
            'title': 'urban.tom.ru',
            'description': 'С друзьями запускаем сайт для молодежи, на его базе организовываем флешбомы и разные мероприятия',
            'icon': faUsersLine,
            'category': ['life', 'frontend']
          }, {
            'id': 'freelance',
            'date': '2009-01-01',
            'title': 'Фриланс',
            'description': 'Во время учебы начал делать сайты на WordPress и Drupal, создавая кастомные дизайны для клиентов.',
            'icon': faUserTie,
            'category': ['work', 'frontend']
          }, {
            'id': 'practice',
            'date': '2010-08-31',
            'title': 'Летняя практика',
            'description': 'Разрабатывал сайт для медиа-отдела университета. Первый серьезный опыт работы над реальным проектом.',
            'icon': faWindowMaximize,
            'category': ['frontend']
          }, {
            'id': 'it_project',
            'date': '2012-03-20',
            'title': 'Гран-при в конкурсе «IT-проект»',
            'description': 'Сайт для музыкальной группы SunДали занял первое место.',
            'proofs': 'https://tomsk-novosti.ru/it-idei-prodvigayut-tomsk/',
            'icon': faTrophy,
            'category': ['frontend']
          }, {
            'id': 'six_hand_shake',
            'date': '2012-11-01',
            'title': 'Участие в Startup Village',
            'description': 'Разрабатывал и представлял проект "6 рукопожатий"',
            'icon': faTrophy,
            'category': ['frontend']
          }, {
            'id': 'tusur_end',
            'date': '2013-07-31',
            'title': 'Окончил университет',
            'description': 'Диплом есть, но по-настоящему меня увлекала веб-разработка.',
            'icon': faSchoolCircleCheck,
            'category': ['life']
          }, {
            'id': 'first_work',
            'date': '2013-08-15',
            'title': 'Первая работа',
            'description': 'Начал работать по специальности, но создание сайтов оставалось моим главным увлечением.',
            'icon': faUserTie,
            'category': ['work']
          }, {
            'id': 'userstory',
            'date': '2014-09-01',
            'title': 'Работа в UserStory',
            'description': 'Официально перешел в веб-разработку. Моё увлечение стало профессией.',
            'icon': faUserTie,
            'category': ['work', 'frontend']
          }, {
            'id': 'varys',
            'date': '2015-07-01',
            'title': 'Работа в VARYS',
            'description': 'Новый этап в карьере фронтенд-разработчика.',
            'icon': faUserTie,
            'category': ['work', 'frontend']
          }, {
            'id': 'saint_p',
            'date': '2016-08-20',
            'title': 'Переезд в Санкт-Петербург',
            'description': 'Новый город, новые возможности, новый уровень развития.',
            'icon': faPlane,
            'category': ['life']
          }, {
            'id': 'org_one',
            'date': '2018-02-01',
            'title': 'Работа в ORG1',
            'description': 'Еще больше опыта, проектов и вызовов.',
            'icon': faUserTie,
            'category': ['work', 'frontend']
          }, {
            'id': 'maraphone',
            'date': '2018-07-01',
            'title': 'Пробежал марафон',
            'description': 'Марафон белые ночи 2018, Санкт-Петерубург',
            'icon': faPersonRunning,
            'category': ['life']
          }, {
            'id': 'war',
            'date': '2022-02-24',
            'title': 'Жажда путешествий',
            'description': 'В какой-то момент понял, что хочется больше свободы и новых впечатлений.',
            'icon': faPlane,
            'category': ['life']
          }, {
            'id': 'za4et',
            'date': '2011-04-01',
            'title': 'Радио зачет',
            'description': 'С группой интузиастов организуем радио za4et на базе студенческого бизнес-инкубатора.',
            'icon': faUserTie,
            'category': ['frontend']
          }, {
            'id': 'performica',
            'date': '2022-04-01',
            'title': 'Работа в Performica',
            'description': 'Продолжаю разрабатывать крутые проекты.',
            'proofs': 'https://performica.com',
            'icon': faUserTie,
            'category': ['work', 'frontend']
          }, {
            'id': 'today',
            'date': new Date().toJSON().slice(0, 10),
            'title': 'Сегодня',
            'description': 'Мы находимся тут',
            'icon': faCalendar,
            'category': ['life']
          }]

        return items.filter((a) => a.category.some(function (item) {
          return activeCat.includes(item)
        })).sort((a, b) => new Date(a.date) - new Date(b.date)).map((item) => Object.assign({}, item, {
          title: this.$t(item.id + '.title'),
          description: this.$t(item.id + '.description'),
        }));
      }
    },
    methods: {
      convertDate: function (dateStr) {
        const date = new Date(dateStr)
        return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date)
      },
      toggleCat: function (cat) {
        if (this.aCategories.length > 1 || !cat.isActive) {
          const index = this.aCategories.indexOf(cat.id)

          if (index !== -1) {
            this.aCategories.splice(index, 1)
          } else {
            this.aCategories.push(cat.id)
          }
        }
      }
    }
  }
</script>
