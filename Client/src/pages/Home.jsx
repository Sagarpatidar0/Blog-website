import FrontBlog from '.././component/Front/FrontBlog';
import Header from '../component/Navbar/Header';
import Navbar from '../component/Navbar/Navbar';
import Recent from '../component/Recent-blog/Recent';
import Socialmedia from '../component/SOCIAL-MEDIA/Socialmedia';

function Home() {
    return (
        <div>
            <Header />
            <Navbar />
            <FrontBlog />
            <div style={{ display: "flex" }}>
                <Recent />
                <Socialmedia />
            </div>

        </div>
    )
}

export default Home