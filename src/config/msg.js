import Vue from 'vue'
import Toasted from 'vue-toasted'


Vue.use(Toasted, {
     iconPack: 'fontawesome',
     duration: 1500
})

Vue.toasted.register(
     'defaultSuccess',
     payload => !payload.msg ? 'Operação realizada com sucesso' : payload,
     { type: 'success', icon: 'check' }
)

Vue.toasted.register(
     'defaultError',
     payload => !payload.msg ? 'Oops... Erro inesperado' : payload,
     { type: 'error', icon: 'times' }
)