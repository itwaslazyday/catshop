import { Good } from '../../types/types';
import GoodItem from '../good-item/good-item';
import './goods-list.css';

type GoodsListProps = {
  goods: Good[];
}


function GoodsList ({goods}: GoodsListProps): JSX.Element {
  return (
    <ul className='goods__list list-reset'>
      {goods.map((item: Good) => <GoodItem key={item.id} good={item}/>)}
    </ul>
  );
}

export default GoodsList;
