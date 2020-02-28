import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import '../assets/spin-style.scss'
import styled from 'styled-components'

 

const LoadingIcon = ({ isLoading}) => (
  <>
    {isLoading ? <AiOutlineLoading3Quarters className='icon-spin' /> : ''}
  </>
)

export default LoadingIcon