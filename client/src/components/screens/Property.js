import React from "react";
import "../css/card.css"
import "../css/landing.css";
import bhk from "../img/newer/Group 11652.svg";
import bath from "../img/newer/bath.svg";
import bed from "../img/newer/bed-double.svg";
import expand from "../img/newer/expand.svg";
import hospital from "../img/Vector.svg";
import park from "../img/Group 11653.svg";
import bus from "../img/Vector (2).svg";
import school from "../img/Group 11654.svg";
import gym from "../img/Vector (1).svg";
import Card from "./Card";

const Property = () => {
  return (
    <>
      <div className="one">
        <div className="first-p">For Rent</div>
        <div className="second-p">
          <p>2BHK Apartment for Sale in Newtown, Kolkata, West Bengal</p>
        </div>

        <div className="two">
          <div className="flexer">
            <div className="flex-1" data-aos="flip-right">
              <img
                src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
              />
            </div>
            <div className="flex-2">
              <div className="flex-2-child">
                <img
                  src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <div className="flex-2-child">
                <img
                  src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <div className="flex-2-child">
                <img
                  src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <div className="flex-2-child">
                <img
                  src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="three">
          <div className="three-child-1">
            <p className="three-child-p">
              <i className="bi bi-upload"></i>
            </p>
            <p className="three-child-p">
              <i className="bi bi-heart"></i>
            </p>
            <p className="three-child-p add">
              <i className="bi bi-arrow-left-right"></i>
            </p>
          </div>
          <p className="cost-p" data-aos="flip-right"> &#8377; 25000</p>
        </div>

        <div className="four">
          <div className="four-child" >
            <p className="four-p-one"  data-aos="slide-right">
              SP Sukhobrishti Ln, Action Area III, Newtown, Kolkata, West Bengal
              700135, India
            </p>
            <div className="four-super-child">
              <div className="onner">
              <p className="four-p-two">
                <i className="bi bi-whatsapp" style={{ color: "white" }}></i>
              </p>
              </div>
              <div className="twoer">
              <p className="four-p-three">Contact Owner</p>
              </div>
            </div>
          </div>
        </div>

        <div className="five">
          <ul className="list-control" data-aos="flip-left">
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#details">Details</a>
            </li>
            <li>
              <a href="#features">Features & Amenities</a>
            </li>
            <li>
              <a href="#nearby">Nearby</a>
            </li>
          </ul>
        </div>

        <p className="overview checker" id="overview" data-aos="flip-right">
          Overview
        </p>
        <p className="overview-data" data-aos="flip-right">
          Property taxes are charged by local government entities, such as KMC,
          and are due by the owner of the property. The amount of KMC property
          tax that must be paid may vary. Thus, it depends on the location and a
          number of other criteria. KMC approved the new Unit Area Assessment
          (UAA) mechanism for calculating property taxes in March 2017.
        </p>

        <p className="details checker" id="details" data-aos="flip-right">
          Details
        </p>
        <div className="details-div">
          <div className="details-child" data-aos="flip-left">
            <img src={bhk} alt="" />
            <p className="s-child">BHK</p>
            <p className="s-s-child">3BHK</p>
          </div>
          <div className="details-child" data-aos="flip-left">
            <img src={bath} alt="" />
            <p className="s-child">Bathroom</p>
            <p className="s-s-child">2</p>
          </div>
          <div className="details-child" data-aos="flip-left">
            <img src={bed} alt="" />
            <p className="s-child">Furnishing Status</p>
            <p className="s-s-child">Semi-Furnished</p>
          </div>
          <div className="details-child" data-aos="flip-left">
            <img src={expand} alt="" />
            <p className="s-child">Super Build Area</p>
            <p className="s-s-child">1418 Sq.ft</p>
          </div>
        </div>

        <p className="features checker" id="features"  data-aos="flip-right" >
          Features & Amenities
        </p>
        <ul className="second-list-control">
          <li className="second-li">
            <i className="bi bi-check2-circle"></i> &nbsp; CCTV
          </li>
          <li className="second-li">
            <i className="bi bi-check2-circle"></i> &nbsp; Security
          </li>
          <li className="second-li">
            <i className="bi bi-check2-circle"></i> &nbsp; Life
          </li>
        </ul>

        <p className="nearby checker" id="nearby" data-aos="flip-right">
          Nearby
        </p>
        <div className="nearby-div">
          <div className="nearby-div-child" data-aos="flip-right">
            <img src={hospital} alt="" />
            <p>Hospital</p>
          </div>
          <div className="nearby-div-child"  data-aos="flip-right">
            <img src={park} alt="" />
            <p>Park</p>
          </div>
          <div className="nearby-div-child"   data-aos="flip-right">
            <img src={bus} alt="" />
            <p>Bus</p>
          </div>
          <div className="nearby-div-child"  data-aos="flip-right">
            <img src={school} alt="" />
            <p>School</p>
          </div>
          <div className="nearby-div-child"   data-aos="flip-right">
            <img src={gym} alt="" />
            <p>Gym</p>
          </div>
        </div>

        <p className="similar  checker" data-aos="flip-right">Similar Properties</p>
        <div className="card-container">
        <Card/>
        <Card/>
        <Card/>
        </div>
        
      </div>
    </>
  );
};

export default Property;
