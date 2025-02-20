<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-content">
      <div
        v-if="!status"
        id="my-form"
        @click.stop=""
      >
         <div v-if="isLoading" class="loader-overlay">
          <div class="loader"></div>
        </div>
        <label>
          {{ $t('yourEmail') }} :
          <input v-model="email" type="email" name="email">
        </label>
        <label>
          {{ $t('yourMessage') }} :
          <textarea v-model="message" name="message"></textarea>
        </label>
        <div class="button-group">
          <button class="close-btn" @click="isLoading ? null : closeModal()">
             <font-awesome-icon :icon="icons.close" />
            {{ $t('сloseBtn') }}
          </button>
          <button type="submit" @click.stop="isLoading ? null : sendForm()">
            <font-awesome-icon :icon="icons.done" />
            {{ $t('sendBtn') }}
          </button>
        </div>
      </div>
      <div v-else>
        {{ status }}
        <div class="button-group">
          <button class="close-btn" @click="isLoading ? null : closeModal()">{{ $t('сloseBtn') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../styles/modal.scss'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'

  export default {
    name: 'ModalWindow',
    components: { FontAwesomeIcon },
    data () {
      return {
        status: null,
        email: '',
        message: '',
        isLoading: false,
        icons: {
          done: faCheck,
          close: faXmark
        }
      }
    },
    methods: {
      closeModal () {
        this.$emit('close')
      },
      sendForm: function() {
        const self = this;
        const form = new FormData();

        form.append('email', this.email);
        form.append('message', this.message);

        this.isLoading = true
        fetch('https://formspree.io/f/xwpvrzzj', {
          method: 'POST',
          body: form,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            self.status = 'Thanks for your submission!'
          } else {
            response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                self.status = data['errors'].map(error => error['message']).join(', ')
              } else {
                self.status = 'Oops! There was a problem submitting your form'
              }
            })
          }
        }).catch(error => {
          self.status = 'Oops! There was a problem submitting your form'
        }).finally(function () {
          self.isLoading = false;
        })
      }
    },
  }
</script>
