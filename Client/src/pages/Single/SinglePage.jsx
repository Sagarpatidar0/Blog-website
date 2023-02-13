import './singlepage.css'
import SinglePost from '../../component/SinglePost/SinglePost'
import Socialmedia from '../../component/SOCIAL-MEDIA/Socialmedia'
import Header from '../../component/Navbar/Header';
import Navbar from '../../component/Navbar/Navbar'; 

export default function SinglePage() {
  return (<>
    <Header />
    <Navbar />
    <div className='single-page'>
      <SinglePost />
      <Socialmedia className="single-page-social-media" />
    </div>
  </>
  )
}
