import { BurguerIcon } from './assets/BurguerIcon'
import logo from '../assets/beka-light.png'

type Props = {
  handleClick: () => void
}

export const NavBar = ({ handleClick }: Props) => {
  return (
    <div className="flex h-16 w-full items-center justify-between bg-blue-600 px-2 shadow-lg">
      <div
        className="h-auto w-auto bg-transparent outline-none"
        onClick={handleClick}
      >
        <BurguerIcon />
      </div>
      <img src={logo} alt="logo beka" className="h-auto w-20 object-cover" />
    </div>
  )
}
