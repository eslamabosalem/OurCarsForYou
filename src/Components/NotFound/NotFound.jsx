

import error404 from '../../assets/imges/not-found/404-not-found.png'


export default function Notfound() {
  return (
    <>
          <div className="notfound vh-100">
              <img className='w-100 vh-100' src={error404} alt="NotFound" />
      </div>
    </>
  )
}
