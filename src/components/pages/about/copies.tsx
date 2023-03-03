import htmlLogo from '../../assets/html.svg'
import cssLogo from '../../assets/css.png'
import jsLogo from '../../assets/js.png'
import reactLogo from '../../assets/react.png'

export const ABOUT_COPIES = {
  personalDescription:
    'Soy un desarrollador apasionado en la creación de UI y UX, con experiencia en el desarrollo de aplicaciones web y móviles basados en JS y librerías como React y Vue, etc. Me gusta aprender y compartir conocimiento, por lo que me gusta participar en comunidades y eventos de tecnología. Actualmente trabajo como desarrollador Frontend en Loft México.',
}

export const ABOUT_TECNOLOGIES = [
  {
    name: 'HTML',
    element: <img src={htmlLogo} alt="logo de HTML" className="h-auto w-16" />,
  },
  {
    name: 'CSS',
    element: <img src={cssLogo} alt="logo de CSS" className="h-auto w-20" />,
  },
  {
    name: 'JavaScript',
    element: (
      <img src={jsLogo} alt="logo de JavaScript" className="h-auto w-20" />
    ),
  },
  {
    name: 'React',
    element: (
      <img src={reactLogo} alt="logo de React" className="h-auto w-20" />
    ),
  },
]
