
import Header from '../Components/Header';
import Marque from '../Components/Marque';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LayoutComponents/LeftNavbar';
import RightLogin from '../Components/LayoutComponents/RightLogin';
import FindUs from '../Components/LayoutComponents/FindUs';

const HomeLayout = () => {
  
    // "category_id": "01",
// "category_name": "Breaking News"
    return (
        <div  className=' w-11/12 mx-auto font-serif'>
            <Header></Header>
            <Marque></Marque>
            <Navbar></Navbar>
           <main className='grid md:grid-cols-12'>
            <aside className='col-span-3'>
              <LeftNavbar></LeftNavbar>
            </aside>
            <section className='col-span-6'>
                middle side
            </section>
            <aside className='col-span-3 space-y-8'>
                <RightLogin></RightLogin>
                <FindUs></FindUs>
            </aside>
           </main>
        </div>
    );
};

export default HomeLayout;