import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavTeacher from "../NavTeacher/NavTeacher.jsx";
import Paged from "../Paged/Paged.jsx";
import styles from "./HomeTeacher.module.css";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router";
import CardTeacher from "../CardTeacher/CardTeacher.jsx";
import { getAllClassTeacher, editUser } from "../../actions/index.js";


export default function HomeTeacher() {

  const allClassTeacher = useSelector((state) => state.allClassTeacher);
  const dispatch = useDispatch();
  let idUser = window.localStorage.sessionUser

  let cardsInPage = 8;
  let [page, setPage] = useState(1);


  useEffect(() => {
    dispatch(getAllClassTeacher(idUser))
  }, [idUser, dispatch]);

  useEffect(() => {
    dispatch(
      editUser("provi", {
        id: window.localStorage.sessionUser,
      })
    );
    setPage(1);
  }, [setPage, dispatch]);


  let currentPage;
  let indexLastPage = page * cardsInPage;
  let indexFirstPage = indexLastPage - cardsInPage;

  allClassTeacher?.length > 8
    ? currentPage = allClassTeacher.slice(indexFirstPage, indexLastPage)
    : currentPage = allClassTeacher;

  function Paginate(e, num) {
    e.preventDefault();
    setPage(num);
  }

  return (
    <div className={styles.home}>
      <div className={styles.nav}>
        <NavTeacher />
      </div>
      <div className={styles.cards}>
        {currentPage && currentPage.map((e) => {
          return (
            <div key={e.id}>
              <CardTeacher
                id={e.id}
                title={e.title}
                category={e.category}
                description={e.description}
                video_link={e.video_link}
                difficulty={e.difficulty}
                game_link={e.game_link}
                valoration={e.valoration}
              /> </div>)
        }
        )}
      </div>

      <div>
        <Paged cardsInPage={cardsInPage} totalElements={allClassTeacher?.length}
          paginate={Paginate} />
      </div>


    </div>
  );
}
