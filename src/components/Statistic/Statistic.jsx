import { Title } from '../Title/Title';
import { StatisticList } from '../StatisticList/StatisticList';
import css from './Statistic.module.css';

const Statistic = ({data}) => {
    return <section className={css.section}>
        <div className={css.statistics}>
        {data.title && <Title title={data.title}/>}
        <StatisticList
                stats={data.statsData} />
        </div>
</section>
}

export default Statistic;