import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUyariFalse } from "../../app/features/UyariSlice";
import { UyarıConteiner } from "./Uyarımodal-styled";

function UyarıModal({ uyarı }) {
  const dispatch = useDispatch();
  const { message } = useSelector((s) => s.uyari);
  const [sayac, setSayac] = useState(100);

  useEffect(() => {
    let timer = setInterval(() => {
      setSayac(sayac - 1);
    }, 10);
    sayac <= 0 && clearInterval(timer);
    sayac <= 0 && dispatch(setUyariFalse());
    return () => {
      clearInterval(timer);
    };
  }, [sayac, dispatch]);

  return (
    <UyarıConteiner state={`${sayac * 1}%`}>
      <div>
        <p>{message}</p>
        <main></main>
      </div>
    </UyarıConteiner>
  );
}

export default UyarıModal;
