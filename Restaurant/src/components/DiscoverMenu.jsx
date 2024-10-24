import styles from "./Homepage.module.css";
import { NavLink } from "react-router-dom";
const DiscoverMenu = () => {
  return (
    <>
      <div className={styles.MenuHeading}>DISCOVER OUR MENU</div>
      <div className={styles.MenuContent}>
        <div className={styles.Menu1}>
          <button className="btn btn-danger">
            <NavLink to="/menu" className="text-light">
              LUNCH
            </NavLink>
          </button>
        </div>
        <div className={styles.Menu2}>
          <button className="btn btn-danger">
            <NavLink to="/menu" className="text-light">
              DRINKS
            </NavLink>
          </button>
        </div>
        <div className={styles.Menu3}>
          <button className="btn btn-danger">
            <NavLink to="/menu" className="text-light">
              SALAD
            </NavLink>
          </button>
        </div>
        <div className={styles.Menu4}>
          <button className="btn btn-danger">
            <NavLink to="/menu" className="text-light">
              DESSERT
            </NavLink>
          </button>
        </div>
        <div className={styles.Menu5}>
          <button className="btn btn-danger">
            <NavLink to="/menu" className="text-light">
              STARTER
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default DiscoverMenu;
