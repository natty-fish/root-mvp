import { Button } from 'antd';
import { LoginOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    return (<>
        <header className="flex justify-between items-center py-4">
            <Link to="/">
                <h1 className="text-xl font-bold">TradeEthio</h1>
            </Link>
            <nav className='pr-2'>
                <ul className="flex space-x-4">
                    <li>Overview</li>
                    <li>Market</li>
                    <li>Trade</li>
                    <li>Portfolio</li>
                    <li>Reports</li>
                </ul>
            </nav>
            {
                location.pathname === '/' && (
                    <div>
                        <Link to="/signin">
                            <Button type="link" icon={<LoginOutlined />}>Log in</Button>
                        </Link>
                        <Link to="/signup">
                            <Button type="text" icon={<UserAddOutlined />}>Sign up</Button>
                        </Link>
                    </div>
                )
            }
        </header>
    </>
    )
}

export default NavBar