import Vue from 'vue'
import Toasted from 'vue-toasted'



Vue.use(Toasted, {
     iconPack: 'fontawesome',
     duration: 2000
})

Vue.toasted.register(
     'defaultSuccess',
     payload => !payload ? 'Operação realizada com sucesso' : payload,
     { type: 'success', icon: 'check', duration: 2500 }
)

Vue.toasted.register(
     'defaultError',
     payload => !payload.msg ? 'Oops... Erro inesperado' : payload.msg,
     { type: 'error', icon: 'times' }
)
Vue.toasted.register(
     'defaultAlert',
     payload => !payload ? 'Redirecionando' : payload,
     { icon: 'exclamation', duration: 1000, className: 'toast-alert' }
)

