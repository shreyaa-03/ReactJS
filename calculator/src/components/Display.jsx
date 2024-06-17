import style from "../css/Display.module.css";
export default function Display({display}) {
  return (
    <div>
      <input className={style["display"]} type="text" value={`${display}`} readOnly />
    </div>
  );
}
