import { Title } from '../Title/Title';
import { StatisticList } from '../StatisticList/StatisticList';
import css from './Statistic.module.css';

const Statistic = ({data}) => {
    return <section className={css.statistics}>
        <Title
            title={data.title}/>
        <StatisticList
            stats={data.statsData}/>
</section>
}

export default Statistic;