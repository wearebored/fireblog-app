import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import Dasboardokuma from "../../helpers/Dashboarveri/Dasboardokuma";
import { Cards, HomeCon } from "./Dashboard-styled";

function Dashboard() {
  const { modal } = useSelector((s) => s.modal);
  const [data, setData] = useState("");
  useEffect(() => {
    Dasboardokuma(setData);
  }, [setData]);

  return (
    <HomeCon>
      {modal && <Modal />}
      <h3>Dashboard</h3>
      <Cards>
        {data?Object.keys(data).map((e, index) => (
            <Card key={index} id={e} veri={data[e]} />
          )):<p>veri yok</p>
          }
      </Cards>
    </HomeCon>
  );
}

export default Dashboard;
