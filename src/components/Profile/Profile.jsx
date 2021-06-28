import PropTypes from 'prop-types';
import defaultImage from './default.jpg'
import css from './Profile.module.css'

const Profile = ({ avatar = defaultImage, name, tag, location, stats }) => {
    return (
    <div className={css.profile}>
      <div className={css.description}>
          <img
          src={avatar}
          alt={name}
          className={css.avatar}
          />
          <p className={css.name}>{name}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
          <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
          </li>
          <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
          </li>
          <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
          </li>
      </ul>
    </div>
);
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
}

export default Profile;