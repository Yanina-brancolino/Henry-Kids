import React from "react";
import styles from "./Card.module.css";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../../actions";

export default function Card({
  id,
  value,
  title,
  category,
  description,
  video_link,
  difficulty,
  game_link,
  valoration,
}) {
  let firstIndex = video_link && video_link.indexOf("=") + 1;
  let slice = video_link && video_link.slice(firstIndex, video_link.length);

  let url = `https://img.youtube.com/vi/${slice}/hqdefault.jpg`;

  const dispatch = useDispatch();

  const idUser = window.localStorage.sessionUser;

  function onclickFav(e, idUser, id) {
    e.preventDefault();
    console.log(e.target.checked)
    /* dispatch(setFavorite(idUser, id)); */
  }


  return (
    <div className={styles.card} value={value}>
      <div className={styles.threeBtns} />
      <FormGroup row>
      <FormControlLabel
        className={styles.icono}
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
        label=""
        onChange={e => onclickFav(e, idUser, id)}
      />
  </FormGroup>
  <Link to={"/home/student/" + id}>
      <div className={styles.cardHeader}>
        <img src={url} alt="Contenido sin imagen disponible" />
      </div>

      <p className={styles.category}>{category}</p>
      <div className={styles.cuerpoTexto}>
        <div className={styles.title}>{title}</div>

        <div className={styles.description}>{description}</div>

        <div className={styles.instructor}>Dificultad: {difficulty} </div>
        <p className={styles.valoration}>Valoraci??n: {valoration}
        <img
            src="https://dondeestanlasluces.files.wordpress.com/2017/08/stars.png"
            alt="user"
          />
        </p>
      </div>
      </Link>
    </div>
  );
}
