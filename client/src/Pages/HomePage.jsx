import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const currentUser = useSelector((state) => state.currentUser);
    console.log("our current user: ", currentUser)
    return (
        <div className="container mx-auto px-4">
            <main>
                <section className="text-center p-8">
                    <h2 className="text-2xl font-bold mb-4">Invest in the future</h2>
                    <p>Trade stocks, ETFs, and options on TradeEthio. Enjoy tech-forward trading tools and expert support, with no trade commissions.</p>
                    <div className="mt-4">
                        <Link to="/signin">
                            <Button type="link" size="large">Log in</Button>
                        </Link>

                        <Link to="/signup">
                            <Button type="default" size="large">Sign up</Button>
                        </Link>

                    </div>
                </section>



            </main>

            <footer>
                <p className="text-center py-4 text-gray-500">© 2024 TradeEthio. All rights reserved.</p>
            </footer>

        </div>
    );
};

export default HomePage;
