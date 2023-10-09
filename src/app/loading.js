import { ImSpinner2 } from 'react-icons/im'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='flex items-center justify-center'>
        <ImSpinner2 size={50} className='animate-spin text-blue-900' />
    </div>
  )
}
