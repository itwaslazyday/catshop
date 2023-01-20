import { goods } from '../../mock';
import GoodsList from '../../components/goods-list/goods-list';
import './main.css';


function Main (): JSX.Element {
  return (
    <section className='goods'>
      <div className='container'>
        <div className='goods__inner'>
          <h2 className='goods__title'>Ты сегодня покормил кота?</h2>
          <GoodsList goods={goods}/>
        </div>
      </div>
    </section>
  );
}

export default Main;
