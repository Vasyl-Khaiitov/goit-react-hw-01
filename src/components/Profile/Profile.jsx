import style from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={style.container}>
      <div className={style.box_profil}>
        <img
          className={style.img_portfolio}
          src={image}
          alt="User avatar"
          width={220}
          height={220}
        />
        <p className={style.text}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={style.profile_list}>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
