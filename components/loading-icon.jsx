import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import '../assets/spin-style.scss'

const LoadingIcon = ({ isLoading}) => (
  <span>
    {isLoading ? <AiOutlineLoading3Quarters className='icon-spin' /> : ''}
  </span>
)

export default LoadingIcon