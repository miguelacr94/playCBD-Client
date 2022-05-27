export class Routes {
    static index = '/'
    static cbd = '/cbd'
    static power = '/power'
    static dashboard = '/panel'
    static cart = '/carrito'
    static profile = '/perfil'
    static misentrenamientos = '/perfil?tab=entrenamientos'
    static blog = '/blog'
    static contact = '/contacto'
    static trainings = `/entrenamientos/[id]/modulo/[module]`
    static course = `/cursos/[id]`
    static tc = `/terminos`
    static pv = `/politicas`
    static tratamientos = `/tratamientosdedatos`
    static informacion = `/informaciondeentrenamientos`
    static recursos = `/recursosvirtuales`
  }
  
  export const footerLinks = [
    {
      name: "Términos y Condiciones",
      path: Routes.tc
    },
    {
      name: "Políticas de Privacidad",
      path: Routes.pv
    },
    {
      name: "Tratamiento de Datos Personales",
      path: Routes.tratamientos
    },
    {
      name: "Información de Entrenamientos",
      path: Routes.informacion
    },
    {
      name: "Recursos Virtuales",
      path: Routes.recursos
    },
  ]
  
  export const dashboardNavPages = [ Routes.dashboard, Routes.cart, Routes.profile, Routes.trainings, Routes.course ]
  
  export const sidebarTabs = [
    {
      name: 'Mi cuenta',
      tab: 'cuenta'
    },
    {
      name: 'Mis Entrenamientos',
      tab: 'entrenamientos'
    },
    {
      name: 'Mis Cursos',
      tab: 'cursos'
    },
    {
      name: 'Mis Certificados',
      tab: 'certificados'
    },
  ]
  
  export const dashboardNavLinks = [
    {
      name: 'Inicio',
      path: Routes.home
    },
    {
      name: 'Entrenamientos',
      path: Routes.misentrenamientos
    },
    {
      name: 'Carrito',
      path: Routes.cart
    },
    {
      name: 'Blog',
      path: Routes.blog
    },
    {
      name: 'Nosotros',
      path: Routes.aboutus
    },
    {
      name: 'Contacto',
      path: Routes.contact
    },
  ]
  
  export const publicNavLinks = [
    {
      name: 'Blog',
      path: Routes.blog
    },
    {
      name: 'Nosotros',
      path: Routes.aboutus
    },
    {
      name: 'Contacto',
      path: Routes.contact
    },
  ]