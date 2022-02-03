import menuIcon from '../images/menu.svg'
import arrow from '../images/arrow.svg'
import notification from '../images/notification.svg'
import profile from '../images/prof.svg'
const Header = () => {
  return(
    <div className="d-flex justify-content-between py-2" >
        <div className='d-flex flex-lg-row align-items-lg-center flex-column'>
            <div>
                <img src={menuIcon} alt="menu"/>
            </div>
            <div className="d-flex px-lg-4 align-items-center">
                <div className='d-flex px-1 py-lg-1 py-3'>
                    Home<span className='px-1 px-lg-2'><img src={arrow} alt="arrow"/></span>
                </div>
                <div className='d-flex px-1'>
                    Productivity<span className='px-1 px-lg-2'><img src={arrow} alt="arrow"/></span>
                </div>
                <div className='px-1'>Notes</div>
            </div>
        </div>
        <div className='d-flex align-items-lg-center'>
            <div className='px-4'>
                <img src={notification} alt="notf"/>
            </div>
            <div className=''>
                <img src={profile} alt="profile"/>
            </div>
        </div>
    </div>
  )
}

export default Header;
