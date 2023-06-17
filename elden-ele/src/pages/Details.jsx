import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import UserContact from "../components/UserContact";
import VehicleDetails from "./categorizedDetails/VehicleDetails";
import Image1 from "../assets/ilan2.jpg";
import Image2 from "../assets/ilan1.jpg";
import Footer from "../components/Footer";
import axios from "axios";

function Details(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [activePhoto, setActivePhoto] = useState(Image1);

  const handlePhoto = useCallback((photo) => {
    setActivePhoto(photo);
  }, []);

  const handleTabClick = useCallback((tabName) => {
    setActiveTab(tabName);
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/get/:id`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <Container className="container">
        <h1>Supra</h1>
        <hr />
        <div className="row">
          <div>
            <b>Kategori: </b>
            <Link to="/category">{data.categoryName}</Link>
          </div>
          <div className="col-md-6">
            <div>
              <img
                className={`${activePhoto === Image1 ? "active" : ""}`}
                onClick={() => handlePhoto(Image1)}
                src={Image1}
                alt="Image1"
                style={{ width: "90%", height: "90%" }}
              />
            </div>
            <div
              className="d-flex flex-row justify-content-between"
              style={{ width: "36rem" }}
            >
              <div className="card">
                <img src={Image2} className="card-img-top" alt="Image2" />
              </div>
              <div className="card">
                <img src={Image1} className="card-img-top" alt="Image1" />
              </div>
              <div className="card">
                <img src={Image2} className="card-img-top" alt="Image2" />
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h5 className="text-primary">13000</h5>
            <div className="bread">
              <nav aria-label="breadcrumb">
                <ol style={{ backgroundColor: "white" }} className="breadcrumb">
                  <li className="breadcrumb-item">Aydın</li>
                  <li className="breadcrumb-item">Germencik</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Turanlar Mah.
                  </li>
                </ol>
              </nav>
            </div>
            <Divider />
            <div className="d-flex flex-nowrap justify-content-between">
              <b>İlan No</b>
              <p>201354</p>
            </div>
            <Divider />
            <div className="d-flex flex-nowrap justify-content-between">
              <b>İlan Tarihi</b>
              <p>10 Mayıs 2023</p>
            </div>
            <Divider />
            <VehicleDetails data={data} />
          </div>
          <UserContact name={"Sezer Karakaş"} phoneNumber={"2565691216"} />
        </div>
        <br />
        <div className="row">
          <div className="container">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === "about" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("about")}
                >
                  İlan Açıklaması
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === "about" ? "show active" : ""
                }`}
                id="about"
                role="tabpanel"
                aria-labelledby="about-tab"
              >
                İlan Detayları
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "specification" ? "show active" : ""
                }`}
                id="specification"
                role="tabpanel"
                aria-labelledby="specification-tab"
              >
                Supra modifiye edilebilir bir arabadır. Her türden modifiye
                yapılabilir.
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  margin-top: 100px;
`;

const Divider = styled.div`
  border-top: 1px solid #dbdbdb;
  padding: 2px 0;
`;

export default Details;
