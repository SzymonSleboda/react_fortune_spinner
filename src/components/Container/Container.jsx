import s from "./Container.module.css";

const Container = ({ children }) => {
  return <div className={s.app_container}>{children}</div>;
};
export default Container;
