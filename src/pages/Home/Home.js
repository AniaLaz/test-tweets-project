import css from '../Home/Home.module.css';
import img from "../../img/2204_w046_n004_88b_p1_88.jpg"


export const Home = () => {
  
  return (
    <div>
      <h1 className={css.title}>My best Tweet</h1>
   
      <img src={img} alt="fone" className={css.img} />
    </div>
  );
};
