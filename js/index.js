import { Router } from './router.js'
import { registerControls } from './events.js'

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universo", "/pages/universo.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add(404, "/pages/404.html")

router.handle();
registerControls();

// Função utilizada para a navegação funcionar com o Next e Previous do navegador
window.onpopstate = () => router.handle()
window.route = () => router.route()

