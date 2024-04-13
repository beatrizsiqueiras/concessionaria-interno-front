import { BsCardHeading } from "react-icons/bs";
import { FaCar, FaSignOutAlt, FaUser } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default function Header() {
    return (
        <header className='bg-white text-[#006494] font-mono border-b-2 uppercase font-thin sticky top-0 z-50'>
            <div className='flex flex-row'>
                <div className='basis-32 flex justify-center'>
                    <img
                        className='h-20 w-auto'
                        src='https://static.vecteezy.com/system/resources/previews/013/923/528/non_2x/sports-car-silhouette-black-logo-png.png'
                        alt=''
                    />
                </div>
                <div className='basis-1/4 flex align-text-bottom justify-start mt-5'>
                    <a className='text-4xl' href='/'>
                        PrimeDrive
                    </a>
                </div>
                <div className='basis-9/12 mt-5'>
                    <nav className='flex justify-between mr-6 text-5xl'>
                        <a className='hover:text-gray-300'>
                            <MdSpaceDashboard />
                        </a>

                        <a className='hover:text-gray-300'>
                            <BsCardHeading />
                        </a>
                        <a className='hover:text-gray-300'>
                            <FaPeopleGroup />
                        </a>
                        <a className='hover:text-gray-300'>
                            <FaCar />
                        </a>
                        <a className='hover:text-gray-300' href='#'>
                            <RiMoneyDollarCircleFill />
                        </a>
                        <a className='hover:text-gray-300'>
                            <IoSettings />
                        </a>
                        <a className='hover:text-gray-300'>
                            <FaUser />
                        </a>
                        <a className='hover:text-gray-300'>
                            <FaSignOutAlt />
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
