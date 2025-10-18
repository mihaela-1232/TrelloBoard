import { FaHome, FaSearch, FaTrello } from 'react-icons/fa';
import { BoardCard } from '../components/BoardCard';
import { TbHomeCog } from 'react-icons/tb';
import { FaBowlFood } from 'react-icons/fa6';
import { IoBarbellSharp, IoBook } from 'react-icons/io5';
import { RiLightbulbFlashFill } from 'react-icons/ri';
import { MdWork } from 'react-icons/md';
import { ButtonBoardCard } from '../components/ButtonBoardCard';

const Home = () => {
  return (
    <div>
      <div className="bg-slate-950 h-15 w-screen flex">
        <div className="flex gap-4 px-3 py-5">
          <FaHome className="text-blue-400 text-xl" />
          <FaSearch className="text-blue-400 text-xl" />
          <FaTrello className="text-blue-400 text-xl" />
        </div>
        <h1 className="text-white text-xl font-bold py-4">Trello</h1>
      </div>

      <div className="bg-slate-950 min-h-screen border-y border-slate-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 px-8 mx-6 py-6 items-center justify-center">
          <BoardCard title={'Work'} icon={MdWork} />
          <BoardCard title={'Home'} icon={TbHomeCog} />
          <BoardCard title={'Food'} icon={FaBowlFood} />
          <BoardCard title={'Sport'} icon={IoBarbellSharp} />
          <BoardCard title={'Teach'} icon={IoBook} />
          <BoardCard title={'Idea'} icon={RiLightbulbFlashFill} />
        </div>
        <ButtonBoardCard />
      </div>
    </div>
  );
};
export default Home;
