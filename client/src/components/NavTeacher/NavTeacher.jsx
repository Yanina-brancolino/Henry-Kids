import React from "react";
import {useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavTeacher.module.css";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from "@material-ui/core/Avatar"
import { auth } from "../../firebase/firebaseConfig";
import { useSelector, useDispatch} from "react-redux";
import { getCategory, filterCategoryTeacher } from "../../actions";
import { makeStyles } from '@material-ui/core/styles';



export default function NavTeacher() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  const dispatch = useDispatch()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const signOutUser = (e) =>  {
    auth
      .signOut(auth)
      .then(() => {
        console.log("done");
        navigate("/");
        window.location.reload();
        localStorage.clear();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      marginRight: "20px",
      cursor: "pointer",
    },
  }));
  const classes = useStyles();
  // function handdleSubmit(e){
  //   e.preventDefault();
  //  console.log( e.target.value);
  // ESTO VA EN EL BOTON onClick={(e) => handdleSubmit(e)} onChange={(e) => handleInput(e)}
  // }
  
  const allCategory = useSelector((state) => state.category)

  function handleCategoryTeacher(e){
    e.preventDefault();
    dispatch(filterCategoryTeacher(e.target.value))
  }

 useEffect(()=> {
  dispatch(getCategory())
}, [dispatch])


  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
          <img
            className={styles.logo}
            src="https://i.imgur.com/AWEe2XR.png"
            alt="not found"
          />
      </div>

      {/* <div className={styles.contentSearch}>
          <input
            type="text"
            placeholder="Buscar por profesor/curso..."
            className={styles.inputSearch}
          />
          <button className={styles.buscador}>
            <Icon>search</Icon>
          </button>
        </div> */}

      <Link to="/interaction">
        <button className={styles.inter}>Interacci??n</button>
      </Link>
      <div className={styles.contenCat}>
          <select name="" id="" className={styles.select} onChange={(e) => handleCategoryTeacher(e)}>
          <option
              value=""
              selected
              disabled
              hidden
              className={styles.selects}
            >
              {" "}
              Tecnolog??a{" "}
            </option>
          <option value="all"> Todos</option>  
          <option value="1"> JavaScript</option>
          <option value="2"> React</option>
          <option value="3"> HTML</option>
         {/*  {
             allCategory.map((e) => (
              <option value={e} key={e}>{e}</option>
               
            ))
          } */}
          </select>
        </div>
      <div className={styles.contenValorado}>
        {/* <select name="" id="" className={styles.select}>
            <option
              value=""
              selected
              disabled
              hidden
              className={styles.selects}
            >
              {" "}
              Valoraci??n{" "}
            </option>
            <option value="" className={styles.selects}>
              ???????????????
            </option>
            <option value="" className={styles.selects}>
              ????????????
            </option>
            <option value="" className={styles.selects}>
              ?????????
            </option>
            <option value="" className={styles.selects}>
              ??????
            </option>
            <option value="" className={styles.selects}>
              ???
            </option>
          </select> */}

        <Link to="/home/create-clase">
          <button className={styles.blue}>Crear clase</button>
        </Link>
      </div>    

    <div className={styles.imagen}>
      
     {/*<img
            src="https://static.diariofemenino.com/media/13502/carta-gracias-profesor.jpg"
            alt="404"
            className={styles.img}
     onClick={handleClick}/>*/ }</div> 
      <Avatar 
      src="https://englishboutique.com.ar/wp-content/uploads/2020/09/profesora.png"
      onClick={handleClick}
      className={classes.large}
      />
     
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <Link to="/home/teacher/profile">
        <MenuItem onClick={handleClose}> Perfil </MenuItem>
        </Link>
        <MenuItem onClick={signOutUser}> Salir </MenuItem>
      </Menu>


      {/* <div className={styles.contentBoton}> */}
      {/* <input className={style.botonInSesion}type="submit" value="Usuario"/> */}
      {/* <div className={styles.botonInSesion}> */}
      {/* <p>Usuario</p>
     </div>
    </div> */}
    </nav>
  );
}
