import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileCard}>
      <div>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.profileTitle}>{name}</p>
        <p className={css.profileText}>@{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span className={css.profileSubtitle}>Followers</span>
          <span className={css.profileStats}>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileSubtitle}>Views</span>
          <span className={css.profileStats}>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileSubtitle}>Likes</span>
          <span className={css.profileStats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
