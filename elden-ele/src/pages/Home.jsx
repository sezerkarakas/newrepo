import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/logo1.jpg";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Image1 from "../assets/ilan1.jpg";
import Image2 from "../assets/ilan2.jpg";
import Image3 from "../assets/ilan3.jpg";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { firebaseAuth } from "../utils/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";

function Home() {
  const [backendData, setBackendData] = useState([{}]);
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getAll");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Veri alınırken bir hata oluştu:", error);
    }
  };

  /*
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("/api")
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  });*/

  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ads, setAds] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setIsLoggedIn(true);
      return isLoggedIn;
    } else setIsLoggedIn(false);
    return isLoggedIn;
  });

  const cards = [
    {
      _id: "1",
      title: "ilan 1",
      image: Image1,
      price: "100 TL",
    },
    {
      _id: "2",
      title: "ilan 2",
      image: Image2,
      price: "200 TL",
    },
    {
      _id: "3",
      title: "ilan 3",
      image: Image3,
      price: "300 TL",
    },
    {
      _id: "4",
      title: "ilan 4",
      image: Image2,
      price: "400 TL",
    },
    {
      _id: "5",
      title: "ilan 5",
      image: Image3,
      price: "500 TL",
    },
    {
      _id: "6",
      title: "ilan 6",
      image: Image1,
      price: "600 TL",
    },
    {
      _id: "7",
      title: "ilan 7",
      image: Image3,
      price: "700 TL",
    },
    {
      _id: "8",
      title: "ilan 8",
      image: Image2,
      price: "800 TL",
    },
  ];
  const residence = [
    {
      _id: 1,
      title: "ilan 1",
      image: Image3,
      price: "100 TL",
    },
    {
      _id: 2,
      title: "ilan 2",
      image: Image3,
      price: "200 TL",
    },
    {
      _id: 3,
      title: "ilan 3",
      image: Image3,
      price: "200 TL",
    },
    {
      _id: 4,
      title: "ilan 4",
      image: Image3,
      price: "200 TL",
    },
    {
      _id: 5,
      title: "ilan 5",
      image: Image3,
      price: "200 TL",
    },
    {
      _id: 6,
      title: "ilan 6",
      image: Image3,
      price: "200 TL",
    },
  ];

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const getAllAds = async () => {
    const res = await getAdsFromAPI();
    setAds(res);
  };

  const handleSearch = async (word) => {
    if (word === "") {
      getAllAds();
      window.location.reload();
    } else {
      const res = await getAdsFromAPI();
      const filteredAds = res.filter((ad) =>
        ad.title.toLowerCase().includes(word.toLowerCase())
      );
      setAds(filteredAds);
      setSearchWord(word);
      if (filteredAds.length === 0) {
        toast.warning("Aradığınız sonuç bulundamadı.");
      }
    }
  };

  const getAdsFromAPI = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...cards, ...residence]);
      }, 1000);
    });
  };

  function ShowMore({ items, visibleItemCount, searchWord }) {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
      setShowMore(!showMore);
    };
    const visibleItems = showMore ? items : items.slice(0, visibleItemCount);

    return (
      <div>
        <CardsContainer>
          {searchWord === ""
            ? visibleItems.map((item) => (
                <Card
                  key={item._id}
                  _id={item._id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  isLiked={false}
                />
              ))
            : ads.map((ad) => (
                <Card
                  key={ad._id}
                  _id={ad._id}
                  title={ad.title}
                  image={ad.image}
                  price={ad.price}
                />
              ))}
        </CardsContainer>
        <div className="d-flex justify-content-center">
          <span>
            <button
              style={{ borderRadius: "8px", marginTop: "10px" }}
              onClick={handleShowMore}
            >
              {showMore ? "Daha Az Göster" : "Daha Fazla Göster"}
            </button>
          </span>
        </div>
      </div>
    );
  }

  return (
    <Container>
      <Navbar isScrolled={isScrolled} handleSearch={handleSearch} />
      <div className="hero">
        <img
          src={backgroundImage}
          alt="background"
          className="background-image"
        />
        <div className="container">
          <div className="logo"></div>
          <div className="buttons flex"></div>
        </div>
      </div>
      <MainContent>
        <ToastContainer />
        <Sidebar />

        <div className="container">
          <div>
            <div className="row">
              <h2>Vasıta Kategorisinde Öne Çıkan İlanlar</h2>
              <ShowMore
                items={data}
                visibleItemCount={4}
                searchWord={searchWord}
              />
            </div>
            <div className="row">
              <h2>Emlak Kategorisinde Öne Çıkan İlanlar</h2>
              <ShowMore
                items={residence}
                visibleItemCount={4}
                searchWord={searchWord}
              />
            </div>
          </div>
        </div>
      </MainContent>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 1rem;

  .hero {
    position: relative;
    height: 90px;
    background-color: #005cbf;
    overflow: hidden;
    border-radius: 4px;

    .container {
      position: absolute;
      bottom: 1rem;
      left: 1rem;

      .logo {
        img {
          width: 200px;
        }
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;

        button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          background-color: #f5f5f5;
          color: #005cbf;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s;
          &:hover {
            background-color: #ddd;
          }
        }
      }
    }
  }
`;

const MainContent = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 2fr);
    gap: 0;
    .row {
      margin-top: 5%;
      font-style: oblique;
      h2 {
        font-size: 21px;
      }
    }
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default Home;
