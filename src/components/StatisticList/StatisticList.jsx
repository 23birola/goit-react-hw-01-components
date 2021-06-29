import { StatisticItem } from '../StatisticItem/StatisticItem';
import css from './StatisticList.module.css';

export const StatisticList = ({stats}) => {
  return <ul className={css.statList}>
    {stats.map(stat => (
      <li className={css.item} key={stat.id}>
        <StatisticItem
          name={stat.name}
          value={stat.value}/>
      </li>
    ))}
  </ul>
}